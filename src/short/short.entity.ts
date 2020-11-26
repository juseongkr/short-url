import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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

  @ManyToOne(
    type => User,
    user => user.shorts,
    { eager: false },
  )
  user: User;

  @Column()
  userId: number;
}
