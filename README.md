# CS81 Module 5A – Code Review: hobbyTracker.js

This project is part of **Module 5 Assignment 5A** for Santa Monica College's CS81 JavaScript Programming course.  
It focuses on reviewing, analyzing, and improving a JavaScript program that tracks weekly hobby activities using higher-order functions like `map()`, `filter()`, and `reduce()`.

---

## Repository Structure

```
.
├── hobbyTracker.js    # Main program that calculates hobby stats using array functions
├── REFLECTION.md      # Reflection on what was learned during the review
└── README.md          # Project overview and instructions (this file)
```

---

## Requirements

- Node.js (v14 or higher recommended)
- Git (for cloning and committing changes)

---

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/sergehall/cs81-module5a-review
cd cs81-module5a-review
```

2. **Run the hobby tracker**

```bash
node hobbyTracker.js
```

This will print out:
- Total time spent on all hobbies
- Unique list of hobbies
- Sessions longer than a specified number of minutes
- Count of sessions by mood type

---

## Functions Included

Each function uses modern JavaScript array methods:

- `getTotal(log, field)`  
  Uses `reduce()` to calculate the total value of a numeric field (e.g., minutes).

- `uniqueHobbies(log)`  
  Uses `map()` and `Set` to return a deduplicated array of hobby names.

- `filterByGreaterThan(log, field, threshold)`  
  Uses `filter()` to return entries where a numeric field exceeds a value.

- `countByField(log, field, value)`  
  Uses `filter()` to count entries matching a specific field and value.

---

## What This Assignment Covers

- Practicing with `map()`, `filter()`, and `reduce()`
- Improving code readability and reusability
- Writing inline comments for code understanding
- Reflecting on confusing parts and what was learned

---

## Submission Requirements

- [x] `hobbyTracker.js` — fully commented and improved
- [x] `REFLECTION.md` — thoughts on the learning process
- [x] At least **3 meaningful commits**:
  - `"added comments"`
  - `"suggested improvement"`
  - `"added reflection"`

---

## License

This project is for educational use only as part of Santa Monica College's CS81 coursework.
