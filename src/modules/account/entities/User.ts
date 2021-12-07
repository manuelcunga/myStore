import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn
} from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('users')
export class Users {
@PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  gender: string

  @Column()
  email: string

  @Column()
  isAdmin: string

  @CreateDateColumn()
  createdAt: Date

  constructor () {
    if (!this.id) { this.id = uuidv4() }
  }
}
