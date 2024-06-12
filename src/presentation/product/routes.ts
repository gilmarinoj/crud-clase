import { Router } from "express";
import { ProductController } from "./controller";
import { ProductService } from "../services/product.service";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { PermitUserMiddleware } from "../middlewares/permisos.middleware";
import { Roles } from "../../domain/entities/roles/roles";

export class ProductRoute{
    static get routes(): Router{
        const routes= Router();
        const productService = new ProductService()
        const controller = new ProductController(productService);
        routes.get('/',controller.findAll);
        routes.get('/', controller.findOne);
        routes.post('/', [
            AuthMiddleware.validateJWT,
        ], controller.create);
        routes.delete('/',controller.delete);
        routes.put('/',controller.update);

        return routes;
    }
}