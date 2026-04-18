# Technical Documentation

## Project Overview

This project is a personal portfolio website created for Assignment 3 – Advanced Functionality.

The website was developed using HTML, CSS, and JavaScript to demonstrate practical front-end development skills. It builds on previous assignments by adding stronger interactivity, external API integration, state management, dynamic logic, and a more polished user experience.

The main objective of this project is to present my background, projects, and skills through a responsive website while applying modern web development practices.

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

## System Design Approach

The project uses a simple front-end structure with separate files:

- index.html for page structure
- styles.css for styling
- script.js for interactivity

This improves readability, maintenance, and debugging.

---

## HTML Implementation

Semantic HTML elements were used to organize content clearly.

### Header Section

Contains:

- Full name
- Short introduction
- Greeting message
- Theme toggle button
- Visitor name input
- Live timer

### Navigation Bar

Sticky navigation includes:

- About
- Projects
- GitHub Repositories
- Online Courses
- Contact

### Main Sections

#### About

Introduces academic background and interests.

#### Projects

Displays project cards with:

- Image
- Title
- Description
- Category attribute
- Sorting support

#### GitHub Repositories

Loads repositories dynamically from GitHub API.

#### Online Courses

Displays completed courses using reusable cards.

#### Contact

Contains validated form and LinkedIn link.

#### Footer

Displays copyright text.

---

## CSS Implementation

The stylesheet was organized into reusable sections.

### Styling Strategy

CSS variables were used to centralize colors and improve consistency.

Example:

:root

Variables control:

- Background colors
- Text colors
- Card colors
- Borders
- Buttons

This reduces repetition and makes theme changes easier.

---

## Dark Mode System

Dark mode works by adding this class:

body.dark-mode

When active, colors change automatically for:

- Background
- Text
- Cards
- Forms
- Inputs
- Buttons

This approach is scalable and clean.

---

## Responsive Design

Media queries improve mobile layout.

Examples:

- Navigation wraps
- Buttons resize
- Controls stack vertically
- Inputs adjust width

This improves compatibility on smaller screens.

---

## JavaScript Implementation

All dynamic features are handled in script.js.

### 1. Smooth Scrolling

Navbar links use:

scrollIntoView()

This creates smooth movement between sections.

---

### 2. Greeting Message

The system checks:

new Date().getHours()

Then displays:

- Good morning
- Good afternoon
- Good evening

This adds personalization.

---

### 3. Theme Toggle

Clicking the theme button:

- Adds or removes dark-mode class
- Saves preference in localStorage

Saved key:

theme

This keeps the selected mode after refresh.

---

### 4. Dynamic Button Label

Theme button text changes automatically:

- Light theme = Dark Mode
- Dark theme = Light Mode

This clearly shows the next action.

---

### 5. Visitor Name Memory

Users can save their name.

Stored in:

localStorage

Key:

visitorName

When returning, a welcome message appears.

---

### 6. Live Timer

A timer updates every second using:

setInterval()

This shows time spent on the website.

---

### 7. Project Filtering

Projects use custom attributes such as:

data-category="academic"

When a filter is selected:

- Matching cards stay visible
- Others are hidden

Categories:

- All
- Academic
- Design
- AI

---

### 8. Project Sorting

Projects can be sorted:

- A-Z
- Z-A

Using:

localeCompare()

Logic sequence:

1. Filter cards
2. Sort visible cards
3. Update display order

This demonstrates advanced multi-step logic.

---

### 9. GitHub API Integration

Repositories are loaded from:

https://api.github.com/users/Layan19-2004/repos

When activated:

- Loading message appears
- Data fetched using fetch()
- Up to six repositories shown
- Name, description, and link displayed

If request fails:

- Friendly error message appears

This adds real live data to the portfolio.

---

### 10. Contact Form Validation

The form checks:

- Empty fields
- Minimum name length
- Letters only in name
- Valid email format
- Minimum message length

If invalid:

- Error message shown

If valid:

- Success message shown
- Form resets

---

## Performance Improvements

Several improvements were applied:

- Separate CSS and JS files
- Reusable classes
- Minimal dependencies
- Efficient DOM updates
- Limited API results
- Responsive images
- Organized code

---

## Challenges and Solutions

### Challenge 1: Dark Mode Contrast

Some buttons lacked visibility.

Solution:

Separate styles for main and secondary buttons.

### Challenge 2: Sorting with Filtering

Projects needed correct order after filtering.

Solution:

Filter first, then sort visible cards.

### Challenge 3: API Failure

External requests may fail.

Solution:

Loading and error messages were added.

### Challenge 4: Saving Preferences

Theme and name needed persistence.

Solution:

Used localStorage.

---

## User Experience Decisions

The design focuses on clarity and ease of use.

Features include:

- Sticky navigation
- Clear buttons
- Responsive layout
- Helpful validation messages
- Saved preferences
- Organized sections

---

## Future Improvements

Possible upgrades:

- Search bar for projects
- Backend contact form
- More APIs
- Accessibility improvements
- Advanced animations
- Project detail pages

---

## Conclusion

This project combines structured HTML, reusable CSS, and interactive JavaScript into a professional portfolio website.

It demonstrates responsive design, API integration, state management, DOM manipulation, validation, and performance optimization while remaining clean and user-friendly.