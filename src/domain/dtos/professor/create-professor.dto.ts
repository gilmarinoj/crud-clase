
export class CreateProfessorDto{
    constructor(
        public name: string,
        public email: number,
        public profession: string,
        public gender: string,
        public address: string
    ){}

    static create( object: {[key: string]:any } ): [string?, CreateProfessorDto?]{
        const { name, email, profession, gender, address } = object;

        if( !name ) return ['Missing name', undefined];
        if( name.length < 4 ) return ['Name too short', undefined];

        if( !email ) return ['Missing email', undefined];
        
        if( !profession ) return ['Missing description', undefined];

        if ( !gender ) return ['Missing category', undefined]

        if ( !address ) return ['Missing category', undefined]

        return [ undefined, new CreateProfessorDto(
            name,
            email,
            profession,
            gender,
            address
        )];
    }
};