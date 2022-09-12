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

/* eslint-disable no-unused-vars */

export enum ReserveStatus {
  RESERVED,
  WAITING,
  CANCELED
}

/* eslint-enable no-unused-vars */

@Entity('reserves')
export class Reserves {
  @PrimaryGeneratedColumn({ name: 'reserves_id' })
  public readonly id: number

  @Column({ name: 'zones_id' })
  public readonly zoneId: number

  @ManyToOne(() => Zones, (zone) => zone.id, { eager: true })
  @JoinColumn({ name: 'zones_id' })
  public readonly zone: Zones

  @Column({ name: 'users_id' })
  public readonly userId: number

  @ManyToOne(() => Users, (user) => user.id, { eager: true })
  @JoinColumn({ name: 'users_id' })
  public readonly user: Users

  @Column({ name: 'reserve_start' })
  public readonly start: Date

  @Column({ name: 'reserve_end' })
  public readonly end: Date

  @Column({ name: 'reserve_status' })
  public readonly status: ReserveStatus

  @OneToMany(() => Orders, (order) => order.reserve)
  public readonly orders: Orders[]
}
