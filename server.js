const express = require('express');
const app = express();
const port = 3000;
const PostController = require('./controllers/PostController');

app.get('/posts', (req, res) => {
  const controller = new PostController();
  const postView = controller.getPostsList();
  res.json(postView);
})
app.get('/posts/:id', (req, res) => {
  const controller = new PostController();
  const postView = controller.getPost(req.params.id);
  res.json(postView);
})
app.get('/users/:id/posts', (req, res) => {
  const controller = new PostController();
  const postView = controller.getUserPostsList(req.params.id);
  res.json(postView);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))