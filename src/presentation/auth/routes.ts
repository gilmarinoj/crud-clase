/** 
 * Esta clase obtiene las rutas para llegar a usuario. es una rute secundaria
 * la ruta principal comienza por: localhost:3000/api/user
 * despues de eso viene la ruta secundaria
 */

import { Router } from "express"
import { AuthController } from "./controller"
import { AuthService } from "../services/auth.service";

export class AuthRoutes{

    static get routes(): Router{
        const routes = Router();
        const authService = new AuthService();
        const controller = new AuthController( authService );

        routes.post('/register', controller.register ); 
        routes.post('/login',    controller.login ); 
        
        return routes;
    }
}