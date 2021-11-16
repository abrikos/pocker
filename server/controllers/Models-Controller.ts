import express from "express";

export default function ModelsController(app: any) {
    interface IError {
        message: 'string'
    }

    function getModel(name: string) {
        return app.settings.Models[name]
    }

    //app.settings.Models.user.find().then(console.log)

    function sendError(req: express.Request, res: express.Response, status:number, error:any){
        console.log(req.path, error.message);
        const {message} = error;
        res.status(500).send({message});
    }

    app.route('/api/model/:name')
        .get(async (req: express.Request, res: express.Response) => {
            try {
                const x = await getModel(req.params.name).find();
                console.log(x)
                getModel(req.params.name).find()
                    .then((data: object) => res.send(data))
                    .catch((e: IError) => sendError(req,res,500,e))
            } catch (e: any) {
                sendError(req,res,500,e)
            }
        })
        .post((req: express.Request, res: express.Response) => {
            try {
                getModel(req.params.name).create(req.body)
                    .then((data: object) => res.send(data))
                    .catch((e: IError) => sendError(req,res,500,e))
            } catch (e: any) {
                sendError(req,res,500,e)
            }
        })

    app.route('/api/model/:name/:id')
        .get((req: express.Request, res: express.Response) => {
            try {
                getModel(req.params.name).findById(req.params.id)
                    .then((data:any) => res.send(data))
                    .catch((e: IError) => sendError(req,res,500,e))
            } catch (e: any) {
                sendError(req,res,500,e)
            }
        })
        .post((req: express.Request, res: express.Response) => {
            try {
                getModel(req.params.name).findOneAndUpdate({_id:req.params.id}, req.body)
                    .then((data: object) => res.send(data))
                    .catch((e: IError) => sendError(req,res,500,e))
            } catch (e: any) {
                sendError(req,res,500,e)
            }
        })


}