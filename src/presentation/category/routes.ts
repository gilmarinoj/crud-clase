import { Router } from "express";
import { CategoryController } from "./controller";
import { CategoryService } from "../services/category.service";
import { AuthMiddleware } from '../middlewares/auth.middleware';

export class CategoryRoutes{
    static get routes(): Router{
        const routes= Router();
        const categoryService = new CategoryService();
        const controller = new CategoryController(categoryService);

        routes.get('/:id', controller.findOne);
        routes.get('/', controller.findAll);
        routes.post('/', [
            AuthMiddleware.validateJWT
        ], controller.create);
        routes.delete('/', controller.delete);
        routes.put('/', controller.update);

        return routes;
    }
}