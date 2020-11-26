import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'shorts' })
export class Short extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  originalUrl: string;

  @Column()
  shortUrl: string;

  @Column()
  timeout: Date;

  @Column()
  lastAccess: Date;

  @Column()
  accessCount: number;
}
