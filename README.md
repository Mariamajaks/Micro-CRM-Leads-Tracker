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

Self-Assessment



Functionality

My project successfully implements all core CRUD operations for managing leads. Users can create new leads with detailed information, view all leads in an organized table format, update lead statuses with notes, and filter/search the lead list dynamically. The application handles all user interactions smoothly without errors, and the backend API correctly processes all requests and persists data.

Code Quality

The code is well-organized with clear separation between frontend and backend concerns. The server.js file contains all API routes with descriptive endpoint names following RESTful conventions. The frontend JavaScript code in the public directory is modular and uses meaningful variable names. Error handling is implemented for missing required fields, and the code follows consistent formatting standards.

User Interface

The interface is clean, intuitive, and responsive. The form for adding leads is straightforward, and the leads table presents information clearly. Action buttons are well-labeled (Mark contacted, Mark qualified, Mark lost), making it easy for users to understand how to interact with the application. The search and filter features are prominently placed and work seamlessly.

Deployment

The application is successfully deployed to Render.com as a Web Service and is publicly accessible at the provided URL. The deployment process required understanding the difference between static sites and web services, properly configuring the start command (node server.js), and ensuring all dependencies were correctly specified in package.json. The live application performs reliably and maintains functionality across deployments.

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
