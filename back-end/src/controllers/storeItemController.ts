import { RequestHandler } from "express";
import { user } from "../models/user";
import { verifyUser } from "../services/authService";
import { storeItem } from "../models/storeItem";

export const getAllStoreItems: RequestHandler = async (req, res, next) => {
    try {
        let pics = await storeItem.findAll();

        if (pics) {
            res.status(200).json(pics);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const getStoreItem: RequestHandler = async (req, res, next) => {
    try {
        let photo = await storeItem.findByPk(req.params.id)

        if (photo) {
            res.status(200).json(photo);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const addStoreItem: RequestHandler = async (req, res, next) => {
    try {
        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newItem: storeItem = req.body

        if (!newItem) {
            return res.status(400).send();
        }

        if (newItem.title && newItem.link && newItem.price) {
            let created = await storeItem.create(newItem)
            if (created) {
                res.status(200).send(created)
            } else {
                res.status(500).send()
            }
        } else {
            res.status(400).send()
        }
    } catch {
        res.status(500).send()
    }
};

export const editStoreItem: RequestHandler = async (req, res, next) => {
    try {
        let id = req.params.id

        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newItem: storeItem = req.body

        if (!newItem) {
            return res.status(400).send();
        }

        if (newItem.title && newItem.link && newItem.price) {
            let updated = await storeItem.update(newItem, { where: { itemId: id } })
            if (updated) {
                res.status(200).send(updated)
            } else {
                res.status(500).send()
            }
        } else {
            res.status(400).send()
        }
    } catch {
        res.status(500).send()
    }
};

export const removeStoreItem: RequestHandler = async (req, res, next) => {
    try {
        let user: user | null = await verifyUser(req);
        if (!user) {
            return res.status(403).send();
        }
        
        let itm = await storeItem.findByPk(req.params.id)
        if (!itm) {
            return res.status(400).send()
        }

        await storeItem.destroy({ where: { itemId: req.params.id} })
        res.status(200).send("Post deleted")
    } catch {
        res.status(500).send()
    }
};