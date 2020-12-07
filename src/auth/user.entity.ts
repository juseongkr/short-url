import { Short } from 'src/shorts/short.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity({ name: 'users' })
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @OneToMany(
    type => Short,
    short => short.user,
    { eager: true },
  )
  shorts: Short[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  async validatePassword(password: string): Promise<boolean> {
    return (await bcrypt.hash(password, this.salt)) === this.password;
  }
}
