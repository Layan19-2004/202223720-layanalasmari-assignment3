# Layan Alasmari Portfolio – Assignment 3

## Project Description

This project is a personal portfolio website developed for Assignment 3 – Advanced Functionality.

The website builds on previous assignments by adding interactive and dynamic features using HTML, CSS, and JavaScript. It presents my academic background, projects, online courses, and contact information in a clean and responsive layout.

This version focuses on stronger functionality such as API integration, state management, advanced logic, and improved user experience.

---

## Features

### Core Sections
- About Me section
- Projects section
- GitHub Repositories section
- Online Courses section
- Contact section

### Advanced Functionality
- Dynamic greeting message based on time of day
- Dark / Light mode toggle
- Theme preference saved using localStorage
- Visitor name storage using localStorage
- Live timer showing time spent on the website
- Project filtering by category
- Project sorting (A-Z / Z-A)
- GitHub API integration to load repositories dynamically
- Contact form validation with clear error messages
- Smooth scrolling navigation
- Fade-in animations
- Responsive design for mobile devices

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- GitHub REST API
- LocalStorage

---

## Setup Instructions (Run Locally)

### Option 1: Open Directly
1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser.

### Option 2: Use VS Code Live Server
1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension.
3. Right-click `index.html`
4. Select **Open with Live Server**

---

## How to Use the Website

### Navigation
1. Use the top navigation bar to move between sections.
2. Click **View My Projects** to jump to the Projects section.

### Theme Toggle
1. Click **Dark Mode** to switch to dark theme.
2. In dark mode, click **Light Mode** to switch back.
3. The selected theme is saved automatically.

### Visitor Name
1. Enter your name in the input box.
2. Click **Save**.
3. Your name is remembered for future visits.

### Projects Section
1. Use filter buttons to display categories:
   - All
   - Academic
   - Design
   - AI
2. Use the sort dropdown to arrange projects alphabetically.

### GitHub Repositories
1. Click **Load My GitHub Repositories**.
2. Public repositories are fetched from GitHub API.

### Contact Form
1. Enter your name, email, and message.
2. Click **Send Message**.
3. Validation messages will appear if input is incorrect.

---

## Performance Improvements

- Organized CSS and JavaScript files
- Reused styles to reduce duplication
- Optimized layout for responsiveness
- Lightweight vanilla JavaScript without external libraries
- Efficient DOM updates for filtering and sorting

---

## AI Usage Summary

AI tools such as ChatGPT were used for:
- Debugging JavaScript logic
- Improving CSS structure
- Generating documentation ideas
- Reviewing code quality

All generated suggestions were reviewed, edited, tested, and modified manually before submission.

Detailed explanation is available in:

`docs/ai-usage-report.md`

---

## Project Structure

```
202223720-layanalasmari-assignment3/
│── index.html
│── README.md
│── .gitignore
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── assets/
│   └── images/
│
└── docs/
    ├── technical-documentation.md
    └── ai-usage-report.md
```

---

## Author

Layan Alasmari  
Computer Science Student  
KFUPM
