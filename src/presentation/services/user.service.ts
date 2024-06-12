import { CreateUserDto } from "../../domain/dtos/user/create-user.dto";
import { UpdateUserDto } from "../../domain/dtos/user/update-user.dto";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserModel } from "../../database/mongodb/models/user.model";
import { UserMaper } from '../../domain/mapers/user.mapers';
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';


export class UserService {

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const { name } = createUserDto;
        try {
            const exist = await UserModel.findOne({ name });
            if (exist) throw Error("error");

            const user = await UserModel.create(createUserDto);
            if (!user) throw Error("error");

            await user.save();

            return UserMaper.fromJSON(UserMaper);
        } catch (error) {
            throw error;
        }
    }

    async update(updateUserDto: UpdateUserDto, id: string): Promise<UserEntity> {
        try {
            const user = await UserModel.findByIdAndUpdate({
                id: updateUserDto,
                data: { ...updateUserDto }
            });
            if (!user) throw Error('Error')
            await user.save();
            return UserMaper.fromJSON(user);
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id: string): Promise<UserEntity> {
        try {

            const user = await UserModel.findOneAndDelete({ id });
            if (!user) throw Error('Error')
            return UserMaper.fromJSON(user);
        } catch (error) {
            throw error
        }
    }
    async findAll(paginationDto: PaginationDto): Promise<UserEntity[]> {
        const { offset, limit } = paginationDto
        try {
            const user = await UserModel.find(paginationDto)

            const MappedUser = user.map(UserMaper.fromJSON);

            return MappedUser
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string): Promise<UserEntity> {
        try {
            const user = await UserModel.findOne({ id });
            if (!user) throw Error('Error')
            return UserMaper.fromJSON(user);
        } catch (error) {
            throw error
        }
    }
}
