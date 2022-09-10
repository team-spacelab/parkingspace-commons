import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Users } from './Users'
import { Cars } from './Cars'
import { Zones } from './Zones'
import { Reserves } from './Reserves'

export enum MethodType {
  '카드',
  '계좌이체'
}

export enum OrderStatus {
  READY,
  IN_PROGRESS,
  WAITING_FOR_DEPOSIT,
  DONE,
  CANCELED,
  PARTIAL_CANCELED,
  ABORTED,
  EXPIRED
}

@Entity('orders')
export class Orders {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
    id: number

  @Column({ type: 'int', unsigned: true })
    userId: number

  @Column({ type: 'int', unsigned: true })
    carId: number

  @Column({ type: 'int', unsigned: true })
    zoneId: number

  @Column({ type: 'int', unsigned: true })
    reserveId: number

  @Column({ type: 'int', unsigned: true })
    amount: number

  @Column({ type: 'int', unsigned: true })
    point: number

  @Column({ type: 'varchar', length: 4 })
    method: MethodType

  @Column({ type: 'varchar', length: 256, nullable: true })
    receipt: string

  @Column({ type: 'int', default: 0 })
    status: OrderStatus

  @ManyToOne(() => Users, (users) => users.orders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn([{ name: 'userId', referencedColumnName: 'users_id' }])
    user: Users

  @ManyToOne(() => Cars, (cars) => cars.orders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn([{ name: 'carId', referencedColumnName: 'cars_id' }])
    car: Cars

  @ManyToOne(() => Zones, (zones) => zones.orders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn([{ name: 'zoneId', referencedColumnName: 'zones_id' }])
    zone: Zones

  @ManyToOne(() => Reserves, (reserves) => reserves.orders, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn([{ name: 'reserveId', referencedColumnName: 'reserves_id' }])
    reserve: Reserves
}
