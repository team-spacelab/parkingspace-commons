import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Users } from './Users'

@Entity('cars')
export class Cars {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number

  @Column({ type: 'int', unsigned: true })
    userId: number

  @Column({ type: 'varchar', length: 10 })
    alias: string

  @Column({ type: 'varchar', length: 8 })
    num: string

  @Column({ type: 'int', default: 3 })
    type: number

  @ManyToOne(() => Users, (users) => users.cars, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn([{ name: 'userId', referencedColumnName: 'users_id' }])
    user: Users
}
