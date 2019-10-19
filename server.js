/*
Init
*/
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PostController = require('./controllers/PostController');

/*
Get All Posts
$ curl http://localhost:3000/posts
*/
app.get('/posts', async (req, res) => {
  const controller = new PostController();
  const postView = await controller.getPostsList();
  res.json(postView);
})

/*
Get Post By Id
$ curl http://localhost:3000/posts/3
*/
app.get('/posts/:id', async (req, res) => {
  try {
    const controller = new PostController();
    const postView = await controller.getPost(req.params.id);
    res.json(postView);
  } catch(error) {
    res.status(404).json(error);
  }
})

/*
Create Post
$ curl -X "POST" -H "Content-Type: application/json" -d '{"title": "Another Blog Post", "uid": "1", "timePublished": 0, "contents": "Cras mattis consectetur purus sit amet fermentum."}' http://localhost:3000/posts
*/
app.post('/posts', async (req, res) => {
  const controller = new PostController();
  const Post = await controller.createPost(req.body);
  const status = Post.valid ? 200 : 400;
  res.status(status).send();
})

/*
Update Post
$ curl -X "PUT" -H "Content-Type: application/json" -d '{"title": "Another Blog Post", "uid": "1", "timePublished": 0, "contents": "Cras mattis consectetur purus sit amet fermentum."}' http://localhost:3000/posts/3
*/
app.put('/posts/:id', async (req, res) => {
  const controller = new PostController();
  const Post = await controller.updatePost({...req.body, id: req.params.id});
  const status = Post.valid ? 200 : 400;
  res.status(status).send();
})

/*
Patch Post; only update provided properties
$ curl -X "PATCH" -H "Content-Type: application/json" -d '{"title": "Just update the title"}' http://localhost:3000/posts/3
*/
app.patch('/posts/:id', async (req, res) => {
  const controller = new PostController();
  const Post = await controller.patchPost({...req.body, id: req.params.id});
  const status = Post.valid ? 200 : 400;
  res.status(status).send();
})

/*
Delete Post
$ curl -X "DELETE" http://localhost:3000/posts/3
*/
app.delete('/posts/:id', async (req, res) => {
  const controller = new PostController();
  const success = await controller.deletePost(req.params.id);
  const status = success ? 200 : 400;
  res.status(status).end();
})

/*
Get All Posts By User Id
$ curl http://localhost:3000/users/1/posts
*/
app.get('/users/:id/posts', async (req, res) => {
  const controller = new PostController();
  const postView = await controller.getUserPostsList(req.params.id);
  res.json(postView);
})

/*
Off we go
*/
app.listen(port, () => console.log(`Example app listening on port ${port}!`))