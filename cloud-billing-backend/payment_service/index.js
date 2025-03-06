const express = require('express');
const app = express();
app.use(express.json());

let payments = [];

app.post('/process', (req, res) => {
  const payment = req.body;
  payments.push(payment);
  res.json({ message: 'Payment processed', payment });
});

app.get('/payments', (req, res) => {
  res.json(payments);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Payment Service running on port ${PORT}`));