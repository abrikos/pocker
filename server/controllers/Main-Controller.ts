import express from "express";

export default function MainController(app: express.Application): void {
    app.get('/api', (req: any, res: any) => {
        res.send({ok: 122200})
    })
}