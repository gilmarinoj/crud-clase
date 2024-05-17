import { Validators } from '../../../config/validator';
export class RegisterUserDto{
    
    constructor(
        public name: string,
        public email: string,
        public password: string,
    ){}

    static register( object: { [key:string]:any } ): [string?, RegisterUserDto?]{
        const { name, email, password } = object;

        if( !name ) return ['Missing name', undefined];
        if( name.length < 2 ) return ['Name too short', undefined];

        if( !email ) return ['Missing email', undefined];
        if( !Validators.email.test(email) ) return ['Invalid email', undefined];

        if( !password ) return ['Missing password', undefined];
        if( password.length < 6 ) return ['Password too short', undefined];
        if( !Validators.password.test(password) ) return ['Invalid password', undefined];


        return [undefined, new RegisterUserDto(name, email, password)];
    }
}