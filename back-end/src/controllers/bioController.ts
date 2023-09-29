import { RequestHandler } from "express";
import { verifyUser } from "../services/authService";
import { user } from "../models/user";
import { bio } from "../models/Bio";

export const getBio: RequestHandler = async (req, res, next) => {
    try {
        let pst = await bio.findAll()

        if (pst) {
            res.status(200).json(pst);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const addBio: RequestHandler = async (req, res, next) => {
    try {
        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newPost: bio = req.body

        if (!newPost) {
            return res.status(400).send();
        }

        if (newPost.bioText && newPost.bioImg) {
            let created = await bio.create(newPost)
            if (created) {
                res.status(200).send(created)
            } else {
                res.status(500).send()
            }
        } else {
            res.status(400).send()
        }
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send();
    }
    
};

export const editBio: RequestHandler = async (req, res, next) => {
    try {
        let id = req.params.id

        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newPost:bio = req.body

        if (!newPost) {
            return res.status(400).send();
        }

        if (newPost.bioText && newPost.bioImg) {
            let updated = await bio.update(newPost, { where: { bioId: id } })
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