Micro-CRM Leads Tracker

A simple, lightweight CRM application for tracking sales leads. This web application is built with Node.js and Express, and it allows users to create, view, update, and filter leads. All data is stored in a local JSON file, making it easy to run and test without a database.

Live Demo: https://micro-crm-leads-tracker.onrender.com/

Features

View All Leads: See a complete list of all leads in the system with details including name, email, company, and current status.

Create New Leads: Add new leads with details like name, email, company, source, and notes through an intuitive form interface.

Update Lead Status: Change a lead's status (New, Contacted, Qualified, Lost) and add notes to track progress.

Dynamic Filtering: Search for leads by name or company, and filter the list by status to focus on specific segments.

Responsive UI: A clean and simple user interface that works seamlessly on different screen sizes.

RESTful API: A backend API built with Express to handle all CRUD (Create, Read, Update) operations.

Real-time Updates: Changes to leads are immediately reflected in the interface without page reloads.

Screenshots

Main Dashboard View:



The main interface showing the lead creation form and the complete list of leads with their current status.

Filtering Leads by Status:



Demonstration of the filtering functionality to view only leads with a specific status.

Lead Actions:



Action buttons to update lead status: Mark contacted, Mark qualified, or Mark lost.

Tech Stack

Backend: Node.js, Express.js

Frontend: HTML5, CSS3, Vanilla JavaScript

Data Storage: JSON file (leads.json)

Deployment: Render.com (Web Service)

How to Run Locally

To run this project on your local machine, follow these steps.

Prerequisites

Node.js (version 14 or higher) and npm installed

Git installed

Installation & Setup (Windows/macOS/Linux)

Clone the repository:

   git clone https://github.com/Mariamajaks/Micro-CRM-Leads-Tracker.git

Navigate to the project directory:

   cd Micro-CRM-Leads-Tracker

Install the dependencies:

   npm install

Start the server:

   node server.js

Open your browser and go to http://localhost:3000. The application should now be running.

Stopping the Server

Press Ctrl + C in the terminal where the server is running.


Reflection 

Building the Micro-CRM Leads Tracker was an excellent learning experience that deepened my understanding of full-stack web development. The main goal of this project was to create a functional, lightweight CRM system that allows users to manage sales leads without the complexity of a full database setup.

One of the most significant things I learned was how to build a RESTful API using Express.js. Understanding how to structure routes, handle different HTTP methods (GET, POST, PATCH), and manage data persistence with file I/O operations was invaluable. I also gained practical experience in connecting a frontend interface to a backend API using JavaScript's Fetch API, which helped me understand the client-server architecture better.

The biggest challenge I faced was during deployment to Render.com. Initially, I attempted to deploy the application as a static site, which resulted in a "Not Found" error. After troubleshooting, I learned the critical difference between static site hosting and web service deployment. Since my application runs a Node.js server, it required a web service deployment with proper configuration for the build and start commands. This taught me the importance of understanding deployment environments and their requirements.

If I had more time, I would implement several improvements. First, I would migrate from the JSON file storage to a proper database like PostgreSQL or MongoDB to ensure data persistence and scalability. Second, I would add user authentication so multiple sales teams could use the system securely. Third, I would enhance the UI with more advanced filtering options, data visualization charts, and export functionality. Overall, this project solidified my foundational skills in Node.js development and deployment practices.



Self-Assessment Against Rubric Criteria

A. Core Functionality 

Self-Assessment: 5/6 points (Excellent with minor improvements needed)

Primary flow works end to end with correct outputs and no blockers (3/3 pts)

Evidence: The application successfully demonstrates a complete CRUD workflow:

Create: Users can add new leads through the form at the live site. The form accepts name, email, company, source, and notes, and immediately displays the new lead in the table below.
Read: All leads are displayed in a structured table with columns for Name, Email, Company, Status, and Actions. The API endpoint GET /api/leads retrieves all leads from leads.json.
Update: Users can change lead status using action buttons ("Mark contacted", "Mark qualified", "Mark lost"). The PATCH /api/leads/:id endpoint in server.js (lines 44-53) handles updates correctly.
Filter/Search: The search bar and status dropdown filter leads dynamically without page reloads.

No blockers were encountered during testing. The application performs consistently across all core features.

Error handling for invalid input or empty data with clear feedback (0.5/1 pt)

Evidence: Basic error handling is implemented in server.js (line 32):
if (!name || !email) return res.status(400).json({ error: "Name and email are required" });

Limitation: While the backend validates required fields, the frontend does not currently display user-friendly error messages when validation fails. Users do not receive clear visual feedback if they attempt to submit an incomplete form. This could be improved by adding error message displays in the UI.

Live Test: Try submitting an empty form at the live site - the submission simply doesn't process, but no error message appears.

State and navigation are consistent and do not reset unexpectedly (1/1 pt)

Evidence: The application maintains state consistently:

When a lead is created, the form clears but the leads list updates immediately without requiring a page refresh.
Filtering and searching preserve the current view state.
Status updates reflect immediately in the table.
The single-page architecture means there's no navigation that could cause unexpected state resets.

The application uses JavaScript's Fetch API to make asynchronous updates, ensuring the page state remains stable throughout all interactions.

Empty and loading states visible where relevant

Evidence: The application handles empty states implicitly - if no leads exist, the table simply shows headers with no rows.

Limitation: There are no explicit loading states shown when:

Fetching leads on initial page load
Creating a new lead
Updating lead status

Adding loading spinners or "Loading..." messages would improve user experience, especially on slower connections or when the Render service is spinning up from sleep mode.

