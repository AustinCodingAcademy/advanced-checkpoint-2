import express from 'express';
import {list,show,remove,update,create} from './albumControllers';

console.log(list);

const router = express.Router();

router.get("/albums", list);
router.get("/albums/:id", show);
router.post("/albums", create);
router.put("/albums/:id", update);
router.delete("/albums/:id", remove);

export default router;