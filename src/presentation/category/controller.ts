import { Request, Response } from "express";
import { CreateCategoryDto } from "../../domain/dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../../domain/dtos/category/update-category.dto";
import { DeleteCategoryDto } from "../../domain/dtos/category/delete-category.dto";
import { FindOneCategoryDto } from "../../domain/dtos/category/findone-category.dto";
import { CategoryService } from "../services/category.service";

export class CategoryController {
  constructor(private readonly categoryService: CategoryService){}

  create = (req: Request, res: Response) => {
    const [error, createCategory] = CreateCategoryDto.create(req.body);
    if (error) return res.status(400).json({ error });
    this.categoryService.create(createCategory!)
      .then(category => res.json(category))
      .catch(error => res.status(500).json(error));
  };

  update = (req: Request, res: Response) => {
    const [error, updateCategory] = UpdateCategoryDto.update(req.body);
    if(error) return res.status(400).json({ error });
  
    if (!updateCategory) {
      return res.status(400).json({ error: "Update data is missing or invalid" });
    }
  
    this.categoryService.update(updateCategory)
      .then(category => res.json(category))
      .catch(error => res.status(500).json(error));
  };

  delete = (req: Request, res: Response) => {
    const [error, deleteCategory] = DeleteCategoryDto.delete(req.body);
    if(error) return res.status(400).json({ error });

    if(!deleteCategory) {
      return res.status(400).json({ error: "Delete data is missing or invalid" });
    }

    this.categoryService.delete(deleteCategory)
      .then(category => res.json(category))
      .catch(error => res.status(500).json(error))
  };

  findAll = (req: Request, res: Response) => {
    return res.json({ message: "category create" });
  };

  findOne = (req: Request, res: Response) => {
    const [error, findOneCategory] = FindOneCategoryDto.findOne(req.body);	
    if(error) return res.status(400).json({ error });

    if(!findOneCategory) {
      return res.status(400).json({ error: "Find data is missing or invalid" });
    }

    this.categoryService.findOne(findOneCategory)
    .then(category => res.json(category))
    .catch(error => res.status(500).json(error))
  };
}
