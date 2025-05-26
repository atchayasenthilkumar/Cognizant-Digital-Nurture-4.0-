console.log("Welcome to the Community Portal");

window.onload = function () {
  alert("Page is fully loaded!");
};
const eventName = "Music Fest";
const eventDate = "2025-06-15";
let seats = 50;

console.log(`${eventName} is on ${eventDate} with ${seats} seats.`);

// On registration
seats--;
const events = [
  { name: "Art Expo", date: "2025-07-01", seats: 10 },
  { name: "Old Event", date: "2024-12-01", seats: 0 }
];

const today = new Date();

events.forEach(event => {
  if (new Date(event.date) > today && event.seats > 0) {
    console.log(`Upcoming: ${event.name}`);
  }
});

function register(event) {
  try {
    if (event.seats > 0) {
      event.seats--;
    } else {
      throw new Error("No seats left");
    }
  } catch (e) {
    console.error(e.message);
  }
}
function addEvent(name, date, seats) {
  return { name, date, seats };
}

function registerUser(event) {
  if (event.seats > 0) event.seats--;
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

// Closure example
function categoryTracker(category) {
  let count = 0;
  return function () {
    count++;
    console.log(`${count} registered in ${category}`);
  };
}
const trackMusic = categoryTracker("Music");
trackMusic();
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const myEvent = new Event("Yoga Workshop", "2025-08-01", 20);
console.log(Object.entries(myEvent));
const allEvents = [];

allEvents.push(new Event("Baking Class", "2025-06-20", 30));

const musicEvents = allEvents.filter(e => e.name.includes("Music"));

const displayCards = allEvents.map(e => `${e.name} on ${e.date}`);
console.log(displayCards);
const container = document.querySelector("#events");

allEvents.forEach(event => {
  const card = document.createElement("div");
  card.innerText = `${event.name} - ${event.date}`;
  container.appendChild(card);
});
document.querySelector("#registerBtn").onclick = () => {
  console.log("User registered");
};

document.querySelector("#categoryFilter").onchange = function (e) {
  console.log(`Filtering by ${e.target.value}`);
};

document.querySelector("#searchInput").onkeydown = function (e) {
  if (e.key === "Enter") console.log(`Searching: ${e.target.value}`);
};
// Using then/catch
fetch("events.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Using async/await
async function loadEvents() {
  const spinner = document.querySelector("#spinner");
  spinner.style.display = "block";
  try {
    const res = await fetch("events.json");
    const events = await res.json();
    console.log(events);
  } finally {
    spinner.style.display = "none";
  }
}
function createEvent(name = "Untitled", date = "2025-01-01", seats = 0) {
  return { name, date, seats };
}

const event = { name: "Coding Bootcamp", date: "2025-09-01", seats: 25 };
const { name, date } = event;

const eventList = [...allEvents];
document.querySelector("#regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.elements["name"].value;
  const email = this.elements["email"].value;
  if (!name || !email) {
    document.querySelector("#error").innerText = "All fields required";
  }
});
function submitRegistration(data) {
  fetch("https://mockapi.io/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => alert("Registration successful"))
    .catch(() => alert("Failed"))
    .finally(() => setTimeout(() => console.log("Simulated delay"), 2000));
}
console.log("Submitting:", formData);
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
$('#registerBtn').click(() => alert("Registered!"));
$('.event-card').fadeIn();

console.log("React/Vue makes UI state handling easier with components and reactivity.");
