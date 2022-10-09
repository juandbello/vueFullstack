import {Router} from 'express';
import Comment from '../models/Comment';
const router = Router();
export default router;

router.get('/character/:id/comments', async(req, res)=>{
    try{
        console.log(req.params)
        const id = req.params.id
        const commentDB = await Comment.find({idCharacter: id})
        return res.json(commentDB)
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})
    }
})
router.post('/character/:id/comments', async(req, res)=>{
    try{
        const idCharacter = req.params.id;
        const {characterName, personName, comment} = req.body;
        const commentData = new Comment({idCharacter, characterName, personName, comment});
        await commentData.save()
        res.status(201).json(commentData)
    }catch(e){
      console.log(e)
      return res.status(500).json({
        msg: e
      })
    }
})