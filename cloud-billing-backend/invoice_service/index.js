const express = require('express');
const app = express();
app.use(express.json());

let invoices = [];

app.post('/create', (req, res) => {
  const invoice = req.body;
  invoices.push(invoice);
  res.json({ message: 'Invoice created', invoice });
});

app.get('/invoices', (req, res) => {
  res.json(invoices);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Invoice Service running on port ${PORT}`));