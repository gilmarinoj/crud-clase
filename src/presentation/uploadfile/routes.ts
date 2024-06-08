import { Router } from "express";
import { UploadFileController } from './controller';
import { UploadFileMiddleware } from '../middlewares/uploadFile.middleware';
import { UploadFileService } from "../services/upload-file.service";

export class UploadFileRoutes{

    static get routes():Router{
        const routes = Router();
        const service = new UploadFileService();
        const controller = new UploadFileController(service);

        routes.post("/single/:type", [
            UploadFileMiddleware.containFile,
        ],controller.uploadSingle);

        return routes;
    }
}