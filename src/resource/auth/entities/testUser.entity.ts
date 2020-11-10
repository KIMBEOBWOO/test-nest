import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'NewTest' })
export class TestUser {
 @PrimaryGeneratedColumn()
 index: number;

 @Column()
 id: string;

 @Column()
 pw: string;

 @Column()
 email: string;
}
