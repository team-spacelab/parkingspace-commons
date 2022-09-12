import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Users } from './Users'
import { Zones } from './Zones'

/* eslint-disable no-unused-vars */

export enum SpaceType {
  MANUALLY,
  AUTOMATICALLY
}

export enum SpaceStatus {
  PENDING_APPROVE,
  ENABLED,
  DENIED,
  DELETED
}

/* eslint-enable no-unused-vars */

@Entity()
export class Spaces {
  @PrimaryGeneratedColumn({ name: 'spaces_id' })
  public readonly id: number

  @Column({ name: 'users_id' })
  public readonly managerId: number

  @ManyToOne(() => Users, (user) => user.id, { eager: true })
  @JoinColumn({ name: 'users_id' })
  public readonly manager: Users

  @Column({ name: 'spaces_name' })
  public readonly name: string

  @Column({ name: 'spaces_description' })
  public readonly description?: string

  @Column({ name: 'spaces_lat' })
  public readonly lat: number

  @Column({ name: 'spaces_lng' })
  public readonly lng: number

  @Column({ name: 'spaces_default_cost' })
  public readonly defaultCost: number

  @Column({ name: 'spaces_type' })
  public readonly type: SpaceType

  @Column({ name: 'spaces_createdat', type: 'timestamp' })
  public readonly createdAt: Date

  @Column({ name: 'spaces_status' })
  public readonly status: SpaceStatus

  @Column({ name: 'spaces_unit' })
  public readonly timeUnit: number

  @OneToMany(() => Zones, (zone) => zone.parentSpace)
  @JoinColumn({ name: 'spaces_id' })
  public readonly childrenZones: Zones[]
}
