require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

function generateRandomTodos() {
  const todosPool = [
    { title: "Study", description: "Study DSA from 7am - 9am" },
    { title: "Go to gym", description: "Workout from 9am - 10am" },
    { title: "Read book", description: "Read 20 pages from 10am - 11am" },
    { title: "Write code", description: "Work on project from 11am - 1pm" },
    { title: "Walk dog", description: "Walk in the park at 5pm" },
    { title: "Cook dinner", description: "Prepare meal from 6pm - 7pm" },
    { title: "Meditate", description: "Meditate for 20 minutes at 7pm" },
    { title: "Play guitar", description: "Practice chords from 7:30pm - 8pm" },
    {
      title: "Clean room",
      description: "Organize and vacuum from 8pm - 8:30pm",
    },
    { title: "Learn React", description: "Follow tutorial from 8:30pm - 10pm" },
    { title: "Call family", description: "Catch up from 10am - 10:30am" },
    {
      title: "Do laundry",
      description: "Wash and fold clothes from 11am - 12pm",
    },
    { title: "Grocery shopping", description: "Buy groceries from 3pm - 4pm" },
    {
      title: "Go jogging",
      description: "Jog around neighborhood from 6am - 6:30am",
    },
    { title: "Watch documentary", description: "Watch for an hour at night" },
    {
      title: "Water plants",
      description: "Water indoor plants in the morning",
    },
    { title: "Plan tomorrow", description: "Make to-do list before bed" },
    { title: "Stretch", description: "Morning stretching routine" },
    {
      title: "Practice typing",
      description: "Improve speed from 4pm - 4:30pm",
    },
    {
      title: "Review notes",
      description: "Go over lecture notes from 2pm - 3pm",
    },
  ];

  const count = Math.floor(Math.random() * 6) + 5; // 5–10 todos
  const shuffled = todosPool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

app.get("/", (req, res) => {
  res.json(generateRandomTodos());
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
