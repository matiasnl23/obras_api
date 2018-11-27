import { Router, Request, Response } from 'express';
import { where, WhereOptions, WhereGeometryOptions, WhereLogic, FindOptions, FindOptionsAttributesArray } from 'sequelize';

import DB from '../server/sequelize';
import Obra from '../models/obra';

let db = DB.instance;

const obrasRouter = Router();

obrasRouter.get('/', (req: Request, res: Response) => {

    let where: any = {};

    if(req.query.estado) { where.obra_estado = req.query.estado }

    let obras = Obra(db.server, db.datatypes);

    obras.findAndCountAll({
        where,
        order: [
            ['obra_insert_date', 'desc'],
        ],
        limit: 20,
    }).then(result => {
        res.json({
            ok: true,
            total: result.count,
            datos: result.rows,
        });
    });
});

export default obrasRouter;