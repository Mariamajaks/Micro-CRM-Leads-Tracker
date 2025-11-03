// Get references to key DOM elements
const grid = document.querySelector("#grid tbody");
const form = document.querySelector("#newLead");
const q = document.querySelector("#q");
const statusSel = document.querySelector("#status");

// Load leads when “Apply” filter button is clicked
document.querySelector("#applyFilters").addEventListener("click", load);

// Handle form submission (Add Lead)
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());

  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    alert("Validation failed");
    return;
  }

  form.reset();
  await load();
});

// Fetch and display all leads
async function load() {
  const params = new URLSearchParams();
  if (q.value) params.set("q", q.value);
  if (statusSel.value) params.set("status", statusSel.value);

  const res = await fetch("/api/leads?" + params.toString());
  const leads = await res.json();

  grid.innerHTML = leads.map(row).join("");
  bindActions();
}

// Create a row for each lead
function row(l) {
  return `<tr>
    <td>${l.name}</td>
    <td>${l.email}</td>
    <td>${l.company || ""}</td>
    <td>${l.status}</td>
    <td>
      <button class="link" data-id="${l.id}" data-s="Contacted">Mark contacted</button>
      <button class="link" data-id="${l.id}" data-s="Qualified">Mark qualified</button>
      <button class="link" data-id="${l.id}" data-s="Lost">Mark lost</button>
    </td>
  </tr>`;
}

// Attach click actions to buttons
function bindActions() {
  document.querySelectorAll("#grid button.link").forEach(b => {
    b.addEventListener("click", async () => {
      await fetch("/api/leads/" + b.dataset.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: b.dataset.s })
      });
      load();
    });
  });
}

// Load on startup
load();
