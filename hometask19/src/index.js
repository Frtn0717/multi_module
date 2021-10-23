import './styles/main.css';
import { drawHtmlLayout } from './modules/draw-layout.js';
import { categoriesDrop } from './modules/variables.js';

window.onload = async () => {
  const fn = await import('./modules/fetch.js'); // dynamical import

  fn.fetchData('https://api.publicapis.org/categories').then((result) =>
    drawHtmlLayout(result)
  );
};

categoriesDrop.onchange = async () => {
  const category = categoriesDrop.value;
  const fn = await import('./modules/fetch.js'); // dynamical import

  fn.fetchData(
    `https://api.publicapis.org/entries?category=${category}&title`
  ).then((result) => drawHtmlLayout(result));
};
