import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('task')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'int' })
    user_id: number;

    @Column()
    task: string;

    @Column()
    is_completed: boolean;

    @Column()
    created_at: string;

    @Column()
    updated_at: string;
}
