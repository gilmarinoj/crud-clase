import { Validators } from '../../../config/validator';

export class LoginUserDto{
    constructor(
        public email: string,
        public password: string
    ){}

    static login( object: { [key:string]:any } ): [string?, LoginUserDto?]{
        const { email, password } = object;
    
        if (!email) { return ['Missing email', undefined];};
        if (!Validators.email.test(email)) { return ['Invalid email', undefined];};
        if (!password) { return ['Missing password', undefined];};
        // if (!Validators.password.test(password)) { return ['Invalid password', undefined]; };

        return [undefined, new LoginUserDto(email, password)];
    }
}