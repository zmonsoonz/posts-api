const express = require('express');
const {getPost, getPosts, savePost, updatePost, deletePost} = require('../controllers/post-controller');
//создаем роутер, чтобы импортировать его в другой файл
const router = express.Router();

//обрабатываем все запросы
router.get('/api/posts', getPosts);
router.get('/api/post/:id', getPost);
router.delete('/api/post/:id', deletePost);
router.post('/api/post', savePost);
router.put('/api/post/:id', updatePost);

module.exports = router;