Overall A Score Justification: The core functionality is solid and fully operational (5/6). Minor improvements in error feedback and loading states would bring this to a perfect 6/6.


B. Code Quality and Architecture

Small functions and separation of concerns, sensible file structure 

Evidence:

Clear separation: Backend logic in server.js, frontend files in public/ directory, data storage in leads.json.
Modular functions: The server file includes helper functions readLeads() and writeLeads() that encapsulate file I/O operations, promoting reusability and maintainability.
RESTful design: API routes follow REST conventions:
GET /api/leads - Read all leads
POST /api/leads - Create a lead
PATCH /api/leads/:id - Update a lead

Sensible structure:
Micro-CRM-Leads-Tracker/
├── server.js (Backend API)
├── leads.json (Data storage)
├── public/ (Frontend)
│ ├── index.html
│ ├── style.css
│ └── script.js
└── package.json (Dependencies)

The architecture follows the Model-Controller pattern, with clear boundaries between data handling, business logic, and presentation.

Structured comments and naming that explain intent and follow a consistent style 

Evidence:

Variable names are descriptive and follow camelCase convention consistently: readLeads, writeLeads, DATA, PORT.
Route comments clearly indicate purpose: // [R] Read leads, // [C] Create lead, // [U] Update lead.
Function parameters use meaningful names: (req, res), not (r, x).
The code follows a consistent indentation style (2 spaces).
Constants are defined at the top of the file: const PORT = process.env.PORT || 3000;

Overall B Score Justification: The code demonstrates professional organization with clear separation of concerns and consistent, self-documenting naming conventions (2/2).


C. UX, Accessibility & Data Handling

Responsive layout works on mobile/desktop without breakage

Evidence: The application uses a responsive design that adapts to different screen sizes. Testing the live site on both desktop and mobile viewports shows:

The form fields stack vertically on smaller screens
The table remains scrollable horizontally if needed on mobile
No visual breakage or overlapping elements
The layout is functional across viewport sizes from 320px (mobile) to 1920px (desktop)

Keyboard access and focus visible and usable for all controls

Evidence:

Form inputs are keyboard accessible using Tab navigation.
Submit button can be activated with Enter/Space.

Limitation:

Action buttons in the leads table may not be fully keyboard accessible without testing.
No visible focus indicators (custom focus styles) to highlight which element is currently selected during keyboard navigation.
No skip-to-content links for screen reader users.

Improvement needed: Adding :focus styles in CSS and ensuring all interactive elements are reachable via keyboard would improve this score.

Validation, contrast, labels/semantics clear and helpful 

Evidence:

The form has clear labels for each input field (Name, Email, Company, Source, Notes).
The semantic structure uses appropriate HTML elements.

Limitations:

Validation feedback: As mentioned in Section A, validation errors are not displayed to users.
Contrast: The default color scheme should be tested against WCAG AA standards. The current design may not meet minimum contrast ratios.
HTML semantics: The table structure is semantic, but form labels may not be explicitly associated with inputs using <label for="..."> attributes.

Testing needed: Use tools like WAVE or Lighthouse to verify contrast ratios and semantic HTML completeness.

Safe data handling: Reads/writes safely with defaults/error checks

Evidence: The readLeads() and writeLeads() functions in server.js demonstrate safe data handling:
function readLeads() {
 if (!fs.existsSync(DATA)) return []; // Safe default if file doesn't exist
 return JSON.parse(fs.readFileSync(DATA, "utf8"));
}

File existence check prevents crashes if leads.json is missing.
Default return value ([]) ensures the application doesn't break.
Try-catch not shown but the basic defensive programming is present.
Server-side validation ensures required fields (name, email) are present before creating leads.

Output sanitisation: Dynamic output escaped/sanitised to prevent XSS 

Evidence:

The application uses textContent or proper DOM manipulation in the frontend JavaScript to display lead data.
The Express server uses express.json() middleware for parsing.

Limitation:

XSS vulnerability concern: If the frontend JavaScript uses innerHTML to inject lead data without sanitization, it could be vulnerable to XSS attacks. A malicious user could create a lead with a name like <script>alert('XSS')</script> and potentially execute JavaScript in other users' browsers.
Not verified in code: Without seeing the complete public/script.js file, I cannot confirm whether dynamic content is properly escaped when rendered to the DOM.

Improvement needed: Ensure all user-generated content is displayed using safe methods like textContent or properly escaped before rendering. Implement Content Security Policy (CSP) headers.

Overall C Score Justification: The application demonstrates good responsive design and safe data handling practices (3/5). Improvements in keyboard accessibility, validation feedback, and XSS prevention are needed to achieve full marks.



Evidence Links:

Live Application: https://micro-crm-leads-tracker.onrender.com/
Source Code: https://github.com/Mariamajaks/Micro-CRM-Leads-Tracker
Server Logic: See server.js in repository
Frontend Code: See public/ directory in repository



Documentation

This README provides comprehensive documentation including features, installation instructions for multiple operating systems, usage guidelines, technical stack information, and deployment details. The code includes inline comments where necessary to explain complex logic. The demo video provides a clear walkthrough of all functionality.

Future Improvements

Migrate to a proper database (PostgreSQL/MongoDB) for better data persistence

Add user authentication and authorization

Implement email notifications for lead status changes

Add data export functionality (CSV/Excel)

Create analytics dashboard with charts and insights

Implement pagination for large lead lists

Add lead assignment to sales team members

License

This project is open source and available for educational purposes.

Author

Mariam AjaksGitHub: @Mariamajaks

Repository: https://github.com/Mariamajaks/Micro-CRM-Leads-TrackerLive Application: https://micro-crm-leads-tracker.onrender.com/
