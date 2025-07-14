const express = require('express');
const app = express();
const port = 3000;

// Aqui você pode colocar true/false manualmente ou automatizar depois
const correiosEmGreve = false;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { greve: correiosEmGreve });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
