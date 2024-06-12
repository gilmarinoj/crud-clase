import { UserEntity } from "../entities/user.entity"

export class UserMaper{
    static fromEntity(user: import("mongoose").Document<unknown, {}, { name: string; roles: string[]; email?: string | null | undefined; password?: string | null | undefined; img?: string | null | undefined; }> & { name: string; roles: string[]; email?: string | null | undefined; password?: string | null | undefined; img?: string | null | undefined; } & { _id: import("mongoose").Types.ObjectId; }): UserEntity | PromiseLike<UserEntity> {
        throw new Error('Method not implemented.');
    }

    static fromJSON(object: {[key:string]:any}): UserEntity{
        
        const { id, name, email, password, roles, img } = object;
        if (!name) throw Error('error');
        if (!email) throw Error('error');
        if (!password) throw Error('error');
        return new UserEntity(id, name, email, password, roles, img);
    }

}