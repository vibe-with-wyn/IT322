/*
    Student profile data
    Keep all editable personal details in one place for easy updates.
  */
const studentProfile = {
  fullName: "Lapura, Wendel T.",
  course: "BS Information Technology",
  yearSection: "3A",
};

/*
    Personalized rotating messages
    These are connected to your identity and course.
  */
const personalizedMessages = [
  "Welcome to Scripting! I am Wendel, a BSIT student from section 3A.",
  "Hello, Instructor! This output represents my progress in JavaScript scripting.",
  "As an IT student, I am building strong logic and coding skills one script at a time.",
];

// Cache DOM elements once for better performance and readability.
const fullNameElement = document.getElementById("fullName");
const courseElement = document.getElementById("course");
const yearSectionElement = document.getElementById("yearSection");
const customMessageElement = document.getElementById("customMessage");
const dateTimeElement = document.getElementById("dateTime");
const greetingLineElement = document.getElementById("greetingLine");
const copyButtonElement = document.getElementById("copyBtn");
const toastElement = document.getElementById("toast");

// Show a temporary feedback message (toast) at the bottom-right.
function showToast(messageText) {
  toastElement.textContent = messageText;
  toastElement.classList.add("show");
  setTimeout(() => toastElement.classList.remove("show"), 1500);
}

// Return a greeting based on the current hour.
function getGreetingByHour(hour) {
  if (hour < 12) return "Good morning, Instructor.";
  if (hour < 18) return "Good afternoon, Instructor.";
  return "Good evening, Instructor.";
}

// Update live date/time and dynamic greeting.
function updateLiveDateTime() {
  const now = new Date();
  const formatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  dateTimeElement.textContent =
    "Current Date and Time: " + now.toLocaleString("en-PH", formatOptions);

  greetingLineElement.textContent =
    getGreetingByHour(now.getHours()) + " This page updates in real-time.";
}

// Render your personal information on the page.
function renderStudentProfile() {
  fullNameElement.textContent = studentProfile.fullName;
  courseElement.textContent = studentProfile.course;
  yearSectionElement.textContent = studentProfile.yearSection;
}

/*
    Rotate personalized messages every 5 seconds.
    A short fade effect makes transitions smoother.
  */
let currentMessageIndex = 0;
function rotatePersonalizedMessage() {
  customMessageElement.style.opacity = "0";

  setTimeout(() => {
    customMessageElement.textContent =
      personalizedMessages[currentMessageIndex];
    customMessageElement.style.opacity = "1";
    currentMessageIndex =
      (currentMessageIndex + 1) % personalizedMessages.length;
  }, 150);
}

// Copy a clean summary of your activity details to clipboard.
async function copyActivitySummary() {
  const summaryText =
    "Student Information\n" +
    "Full Name: " +
    studentProfile.fullName +
    "\n" +
    "Course: " +
    studentProfile.course +
    "\n" +
    "Year and Section: " +
    studentProfile.yearSection +
    "\n" +
    "Message: " +
    customMessageElement.textContent;

  try {
    await navigator.clipboard.writeText(summaryText);
    showToast("Summary copied.");
  } catch (error) {
    showToast("Copy failed. Please copy manually.");
  }
}

// Initial page render
renderStudentProfile();
rotatePersonalizedMessage();
updateLiveDateTime();

// Live updates
setInterval(updateLiveDateTime, 1000);
setInterval(rotatePersonalizedMessage, 5000);

// Event listeners
copyButtonElement.addEventListener("click", copyActivitySummary);

// Console output required by your activity
console.log("Full Name: " + studentProfile.fullName);
console.log("Course: " + studentProfile.course);
console.log("Year & Section: " + studentProfile.yearSection);
console.log("Current Message: " + customMessageElement.textContent);
