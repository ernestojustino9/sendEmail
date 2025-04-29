import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

export enum EmailStatus {
    PENDENTE = 'Pendente',
    LIDO = 'Lido',
    NAOLIDO = 'Não Lido',
}

export class Contacto {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: true })
    assunto: string;

    @Column({ nullable: true })
    telefone: string;

    @Column({ nullable: false })
    mensagem: string;

    @Column({ type: "simple-enum" })
    status: EmailStatus = EmailStatus.PENDENTE;

    @CreateDateColumn()
    createdAt: Timestamp;
    @UpdateDateColumn()
    updatedAt: Timestamp;


}
