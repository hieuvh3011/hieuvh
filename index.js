const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const dotenv = require('dotenv');
const articleRouter = require('./src/router/article_router');
const userRoute = require('./src/router/user_router');
const { ARTICLE_ROUTE, USER_ROUTE } = require('./src/router/route_name');

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const DEFAULT_PORT = 5000;
const PORT = process.env.PORT || DEFAULT_PORT;

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT}`);
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
// app.use(express.static(__dirname + '/public'));

app.use(ARTICLE_ROUTE, articleRouter);
app.use(USER_ROUTE, userRoute);
