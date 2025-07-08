// Array of hobby sessions, each with day, hobby name, minutes spent, and mood
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This function calculates the total amount of time spent on all hobbies
// Suggestion: rename to getTotalTimeSpent for clarity and reusability
// Even better: make it reusable for summing any numeric property
function getTotal(log, field) {
  return log.reduce((sum, session) => sum + session[field], 0);
}

// Replacing old function call with the new one
console.log("Total time spent:", getTotal(hobbyLog, "minutes"), "minutes");

// This function returns an array of unique hobby names
function uniqueHobbies(log) {
  // Uses map to extract all hobby names from each entry
  const names = log.map(entry => entry.hobby); // ["drawing", "reading", "gaming", ...]
  // Uses Set to remove duplicates, then spreads it back into an array
  return [...new Set(names)]; // ["drawing", "reading", "gaming"]
  // map() is a higher-order function that transforms each object to a value
}

// This function filters sessions that are longer than a given number of minutes
function longSessions(log, minMinutes) {
  // Uses filter to keep only entries where minutes > minMinutes
  return log.filter(entry => entry.minutes > minMinutes);
  // filter() is a higher-order function that returns a subset of the array
}

// This function counts how many sessions had a specific mood
function countMood(log, moodType) {
  // Filters the log by matching mood, then returns the length of the filtered array
  return log.filter(entry => entry.mood === moodType).length;
  // Returns a number (count of matching moods)
}

// Console logs for testing and demo purposes:

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
// Expected output: Total time spent: 155 minutes

console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
// Expected output: Unique hobbies: [ 'drawing', 'reading', 'gaming' ]

console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
// Expected output: Sessions longer than 30 min: [ { ... }, { ... } ]

console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));
// Expected output: Number of relaxed sessions: 1
