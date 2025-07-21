import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Beispiel-Endpunkt für Chartanalyse
app.post('/analyze', (req, res) => {
  const { prices } = req.body;

  // Hier kann Chartanalyse stattfinden (z. B. mit TA-Lib, Tulip, etc.)
  const result = {
    trend: 'uptrend',
    confidence: 0.87,
    comment: 'Bullisches Muster erkannt.'
  };

  res.json(result);
});

app.get('/', (_, res) => {
  res.send('VaultAI Bot läuft ✅');
});

app.listen(port, () => {
  console.log(`🚀 VaultAI Bot läuft auf http://localhost:${port}`);
});
