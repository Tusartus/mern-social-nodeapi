const express = require("express");
const {
    getPosts,
    createPost,
    postsByUser,
    postById,
    isPoster,
    updatePost,
    deletePost,
     photo,
    singlePost
    //like,
    //unlike,
    //comment,
    //uncomment,
   // updateComment
} = require('../controllers/post');

const { requireSignin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

const { createPostValidator } = require('../validator');

const router = express.Router();



   // router.get('/', requireSignin, getPosts);
router.get('/posts', getPosts);

// post routes
router.post('/post/new/:userId', requireSignin, createPost ,createPostValidator);

router.get('/posts/by/:userId', requireSignin, postsByUser);
router.get('/post/:postId', singlePost);

router.put('/post/:postId', requireSignin, isPoster, updatePost);
router.delete('/post/:postId', requireSignin, isPoster, deletePost);
// photo
router.get('/post/photo/:postId', photo);





// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;