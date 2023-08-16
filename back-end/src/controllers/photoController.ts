import { RequestHandler } from "express";
import { photos } from "../models/photos";
import { user } from "../models/user";
import { verifyUser } from "../services/authService";

export const getAllPhotos: RequestHandler = async (req, res, next) => {
    try {
        let pics = await photos.findAll();

        if (pics) {
            res.status(200).json(pics);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const getPhotos: RequestHandler = async (req, res, next) => {
    try {
        let photo = await photos.findByPk(req.params.id)

        if (photo) {
            res.status(200).json(photo);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const addPhotos: RequestHandler = async (req, res, next) => {
    try {
        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newPhoto: photos = req.body

        if (!newPhoto) {
            return res.status(400).send();
        }

        if (newPhoto.imageUrl) {
            let created = await photos.create(newPhoto)
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

export const removePhotos: RequestHandler = async (req, res, next) => {
    try {
        let user: user | null = await verifyUser(req);
        if (!user) {
            return res.status(403).send();
        }
        
        let pic = await photos.findByPk(req.params.id)
        if (!pic) {
            return res.status(400).send()
        }

        await photos.destroy({ where: {photosId: req.params.id}})
        res.status(200).send("Post deleted")
    } catch {
        res.status(500).send()
    }
};