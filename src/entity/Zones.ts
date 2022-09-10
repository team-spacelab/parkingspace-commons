import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Reserves } from './Reserves'
import { Spaces } from './Spaces'
import { Users } from './Users'

/* eslint-disable no-unused-vars */

export enum ZoneStatus {
  DISABLED,
  ENABLED,
  DELETED
}

/* eslint-enable no-unused-vars */

@Entity()
export class Zones {
  @PrimaryGeneratedColumn({ name: 'zones_id' })
  public readonly id: number

  @Column({ name: 'spaces_id' })
  public readonly spaceId: number

  @ManyToOne(() => Spaces, (space) => space.id)
  @JoinColumn({ name: 'spaces_id' })
  public readonly parentSpace: Spaces

  @Column({ name: 'users_id' })
  public readonly managerId: number

  @ManyToOne(() => Users, (user) => user.id)
  @JoinColumn({ name: 'users_id' })
  public readonly manager: Users

  @Column({ name: 'zones_name' })
  public readonly name: string

  @Column({ name: 'zones_cost' })
  public readonly costDiffrence?: number

  @Column({ name: 'zones_status' })
  public readonly status: ZoneStatus

  @OneToMany(() => Reserves, (reserve) => reserve.zone)
  public readonly reserves: Reserves[]
}
