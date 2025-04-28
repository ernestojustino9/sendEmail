import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { CreateEmailDto } from "../dto/create-email.dto";
import { Email, EmailStatus } from "../entities/email.entity";

@Injectable()
export class CreateEmailUseCase {
    constructor(private readonly emailRepo: Repository<Email>) { }

    execute(input: CreateEmailDto) {
        const email = new Email(input);


        if (input.createdAt) {
            email.status = EmailStatus.LIDO;
        }
        return this.emailRepo.save(email)
    }
}