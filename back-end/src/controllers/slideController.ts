import { RequestHandler } from "express";
import { slides } from "../models/slides";
import { verifyUser } from "../services/authService";
import { user } from "../models/user";

export const getallSlides: RequestHandler = async (req, res, next) => {
    try {
        let slidez = await slides.findAll();

        if (slidez) {
            res.status(200).json(slidez);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
}

export const getSlide: RequestHandler = async (req, res, next) => {
    try {
        let slide = await slides.findByPk(req.params.id)

        if (slide) {
            res.status(200).json(slide);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
}

export const addSlide: RequestHandler = async (req, res, next) => {
    try {
        let usr: user | null = await verifyUser(req)
        if (!user) {
            return res.status(403).send();
        }

        const newSlide: slides = req.body

        if (!newSlide) {
            return res.status(400).send();
        }

        if (newSlide.imageUrl) {
            let created = await slides.create(newSlide)
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

export const removeSlide: RequestHandler = async (req, res, next) => {
    try {
        let user: user | null = await verifyUser(req);
        if (!user) {
            return res.status(403).send();
        }
        
        let slide = await slides.findByPk(req.params.id)
        if (!slide) {
            return res.status(400).send()
        }

        await slides.destroy({ where: { slideId: req.params.id }})
    } catch {
        res.status(500).send()
    }
};