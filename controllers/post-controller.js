const Post = require("../models/post");

const handleError = (res, error) => { //функция для ошибок
    res.status(500).send(error.message)
};

const getPosts = (req, res) => {
    Post
        .find() //находим массив постов в базе даных
        .sort({createdAt: -1}) //сортируем по дате создания
        .then(posts => res.status(200).json(posts))
        .catch(err => handleError(res, err))
}

const getPost = (req, res) => {
    Post
        .findById(req.params.id) //находим отдельный пост с помощью id
        .then(post => res.status(200).json(post))
        .catch(err => handleError(res, err))
}

const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id) //находим и удаляем
        .then(() => res.status(200).json(req.params.id))
        .catch(err => handleError(res, err))
}

const savePost = (req, res) => {
    const {title, author, text} = req.body; //берем данные из тела запроса
    const post = new Post({title, author, text}); //создаем новый пост с помощью модели
    post
        .save() //сохраняем пост в базу данных
        .then(post => res.status(200).json(post))
        .catch(err => handleError(res, err))
}

const updatePost = (req, res) => {
    const {title, author, text} = req.body; //берем измененные параметры из тела запроса
    const {id} = req.params; //берем id из параметров запроса
    Post
        .findByIdAndUpdate(id, {title, author, text}, {new: true}) //находим и обновляем пост
        .then(post => res.status(200).json(post))
        .catch(err => handleError(res, err))
}

module.exports = {
    getPost,
    getPosts,
    savePost,
    updatePost,
    deletePost
}