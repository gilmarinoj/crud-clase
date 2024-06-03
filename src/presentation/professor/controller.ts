import { Request, Response } from "express";
import { CreateProfessorDto } from "../../domain/dtos/professor/create-professor.dto";
import { UpdateProfessorDto } from '../../domain/dtos/professor/update-professor.dto';
import { ProfessorService } from "../services/professor.service";
import { Validators } from '../../config/validator';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';

export class ProfessorController {
    constructor(private readonly professorService: ProfessorService) { }

    create = (req: Request, res: Response) => {
        const [error, createProfessorDto] = CreateProfessorDto.create(req.body);
        if (error) return res.status(400).json({ error });
        this.professorService.create(createProfessorDto!)
            .then(professor => res.json(professor))
            .catch(error => res.status(500).json(error));
    };

    update = (req: Request, res: Response) => {
        const id = req.params.id
        if (!Validators.validationMongoId(id)) throw Error('mongo id is not valid')
        const [error, updateProfessorDto] = UpdateProfessorDto.update(req.body)
        if (error) return res.status(400).json({ error });
        this.professorService.update(updateProfessorDto!, id!)
            .then(professor => res.json(professor))
            .catch(error => res.status(500).json(error))

    }

    delete = (req: Request, res: Response) => {
        const id = req.params.id
        if (!Validators.validationMongoId(id)) throw Error('mongo id is not valid')

        this.professorService.delete(id!)
            .then(professor => res.json(professor))
            .catch(error => res.status(500).json(error))
    }

    findAll = (req: Request, res: Response) => {
        const [, paginationDto] = PaginationDto.create(req.query)

        this.professorService.findAll(paginationDto!)
            .then(professor => res.json(professor))
            .catch(error => res.status(500).json(error))
    }


    findOne = (req: Request, res: Response) => {
        const id = req.params.id
        if (!Validators.validationMongoId(id)) throw Error('mongo id is not valid')

        this.professorService.findOne(id!)
            .then(professor => res.json(professor))
            .catch(error => res.status(500).json(error))
    }
}
