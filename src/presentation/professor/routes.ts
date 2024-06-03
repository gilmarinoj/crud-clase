import { Router } from "express";
import { ProfessorController } from "./controller";
import { ProfessorService } from "../services/professor.service";
import { AuthMiddleware } from '../middlewares/auth.middleware';

export class ProfessorRoutes{
    static get routes(): Router{
        const routes= Router();
        const professorService = new ProfessorService();
        const controller = new ProfessorController(professorService);

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