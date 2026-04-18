const express = require("express")
const route = express.Router();
const Manager = require("../models/manager.model");

route.get("/", async (req,res) => {
    res.render("login");

    const manager = await Manager.create({
    email: process.env.MANAGER_EMAIL,
    password: process.env.MANAGER_PASSWORD
    });

    
})

module.exports = route;