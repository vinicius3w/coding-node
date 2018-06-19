module.exports = {
  getPosts(req, res) {
    res.status(200).send(req.storage)
    //res.status(200).send(JSON.parse('{ "comments":' + JSON.stringify(storage) + "}"));
  },
  addPost(req, res) {
    let newPost = req.body
    let postId = req.storage.posts.length
    req.storage.posts.push(newPost)
    res.status(201).send({postId: postId})
  },
  updatePost(req, res) {
    let postId = req.params.id;
    try {
      if (postId > (req.storage.posts.length - 1) || postId < 0) {
        throw "Post id param is out of range";
      } 
    } catch  (err) {
      return res.status(404).send({
        error: err
      });
    }
    req.storage.posts[postId] = Object.assign(req.storage.posts[postId], req.body)
    res.status(200).send(req.storage.posts[postId])
    //res.status(200).send(JSON.parse('{ "comments":' + JSON.stringify(storage.posts[postId]) + "}"));
  },
  removePost(req, res) {
    try {
      if (postId > (req.storage.posts.length - 1) || postId < 0) {
        throw "Post id param is out of range";
      } 
    } catch  (err) {
      return res.status(404).send({
        error: err
      });
    }
    req.storage.posts.splice(postId, 1)
    res.status(204).send()
  }
}