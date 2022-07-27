import express from 'express';
import { postController } from './controller/postController';
import { userController } from './controller/userController';

const router = express.Router()

router.post('/posts', postController.posting);
router.put('/update/post', postController.update);
router.get('/show/posts/:id', postController.show);

router.post('/register', userController.register);
router.get('/show', userController.show);
router.delete('/delete', userController.delete);
router.put('/update', userController.update);

export { router };