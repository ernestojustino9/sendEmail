// import { IsNotEmpty } from "class-validator";

import { EmailStatus } from "../entities/email.entity";

export class CreateEmailDto {
    // @IsNotEmpty()
    email: string;
    // @IsNotEmpty()
    assunto: string;
    // @IsNotEmpty()
    telefone: string;
    // @IsNotEmpty()
    mensagem: string;

    status: EmailStatus;
    createdAt: Date;
    updatedAt: Date;
}
