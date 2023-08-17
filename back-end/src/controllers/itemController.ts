import { RequestHandler } from "express";
import { item } from "../models/items";
import { user } from "../models/user";
import { verifyUser } from "../services/authService";

export const getAllItems: RequestHandler = async (req, res, next) => {
    try {
        let pics = await item.findAll();

        if (pics) {
            res.status(200).json(pics);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const getItem: RequestHandler = async (req, res, next) => {
    try {
        let photo = await item.findByPk(req.params.id)

        if (photo) {
            res.status(200).json(photo);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const addItem: RequestHandler = async (req, res, next) => {
    try {
        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newItem: item = req.body

        if (!newItem) {
            return res.status(400).send();
        }

        if (newItem.title && newItem.link && newItem.price) {
            let created = await item.create(newItem)
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

export const editItem: RequestHandler = async (req, res, next) => {
    try {
        let id = req.params.id

        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newItem: item = req.body

        if (!newItem) {
            return res.status(400).send();
        }

        if (newItem.title && newItem.link && newItem.price) {
            let updated = await item.update(newItem, { where: { itemId: id } })
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

export const removeItem: RequestHandler = async (req, res, next) => {
    try {
        let user: user | null = await verifyUser(req);
        if (!user) {
            return res.status(403).send();
        }
        
        let itm = await item.findByPk(req.params.id)
        if (!itm) {
            return res.status(400).send()
        }

        await item.destroy({ where: { itemId: req.params.id} })
        res.status(200).send("Post deleted")
    } catch {
        res.status(500).send()
    }
};