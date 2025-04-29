import { Injectable } from '@nestjs/common';
import { Contacto } from 'src/domains/entities/contacto.entity';
import { Repository } from "typeorm";



@Injectable()
export class CreateEmailUseCase {
    constructor(private readonly emailRepo: Repository<Contacto>) { }

    execute(input: CreateEmailDto) {
        const email = new Email(input);


        if (input.createdAt) {
            email.status = EmailStatus.LIDO;
        }
        return this.emailRepo.save(email)
    }
}