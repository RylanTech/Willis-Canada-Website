import { Router } from 'express';
import { addItem, editItem, getAllItems, getItem, removeItem } from '../controllers/itemController';

const router = Router();

router.get("/getall", getAllItems);
router.get("/:id", getItem);
router.post("/", addItem);
router.put("/:id", editItem);
router.delete("/:id", removeItem);

export default router; 