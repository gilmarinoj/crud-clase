import { UserEntity } from "../entities/user.entity"

export class UserMaper{

    static fromEntity(object: {[key:string]:any}): UserEntity{
        
        const { id, name, email, password, roles, img } = object;
        if (!name) throw Error('error');
        if (!email) throw Error('error');
        if (!password) throw Error('error');
        return new UserEntity(id, name, email, password, roles, img);
    }

}