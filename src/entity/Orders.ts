import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
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
  @PrimaryColumn({ name: 'orders_id', length: 36, type: 'varchar' })
  public readonly id: string

  @Column({ name: 'users_id' })
  public readonly userId: number

  @ManyToOne(() => Users, (user) => user.id, { eager: true })
  @JoinColumn({ name: 'users_id' })
  public readonly user: Users

  @Column({ name: 'cars_id' })
  public readonly carId: number

  @ManyToOne(() => Cars, (car) => car.id, { eager: true })
  @JoinColumn({ name: 'cars_id' })
  public readonly car: Cars

  @Column({ name: 'zones_id' })
  public readonly zoneId: number

  @ManyToOne(() => Zones, (zone) => zone.id, { eager: true })
  @JoinColumn({ name: 'zones_id' })
  public readonly zone: Zones

  @Column({ name: 'reserves_id' })
  public readonly reserveId: number

  @ManyToOne(() => Reserves, (reserve) => reserve.id, { eager: true })
  @JoinColumn({ name: 'reserves_id' })
  public readonly reserve: Reserves

  @Column({ name: 'orders_method' })
  public readonly method: MethodType

  @Column({ name: 'orders_amout' })
  public readonly amount: number

  @Column({ name: 'orders_status' })
  public readonly status: OrderStatus

  @Column({ name: 'orders_createdat', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  public readonly createdAt: Date

  @Column({ name: 'orders_point' })
  public readonly point: number

  @Column({ name: 'orders_receipt', length: 256, nullable: true })
  public readonly receipt: string
}
