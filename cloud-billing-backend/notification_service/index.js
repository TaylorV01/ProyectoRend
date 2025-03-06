const express = require('express');
const app = express();
app.use(express.json());

app.post('/notify', (req, res) => {
  const notification = req.body;
  console.log('Notification:', notification);
  res.json({ message: 'Notification sent', notification });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));