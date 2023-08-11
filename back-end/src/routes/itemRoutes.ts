import { Router } from 'express';

const router = Router();

router.get("/", getAllItems);
router.get("/", getPost);
router.post("/", addItem);
router.put("/", editItem);
router.delete("/", removeItem);

export default router; 
