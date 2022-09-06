import {
  Column,
  Entity,
  Index,
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

@Entity('orders', { schema: 'parkingspace' })
export class Orders {
  @PrimaryGeneratedColumn({ type: 'int', name: 'orders_id', unsigned: true })
    id: number

  @Column('int', { name: 'orders_amount', unsigned: true })
    amount: number

  @Column('int', { name: 'orders_point', unsigned: true })
    point: number

  @Column('int', { name: 'orders_method', unsigned: true })
    method: MethodType

  @Column('varchar', { name: 'orders_receipt', nullable: true, length: 256 })
    ordersReceipt: string | null

  @Column('int', {
    name: 'orders_status',
    default: () => '0'
  })
    ordersStatus: OrderStatus

  @ManyToOne(() => Users, (users) => users.id, { eager: true })
  @JoinColumn({ name: 'users_id' })
    userId: Users

  @ManyToOne(() => Cars, (cars) => cars.id, { eager: true })
  @JoinColumn({ name: 'cars_id' })
    carId: Cars

  @ManyToOne(() => Zones, (zones) => zones.id, { eager: true })
  @JoinColumn({ name: 'zones_id' })
    zoneId: Zones

  @ManyToOne(() => Reserves, (reserves) => reserves.id, { eager: true })
  @JoinColumn({ name: 'reserves_id' })
    reserveId: Reserves
}
