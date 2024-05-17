import { RegisterUserDto } from '../../domain/dtos/auth/register-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserModel } from '../../database/mongodb/models/user.model';
import { UserMaper } from '../../domain/mapers/user.mapers';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';


export class AuthService{

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { email } = registerUserDto;
        try{
            const exist = await UserModel.findOne({ email });
            if (exist) throw Error("error");

            const user = await UserModel.create(registerUserDto);
            if (!user) throw Error("error");
            
            await user.save();

            return UserMaper.fromEntity(user);
        }catch(error){
            throw error
        }


    }
    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        const { email, password } = loginUserDto;
        try{
            const exist = await UserModel.findOne({ email });
            if (!exist) throw Error("error");

            if (exist.password !== password) throw Error("error");
            return UserMaper.fromEntity(exist);
        }catch(error){
            throw error
        }
    }
}