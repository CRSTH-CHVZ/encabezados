const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];
  console.log(userAgent);
  res.send(`Estás ingresando desde el navegador: ${userAgent}`);
});

app.listen(3000, () => console.log('Listening on port 3000!'));
