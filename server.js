//импортируем библиотеки и модули
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override');
const postRoutes = require("./routes/post-routes");
const contactRoutes = require("./routes/contact-routes");
const server = express(); //создаем элемент express

server.set('view engine', 'ejs'); //задаем миддлвар ejs для отрисовки страницы

const port = 3000;

server.listen(port, (error) => {
    error ? console.log(error) : console.log(`listening port ${port}`); //устанавливаем порт и отселживаем ошибки
})

mongoose
    .connect(process.env.MONGO_URL) //устанавливаем соединение с базой данных
    .then((res) => console.log('Connected'))
    .catch((err) => console.log(err));

server.use(express.urlencoded({extended: false})); //для отправки формы в виде POST запроса

server.use(methodOverride('_method')); //расширяет http запросы (чтобы использовать PUT и DELETE)

server.use(postRoutes); 
server.use(contactRoutes);


