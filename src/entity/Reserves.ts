import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Zones } from './Zones'
import { Users } from './Users'
import { Orders } from './Orders'

@Entity('reserves')
export class Reserves {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number

  @Column({ type: 'int', unsigned: true })
    zoneId: number

  @Column({ type: 'int', unsigned: true })
    userId: number

  @Column({ type: 'timestamp' })
    startAt: Date

  @Column({ type: 'timestamp' })
    endAt: Date

  @Column({ type: 'int', default: 0 })
    status: number

  @ManyToOne(() => Zones, (zones) => zones.reserves, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn([{ name: 'zoneId', referencedColumnName: 'zones_id' }])
    zone: Zones

  @ManyToOne(() => Users, (users) => users.reserves, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn([{ name: 'userId', referencedColumnName: 'users_id' }])
    user: Users

  @OneToMany(() => Orders, (orders) => orders.reserve)
    orders: Orders[]
}
