const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const articleRouter = require('./src/router/article_router');
const { ARTICLE_ROUTE } = require('./src/router/route_name');

const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
  console.log('process = ', process.env);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(ARTICLE_ROUTE, articleRouter);
