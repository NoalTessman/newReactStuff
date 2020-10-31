const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const post = require('../models/Post');

//Gets all posts
router.get('/', async (req, res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err})
    }
});


router.get('/specific', (req, res)=>{
    res.send("Good post");
});

//Submits a Post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message:err})
    }
})

//Gets some posts
router.get('/:postID', async (req,res)=>{
    try{
        const post = await Post.findById(req.params.postID)
        res.json(post);
    }catch(err){
        res.json({message:err})
    }
})
//Delete a Post
router.delete('/:postID', async (req,res)=>{
    try{
        const removedPost = await Post.deleteMany({_id:req.params.postID})
        res.json(removedPost)
    }catch(err){
        res.send(err)
    }   
})

//Update
router.patch('/:postId',async (req,res)=>{
    try{
    const updatedPost = await Post.updateOne(
        {_id:req.params.postID}, 
        {$set : {title: req.body.title}});
        res.json(updatedPost)
    }catch(err){
        res.send(err)
    }   
})

module.exports= router;