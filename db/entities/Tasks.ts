

    import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
    export class Tasks {
        @PrimaryGeneratedColumn()
        id: number;

        @Column()
        title: string;

        @Column()
        statue:boolean;
    }