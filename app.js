const express = require('express');
const puppeteer = require('puppeteer');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

async function verificarGreveCorreios() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  // Navega até a busca do G1
  await page.goto('https://g1.globo.com/busca/?q=correios%20greve', {
    waitUntil: 'networkidle0',
  });

  // Executa no contexto da página para extrair as notícias
  const noticias = await page.evaluate(() => {
    const resultados = [];
    const items = document.querySelectorAll('.results__list .results__item');

    items.forEach((el) => {
      const tituloEl = el.querySelector('a.results__link');
      const resumoEl = el.querySelector('.results__summary');
      if (tituloEl && resumoEl) {
        resultados.push({
          titulo: tituloEl.innerText.trim(),
          link: tituloEl.href,
          resumo: resumoEl.innerText.trim(),
        });
      }
    });
    return resultados;
  });

  await browser.close();

  // Verifica se tem "greve" no título ou resumo
  const emGreve = noticias.some(
    (n) =>
      n.titulo.toLowerCase().includes('greve') ||
      n.resumo.toLowerCase().includes('greve')
  );

  // Pega a última notícia (a primeira da lista)
  const ultimaNoticia = noticias[0] || null;
  console.log(emGreve, ultimaNoticia)
  return { emGreve, ultimaNoticia };
  
}

app.get('/', async (req, res) => {
  try {
    const { emGreve, ultimaNoticia } = await verificarGreveCorreios();
    res.render('index', { greve: emGreve, noticia: ultimaNoticia });
  } catch (error) {
    console.error('Erro no servidor:', error);
    res.status(500).send('Erro ao buscar informações.');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
