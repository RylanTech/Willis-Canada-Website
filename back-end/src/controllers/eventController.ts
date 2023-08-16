import { RequestHandler } from "express";
import { verifyUser } from "../services/authService";
import { user } from "../models/user";
import { events } from "../models/events";

export const getAllEvents: RequestHandler = async (req, res, next) => {
    try {
        let evnts = await events.findAll();

        if (evnts) {
            res.status(200).json(evnts);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const getEvent: RequestHandler = async (req, res, next) => {
    try {
        let event = await events.findByPk(req.params.id)

        if (event) {
            res.status(200).json(event);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const addEvent: RequestHandler = async (req, res, next) => {
    try {
        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newEvent: events = req.body

        if (!newEvent) {
            return res.status(400).send();
        }

        if (newEvent.title && newEvent.title && newEvent.date && newEvent.location && newEvent.description) {
            let created = await events.create(newEvent)
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

export const editEvent: RequestHandler = async (req, res, next) => {
    try {
        let id = req.params.id

        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newEvent: events = req.body

        if (!newEvent) {
            return res.status(400).send();
        }

        if (newEvent.title && newEvent.title && newEvent.date && newEvent.location && newEvent.description) {
            let updated = await events.update(newEvent, { where: { eventId: id } })
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

export const removeEvent: RequestHandler = async (req, res, next) => {
    try {
        let user: user | null = await verifyUser(req);
        if (!user) {
            return res.status(403).send();
        }
        
        let event = await events.findByPk(req.params.id)
        if (!event) {
            return res.status(400).send()
        }

        await events.destroy({ where: {eventId: req.params.id} })
        res.status(200).send("Post deleted")
    } catch {
        res.status(500).send()
    }
};