module.exports = {
  getComments(req, res) {
    let postId = req.params.id;
    try {
      if (postId > (req.storage.posts.length - 1) || postId < 0) {
        throw "Post id param is out of range";
      } 
    } catch  (err) {
      return res.status(404).send({error: err});
    }
    if ("comments" in req.storage.posts[postId]) {
      //res.status(200).send(JSON.parse('{ "comments":' + JSON.stringify(storage.posts[postId].comments) + "}"));
      res.status(200).send(req.storage.posts[postId].comments)
  } else {
      res.status(404).send({
          error: "No comments exist for post id ${postId}."
      });
  }
  }, 
  addComment(req, res) {
    let postId = req.params.id;
    let newComment = req.body
    let comments = req.storage.posts[postId].comments
    try {
      if (postId > (req.storage.posts.length - 1) || postId < 0) {
        throw "Post id param is out of range";
      } 
    } catch  (err) {
      return res.status(404).send({
        error: err
      });
    }
    let commentId = comments.length
    // if ("comments" in storage.posts[postId]) {
    comments.push(newComment);
    // }
    // else {
    //   storage.posts[postId].comments = [req.body];
    // }
    //res.status(200).send(JSON.parse('{ "comments":' + JSON.stringify(storage.posts[postId].comments[commentId]) + "}"));
    res.status(200).send({ commentId: commentId})
  },
  updateComment(req, res) {
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
    let commentId = req.params.cid;
    try {
      if (commentId > (req.storage.posts.comments.length - 1) || commentId < 0) {
        throw "Comment id param is out of range";
      } 
    } catch  (err) {
      return res.status(404).send({
        error: err
      });
    }
    req.storage.posts[postId].comments[commentId] = Object.assign(req.storage.posts[postId].comments[commentId], req.body)
    //res.status(200).send(storage.posts[postId])
    res.status(200).send(req.storage.posts[postId].comments[commentId]);
  },
  removeComment(req, res) {
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
    let commentId = req.params.cid;
    try {
      if (commentId > (req.storage.posts.comments.length - 1) || commentId < 0) {
        throw "Comment id param is out of range";
      } 
    } catch  (err) {
      return res.status(404).send({
        error: err
      });
    }
    req.storage.posts[postId].comments.splice(commentId, 1)
    res.status(204).send()
  }  
}