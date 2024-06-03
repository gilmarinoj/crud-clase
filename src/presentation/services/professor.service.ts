import { CreateProfessorDto } from "../../domain/dtos/professor/create-professor.dto";
import { UpdateProfessorDto } from "../../domain/dtos/professor/update-professor.dto";
import { ProfessorEntity } from "../../domain/entities/professor.entity";
import { ProfessorModel } from "../../database/mongodb/models/professor.model";
import { ProfessorMaper } from "../../domain/mapers/professor.mapers";
import { PaginationDto } from '../../domain/dtos/shared/pagination.dto';


export class ProfessorService {

    async create(createProfessorDto: CreateProfessorDto): Promise<ProfessorEntity> {
        const { name } = createProfessorDto;
        try {
            const exist = await ProfessorModel.findOne({ name });
            if (exist) throw Error("error");

            const professor = await ProfessorModel.create(createProfessorDto);
            if (!professor) throw Error("error");

            await professor.save();

            return ProfessorMaper.FromJSON(professor);
        } catch (error) {
            throw error;
        }
    }

    async update(updateProfessorDto: UpdateProfessorDto, id: string): Promise<ProfessorEntity> {
        try {
            const professor = await ProfessorModel.findByIdAndUpdate({
                id: updateProfessorDto,
                data: { ...updateProfessorDto }
            });
            if (!professor) throw Error('Error')
            await professor.save();
            return ProfessorMaper.FromJSON(professor);
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id: string): Promise<ProfessorEntity> {
        try {

            const professor = await ProfessorModel.findOneAndDelete({ id });
            if (!professor) throw Error('Error')
            return ProfessorMaper.FromJSON(professor);
        } catch (error) {
            throw error
        }
    }
    async findAll(paginationDto: PaginationDto): Promise<ProfessorEntity[]> {
        const { offset, limit } = paginationDto
        try {
            const professor = await ProfessorModel.find(paginationDto)

            const MappedProfessor = professor.map(ProfessorMaper.FromJSON);

            return MappedProfessor
        } catch (error) {
            throw error
        }
    }

    async findOne(id: string): Promise<ProfessorEntity> {
        try {
            const professor = await ProfessorModel.findOne({ id });
            if (!professor) throw Error('Error')
            return ProfessorMaper.FromJSON(professor);
        } catch (error) {
            throw error
        }
    }
}
