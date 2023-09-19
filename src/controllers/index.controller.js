import { pool } from "../db.js"

export const prueba =  async(req, res) => {
    const [result] = await pool.query('SELECT "Prueba exitosa" AS RESULT')
    res.json(result[0])
}