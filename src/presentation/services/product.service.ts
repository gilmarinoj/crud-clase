import { CreateProductDto } from "../../domain/dtos/product/create-product.dto";
import { UpdateProductDto } from "../../domain/dtos/product/update-product.dto";
import { ProductEntity } from "../../domain/entities/product.entity";
import { ProductModel } from "../../database/mongodb/models/product.model";
import { ProductMaper } from "../../domain/mapers/product.mapers";
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';


export class ProductService {

  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const { name } = createProductDto;
    try {
      const exist = await ProductModel.findOne({ name });
      if (exist) throw Error("error");

      const product = await ProductModel.create(createProductDto);
      if (!product) throw Error("error");

      await product.save();

      return ProductMaper.FromJSON(product);
    } catch (error) {
      throw error;
    }
  }

  async update(updateProductDto: UpdateProductDto, id: string): Promise<ProductEntity> {
    try {
      const product = await ProductModel.findByIdAndUpdate({
        id: updateProductDto,
        data: { ...updateProductDto }
      });
      if (!product) throw Error('Error')
      await product.save();
      return ProductMaper.FromJSON(product);
    }
    catch (error) {
      throw error;
    }
  }
  async delete(id: string): Promise<ProductEntity> {
    try {

      const product = await ProductModel.findOneAndDelete({ id });
      if (!product) throw Error('Error')
      return ProductMaper.FromJSON(product);
    } catch (error) {
      throw error
    }
  }
  async findAll(paginationDto: PaginationDto): Promise<ProductEntity[]> {
    const { offset, limit } = paginationDto
    try {
      const products = await ProductModel.find(paginationDto)

      const MappedProducts = products.map(ProductMaper.FromJSON);

      return MappedProducts
    } catch (error) {
      throw error
    }
  }

  async findOne(id: string): Promise<ProductEntity> {
    try {
      const product = await ProductModel.findOne({ id });
      if (!product) throw Error('Error')
      return ProductMaper.FromJSON(product);
    } catch (error) {
      throw error
    }
  }
}
