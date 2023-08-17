import { RequestHandler } from "express";
import { posts } from "../models/posts";
import { verifyUser } from "../services/authService";
import { user } from "../models/user";

export const getAllPosts: RequestHandler = async (req, res, next) => {
    try {
        let psts = await posts.findAll();

        if (psts) {
            res.status(200).json(psts);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const getPost: RequestHandler = async (req, res, next) => {
    try {
        let pst = await posts.findByPk(req.params.id)

        if (pst) {
            res.status(200).json(pst);
        } else {
            res.status(404).send();
        }
    } catch {
        res.status(500).send()
    }
};

export const addPost: RequestHandler = async (req, res, next) => {
    try {
        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newPost: posts = req.body

        if (!newPost) {
            return res.status(400).send();
        }

        if (newPost.title && newPost.message) {
            let created = await posts.create(newPost)
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

export const editPost: RequestHandler = async (req, res, next) => {
    try {
        let id = req.params.id

        let usr: user | null = await verifyUser(req)
        if (!usr) {
            return res.status(403).send();
        }

        const newPost: posts = req.body

        if (!newPost) {
            return res.status(400).send();
        }

        if (newPost.title && newPost.message) {
            let updated = await posts.update(newPost, { where: { postId: id } })
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

export const removePost: RequestHandler = async (req, res, next) => {
    try {
        let user: user | null = await verifyUser(req);
        if (!user) {
            return res.status(403).send();
        }
        
        let post = await posts.findByPk(req.params.id)
        if (!post) {
            return res.status(400).send()
        }

        await posts.destroy({ where: { postId: req.params.id }})
        res.status(200).send("Post deleted")
    } catch {
        res.status(500).send()
    }
};