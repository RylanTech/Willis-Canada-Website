import { Router } from 'express';
import { addStoreItem, editStoreItem, getAllStoreItems, getStoreItem, removeStoreItem } from '../controllers/storeItemController';
const router = Router();

router.get("/getall", getAllStoreItems);
router.get("/:id", getStoreItem);
router.post("/", addStoreItem);
router.put("/:id", editStoreItem);
router.delete("/:id", removeStoreItem);

export default router;