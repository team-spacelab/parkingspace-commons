import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Users } from './Users'

/* eslint-disable no-unused-vars */

export enum CarType {
  LIGHTCAR,
  COMPACTCAR,
  SUBCOMPACTCAR,
  MIDSIZECAR,
  SEMILARGECAR,
  LARGECAR
}

/* eslint-enable no-unused-vars */

@Entity('cars')
export class Cars {
  @PrimaryGeneratedColumn({ name: 'cars_id' })
  public readonly id: number

  @Column({ name: 'users_id' })
  public readonly userId: number

  @ManyToOne(() => Users, (user) => user.id, { eager: true })
  @JoinColumn({ name: 'users_id' })
  public readonly user: Users

  @Column({ name: 'cars_num' })
  public readonly num: string

  @Column({ name: 'cars_type' })
  public readonly type: CarType

  @Column({ name: 'cars_alias' })
  public readonly alias: string
}
