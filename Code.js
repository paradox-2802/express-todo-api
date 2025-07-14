require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

function generateRandomTodos() {
  const sampleTitles = [
    "Go to gym",
    "Study",
    "Read book",
    "Write code",
    "Walk dog",
    "Cook dinner",
    "Meditate",
    "Play guitar",
    "Clean room",
    "Learn React",
  ];

  const sampleDescriptions = [
    "Morning routine",
    "Afternoon study",
    "Evening reading",
    "Night coding",
    "Late walk",
    "Quick session",
    "Long session",
    "Daily habit",
    "Relaxing time",
    "Focus time",
  ];

  const count = Math.floor(Math.random() * 6) + 5;
  let todos = [];

  for (let i = 0; i < count; i++) {
    const title = sampleTitles[Math.floor(Math.random() * sampleTitles.length)];
    const description =
      sampleDescriptions[Math.floor(Math.random() * sampleDescriptions.length)];
    todos.push({ title, description });
  }

  return todos;
}

app.get("/todos", (req, res) => {
  const todos = generateRandomTodos();
  res.json(todos);
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
