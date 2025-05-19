const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Import and use the items route
const itemRoutes = require("./routes/items");
app.use("/items", itemRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
