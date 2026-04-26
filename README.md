# Hands-On Activity

## Course Task
Create a simple script using JavaScript (client-side), PHP (server-side), or Bash (OS scripting) that performs the following:

1. Display personal information
2. Display a custom message
3. Use proper syntax based on the chosen language

For this submission, the chosen language is JavaScript (client-side).

## Student Information
- Full Name: Lapura, Wendel T.
- Course: BS Information Technology
- Year and Section: 3A

## Activity Objectives
- Practice JavaScript fundamentals
- Display dynamic content in a webpage
- Improve code readability using comments and clear naming
- Add interactive and presentable UI behavior

## JavaScript Scripting Features
The script in [script.js](script.js) includes:

1. Student profile object
- Stores personal details in one place for easier editing

2. Personalized custom messages
- Rotates multiple messages connected to the student and course every 5 seconds

3. Live date and time
- Updates every second using JavaScript Date and toLocaleString

4. Time-based greeting
- Shows Good morning/afternoon/evening, Instructor based on current hour

5. Copy summary feature
- Copies activity details to clipboard using navigator.clipboard.writeText

6. Toast notification
- Displays short success/failure feedback for copy action

7. Clean code readability
- Uses descriptive variable/function names
- Includes focused comments for major logic blocks
- Separates data, rendering, utility functions, and event handling

## Script Flow Summary
1. Define student data and personalized messages
2. Cache DOM elements
3. Render student information to the page
4. Show first custom message and current date/time
5. Start interval updates for:
- Date/time (every 1 second)
- Message rotation (every 5 seconds)
6. Enable Copy Summary button action
7. Log required information to browser console

## Files Used
- [index.html](index.html): Main page structure and design
- [styles.css](styles.css): Page styling, layout, colors, responsiveness, and animations
- [script.js](script.js): JavaScript logic and interactivity

## Sample Console Output
- Full Name: Lapura, Wendel T.
- Course: BS Information Technology
- Year & Section: 3A
- Current Message: Welcome to Scripting! I am Wendel, a BSIT student from section 3A.

## How to Run
1. Open the deployed project through GitHub Pages:
    - https://your-username.github.io/your-repository-name/
2. Observe:
- Personal information display
- Rotating personalized message
- Live date and time
- Greeting updates
- Copy Summary button functionality

## Grading Alignment
- Correct Output (Info + Message): Completed
- Additional Feature: Live clock, rotating messages, copy summary, toast feedback
- Code Syntax & Functionality: Proper JavaScript structure and logic
- Code Readability & Comments: Clear naming and explanatory comments
- Creativity / Presentation: Elegant UI with modern styling and animations

## Author
Lapura, Wendel T.  
BS Information Technology - 3A