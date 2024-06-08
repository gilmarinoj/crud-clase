import { Request, Response } from "express";
import { UploadFileDto } from '../../domain/dtos/uploadfile/upload-file.dto';
import { UploadFileService } from '../services/upload-file.service';

export class UploadFileController{
    constructor( private readonly uploadFileService:UploadFileService ){}
    uploadSingle = ( req:Request, res: Response ) => {
        // validare datos con el dto
        const [error, uploadFileDto] = UploadFileDto.upload( { type: req.params.type, files: req.body.files.at(0) } );
        if( error ) return res.status(400).json({error});
        
        // usar los servicios y responder al usuario
        this.uploadFileService.uploadSingle( uploadFileDto! )
        .then(data=>res.json(data))
        .catch(error => res.status(500).json({error}));

    }
}