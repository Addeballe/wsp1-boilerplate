import express from "express"
import pool from "../config/db.js"

const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk",
        { title: "Node js startrepo", message: "Använd det här repot som en grund för dina projekt." }
    )
})

router.get('/error', (req, res) => {
    throw new Error('Test error')
})

router.get("/bread", async (req, res) => {
    const [rows] = await pool.query(`select * from loaf`)
    res.render("breads.njk", { breadtypes: rows} )
})

router.get("/routertest", (req, res) => {
    console.log(req)
    res.render("test.njk", {
        message: "hej"
    })
})

router.get("/routertest", (req, res) => {
    console.log(req)
    res.render("test.njk", {
        message: "hej"
    })
})

export default router