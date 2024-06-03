export class UpdateProfessorDto{
    constructor(
        public name?: string,
        public email?: number,
        public profession?: string,
        public gender?: string,
        public address?: string
    ){}

    static update( object: {[ key: string ]:any } ): [string?, UpdateProfessorDto?]{
        const { name, email, profession, gender, address } = object;
        return [ undefined, new UpdateProfessorDto( name, email, profession, gender, address ) ];
    }
}