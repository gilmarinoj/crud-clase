import { ProfessorEntity } from '../entities/professor.entity';
import { Validators } from '../../config/validator';
export class ProfessorMaper{
    static FromJSON( object: {[ key: string ]: any} ): ProfessorEntity{
        const { id, name, email, profession, gender, address  } = object;

        if( !Validators.validationMongoId(id) ) throw Error('error');
        if( !name ) throw Error('error');
        if( !email ) throw Error('error');
        if( !profession ) throw Error('error');
        if( !gender ) throw Error('error')
            
        return new ProfessorEntity(id, name, email, profession, gender, address);
    }
}