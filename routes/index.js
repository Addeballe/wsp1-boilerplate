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

export default router