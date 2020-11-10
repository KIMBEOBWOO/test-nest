import { Entity, Column, OneToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'NewTest' })
export class NewTest {
 @PrimaryColumn()
 testId: number;
}
