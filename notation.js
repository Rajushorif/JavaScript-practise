// Example person object added to the project
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  family: {
	spouse: "Bob",
	children: ["Charlie", "Daisy"]
  }
};

// Expose for browser (window) and Node (module.exports)
// Example person object added to the project
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  family: {
    spouse: "Bob",
    children: ["Charlie", "Daisy"]
  }
};

// Expose for browser (window) and Node (module.exports)
// Expose for browser (window) and Node (module.exports)
if (typeof window !== 'undefined') {
  window.person = person;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = person;
}
