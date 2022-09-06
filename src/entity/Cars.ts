import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Users } from './Users'

@Entity('cars', { schema: 'parkingspace' })
export class Cars {
  @PrimaryGeneratedColumn({ type: 'int', name: 'cars_id', unsigned: true })
    id: number

  @Column('varchar', { name: 'cars_alias', length: 10 })
    alias: string

  @Column('varchar', { name: 'cars_num', length: 8 })
    num: string

  @Column('int', { name: 'cars_type', default: () => "'0'" })
    type: number

  @ManyToOne(() => Users, (users) => users.id, { eager: true })
  @JoinColumn([{ name: 'users_id' }])
    userId: Users
}
