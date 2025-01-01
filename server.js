// server.js (Node.js Express Example)
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)

// Define your API routes
app.get('/api/audit', (req, res) => {
    res.json({ message: 'Audit Successful' });
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
