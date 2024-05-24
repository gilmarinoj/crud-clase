import { NextFunction, Request, Response } from 'express';
import { JwtAdapter } from '../../config/jwt.adapter';
import { UserModel } from '../../database/mongodb/models/user.model';


export class AuthMiddleware{
    constructor(){}

    static async validateJWT(req: Request, res: Response, next: NextFunction){
        const authorization = req.headers.authorization;
        if(!authorization?.startsWith('Bearer ')) return res.status(400).json({message: 'Error'});
        
        const token = authorization.split(' ').at(1) || '';
        if(!token) return res.status(400).json({message: 'Error'});

        const payload = await JwtAdapter.validateToken<{id: string}>(token);
        if(!payload) return res.status(400).json({message: 'Error'});

        const user = await UserModel.findOne({ _id:payload.id })
        if(!user) return res.status(400).json({message: 'No autorizado'})
        
        req.body.user = user;

        next();
    }


}
