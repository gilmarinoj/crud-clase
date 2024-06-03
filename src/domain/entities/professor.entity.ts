
export class ProfessorEntity{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public profession: string,
        public gender: string,
        public address: string,
    ){}
}