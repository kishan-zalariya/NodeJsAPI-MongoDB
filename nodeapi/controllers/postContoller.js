const PostModel = require('../models/postModel');

exports.getPosts = (req, res) => {
    //res.send("Home world from nodeJs");
    PostModel.find()
        .select("_id title body")
        .then(posts => {
            res.json({ posts })
        })
        .catch(err => console.log(err));
};

exports.createPost = (req, res) => {
    const post = new PostModel(req.body);
    // post.save((err, result)=>{
    //     if(err) {
    //         return res.status(400).json({
    //             error: err
    //         });
    //     }
    //     res.status(200).json({
    //         post: result
    //     })
    // });
    post.save()
        .then(result => {
            res.json({
                post: result
            })
        });
};