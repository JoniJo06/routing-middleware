import express from 'express';
import verify from './routes/verify.js';

const app = express();
const port = process.env.PORT || 5003;

app.use("/verify", verify)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));