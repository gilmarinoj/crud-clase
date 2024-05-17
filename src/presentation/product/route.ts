import { Router } from "express";
import { ProductController } from "./controller";

export class ProductRoute{
    static get routes(): Router{
        const routes= Router();
        const controller = new ProductController();
        routes.get('/',controller.findAll);
        routes.post('/',controller.create);
        routes.delete('/',controller.delete);
        routes.put('/',controller.update);

        return routes;
    }
}