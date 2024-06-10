const Contacts = require("../models/contacts");

const getContacts = (req, res) => {
    Contacts
        .find() //находим массив contacts в базе данных
        .then(contacts => res.status(200).json(contacts)) //отрисовываем страницу, передаем в нее массив контактов
        .catch(error => {
            res.status(500).send(error.message)
        })
}

module.exports = getContacts;