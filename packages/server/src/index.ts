import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json()); // for parsing application/json
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.query);
  res.json({ ...req.query, extra: 'ahoyhoy' });
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.json({ ...req.body, extra: 'yello' });
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
