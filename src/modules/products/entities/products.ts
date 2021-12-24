import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity('products')
export class products {
  @PrimaryColumn()
  readonly id: string

  @Column()
  title: string

  @Column()
  quantity: number

  @Column()
  price: number

  @Column()
  description: string

  @Column()
  user_send: string

  @CreateDateColumn()
  createdAt: Date

  constructor () {
    if (!this.id) { this.id = uuidv4() }
  }
}
