import { RequestHandler } from "express";
import { verifyUser } from "../services/authService";
import { user } from "../models/user";
import { Approved } from "../models/Approved";
import { unApproved } from "../models/unApproved";

export const getAllagb: RequestHandler = async (req, res, next) => {
    try {
        let gb = await Approved.findAll();

        if (gb) {
            res.status(200).json(gb);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const getAlluagb: RequestHandler = async (req, res, next) => {
    try {
        let gb = await unApproved.findAll();

        if (gb) {
            res.status(200).json(gb);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const adduagb: RequestHandler = async (req, res, next) => {
    try {

        const newunApproved: unApproved = req.body

        if (!newunApproved) {
            return res.status(400).send();
        }

        if (newunApproved.name && newunApproved.email && newunApproved.message ) {
            let created = await unApproved.create(newunApproved)
            if (created) {
                res.status(200).send(true)
            } else {
                res.status(500).send()
            }
        } else {
            res.status(200).send(false)
        }
    } catch {
        res.status(500).send()
    }
};

export const approve: RequestHandler = async (req, res, next) => {
    try {
        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }
        const newApproved: any = await unApproved.findByPk(req.params.id);
        if (!newApproved) {
            return res.status(400).send();
        }

        if (newApproved.name && newApproved.email && newApproved.message) {
            console.log(newApproved)
            const newApp: any = {
                name: newApproved.name,
                email: newApproved.email,
                message: newApproved.message,
                createdAt: newApproved.createdAt
            }
            let created = await Approved.create(newApp)
            if (created) {
                await unApproved.destroy({where : {unApprovedId: req.params.id}})
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

export const disapprove: RequestHandler = async (req, res, next) => {
    try {
        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newDisapproved: any = await unApproved.findByPk(req.params.id);
        if (!newDisapproved) {
            return res.status(400).send();
        }

        await unApproved.destroy({where : {unApprovedId: req.params.id}})
        res.status(200).send()
    } catch {
        res.status(500).send()
    }
};


export const remove: RequestHandler = async (req, res, next) => {
    try {
        let user: user | null = await verifyUser(req);
        if (!user) {
            return res.status(403).send();
        }
        
        let ApprovedPost = await Approved.findByPk(req.params.id)
        if (!ApprovedPost) {
            return res.status(400).send()
        }

        await Approved.destroy({ where: {ApprovedId: req.params.id} })
        res.status(200).send()
    } catch {
        res.status(500).send()
    }
};