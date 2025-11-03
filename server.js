const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const DATA = path.join(__dirname, "leads.json");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

function readLeads() {
  if (!fs.existsSync(DATA)) return [];
  return JSON.parse(fs.readFileSync(DATA, "utf8"));
}

function writeLeads(leads) {
  fs.writeFileSync(DATA, JSON.stringify(leads, null, 2));
}

// --- ROUTES ---

// [R] Read leads
app.get("/api/leads", (req, res) => {
  const q = (req.query.q || "").toLowerCase();
  const status = (req.query.status || "").toLowerCase();
  let list = readLeads();
  if (q) list = list.filter(l => (l.name + l.company).toLowerCase().includes(q));
  if (status) list = list.filter(l => l.status.toLowerCase() === status);
  res.json(list);
});

// [C] Create lead
app.post("/api/leads", (req, res) => {
  const { name, email, company, source, notes } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Name and email are required" });

  const leads = readLeads();
  const lead = {
    id: Date.now().toString(),
    name,
    email,
    company: company || "",
    source: source || "",
    notes: notes || "",
    status: "New",
    createdAt: new Date().toISOString()
  };
  leads.push(lead);
  writeLeads(leads);
  res.status(201).json(lead);
});

// [U] Update lead
app.patch("/api/leads/:id", (req, res) => {
  const leads = readLeads();
  const idx = leads.findIndex(l => l.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });

  const allowed = ["status", "notes"];
  for (const k of allowed) {
    if (req.body[k] !== undefined) leads[idx][k] = req.body[k];
  }
  writeLeads(leads);
  res.json(leads[idx]);
});

// Root route
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
