import { Request, Response, NextFunction } from 'express';

export class PermitUserMiddleware{
    
    static validateRole(rolesPermit: string[]){
        return (req: Request, res: Response, next: NextFunction) => {
            const { roles } = req.body.user;
            if( !roles || !rolesPermit.includes(roles.at(0)) ) {
                return res.status(401).json({error: 'Unauthorized'});
            }

            next();
        }
    }

}