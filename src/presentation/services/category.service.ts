import { CreateCategoryDto } from "../../domain/dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../../domain/dtos/category/update-category.dto";
import { DeleteCategoryDto } from "../../domain/dtos/category/delete-category.dto";
import { FindOneCategoryDto } from "../../domain/dtos/category/findone-category.dto";
import { FindAllCategoryDto } from "../../domain/dtos/category/findall-category.dto";
import { CategoryEntity } from "../../domain/entities/category.entity";
import { CategoryModel } from "../../database/mongodb/models/category.model";
import { CategoryMaper } from "../../domain/mapers/category.mapers";
export class CategoryService {
  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    const { name } = createCategoryDto;
    try {
      const exist = await CategoryModel.findOne({ name });
        if (exist) throw Error("error");

      const Category = await CategoryModel.create(createCategoryDto);
        if (!Category) throw Error("error");

        await Category.save();

      return CategoryMaper.fromEntity(Category);
    } catch (error) {
      throw error;
    }
  }

  async update(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
    const { name, description } = updateCategoryDto;
    try {
      const Category = await CategoryModel.findOneAndUpdate(
        { name },
        { name, description },
        { new: true }
      );
        if (!Category) throw Error("error");

        await Category.save();

      return CategoryMaper.fromEntity(Category);
    }
    catch (error) {
      throw error;
    }
  }
  async delete(deleteCategoryDto: DeleteCategoryDto): Promise<CategoryEntity> { 
    const { categoryId } = deleteCategoryDto;
    try {
      const Category = await CategoryModel.findByIdAndDelete(categoryId);
        if (!Category) throw Error("error");

        await Category.save();

      return CategoryMaper.fromEntity(Category);
    } catch (error) {
      throw error
    }
   }
  async findAll(findallCategoryDto: FindAllCategoryDto): Promise<CategoryEntity> { 
    try {
      const Category = await CategoryModel.find();
        if (!Category) throw Error("error");
      return CategoryMaper.fromEntity(Category);
    } catch(error){
      throw error
    }
  }
  async findOne(findoneCategoryDto: FindOneCategoryDto): Promise<CategoryEntity> { 
    const { categoryId } = findoneCategoryDto;
    try {
      const Category = await CategoryModel.findById(categoryId);
        if (!Category) throw Error("error");



      return CategoryMaper.fromEntity(Category);
    } catch(error){
      throw error
    }
  }
}
