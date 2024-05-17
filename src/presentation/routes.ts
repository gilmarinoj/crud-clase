import {Router} from "express";
import { ProductRoute } from "./product/route"
import {CategoryRoutes} from "./category/route"
export class AppRoute{

    static get routes(): Router{
        const routes = Router();
        
        routes.use('/api/product', ProductRoute.routes );
        routes.use('/api/category', CategoryRoutes.routes );
        
        return routes;
    }
}