const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const PostController = require('./controllers/PostController');

console.info(require('path').resolve(__filename, '/../'));

app.use(bodyParser.json())

app.get('/posts', async (req, res) => {
  const controller = new PostController();
  const postView = await controller.getPostsList();
  res.json(postView);
})

app.post('/posts', async (req, res) => {
  const controller = new PostController();
  const post = await controller.createPost(req.body);
  const status = post.valid ? 200 : 400;
  res.status(status).json(post.toJSON());
})

app.put('/posts/:id', async (req, res) => {
  const controller = new PostController();
  const post = await controller.updatePost({...req.body, id: req.params.id});
  const status = post.valid ? 200 : 400;
  res.status(status).json(post.toJSON());
})

app.delete('/posts/:id', async (req, res) => {
  const controller = new PostController();
  const success = await controller.deletePost(req.params.id);
  const status = success ? 200 : 400;
  res.status(status).end();
})

app.get('/users/:id/posts', async (req, res) => {
  const controller = new PostController();
  const postView = await controller.getUserPostsList(req.params.id);
  res.json(postView);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))