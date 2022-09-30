import express from "express";
import bcrypt from "bcrypt";
import passport from "passport";

const router = express.Router();

const bcryptSaltRounds = 10;
const createdUser = {};

router.post("/signup", (req, res, next) => {
    Promise.resolve(req.body.credentials)
        .then((credentials) => {
            if (
                !credentials ||
                !credentials.password ||
                credentials.password !== credentials.password_confirmation
            ) {
                throw new Error("Password cannot be empty");
            }
        })
        .then(() =>
            bcrypt.hash(req.body.credentials.password, bcryptSaltRounds)
        )
        .then((hash) => {
            return {
                displayName: req.body.displayName,
                administrator: createdUser,
            };
        })
        .then(() => {
            res.sendStatus(200);
        });
});

export default router;
