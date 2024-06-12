import { RegisterUserDto } from '../../domain/dtos/auth/register-user.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserModel } from '../../database/mongodb/models/user.model';
import { UserMaper } from '../../domain/mapers/user.mapers';
import { LoginUserDto } from '../../domain/dtos/auth/login-user.dto';
import { JwtAdapter } from '../../config/jwt.adapter';


export class AuthService{

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { email } = registerUserDto;
        try{
            const exist = await UserModel.findOne({ email });
            if (exist) throw Error("error");

            const user = await UserModel.create(registerUserDto);
            if (!user) throw Error("error");
            
            await user.save();

            return UserMaper.fromJSON(user);
        }catch(error){
            throw error;
        }


    }
    async login(loginUserDto: LoginUserDto): Promise<{token:string, user:UserEntity}> {
        const { email, password } = loginUserDto;
        try{
            const user = await UserModel.findOne({ email });
            if (!user) throw Error("error");

            const token = await JwtAdapter.generateToken( {id: user.id} );
            if (!token) throw new Error("Token no generado");
            return { token, user:UserMaper.fromJSON(user) };
        }catch(error){
            throw error;
        };
    };
};

