import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Cars } from './Cars'
import { Reserves } from './Reserves'

/* eslint-disable no-unused-vars */

export enum UserStatus {
  ENABLED,
  BLOCKED,
  PENDING_DELETE,
  DELETED
}

/* eslint-enable no-unused-vars */

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn({ name: 'users_id' })
  public readonly id: number

  @Column({ name: 'users_login' })
  public readonly login: string

  @Column({ name: 'users_nickname' })
  public readonly nickname: string

  @Column({ name: 'users_password' })
  public readonly password: string

  @Column({ name: 'users_salt' })
  public readonly salt: string

  @Column({ name: 'users_phone' })
  public readonly phone?: string

  @Column({ name: 'users_isverified' })
  public readonly isVerified: boolean

  @Column({ name: 'users_realname' })
  public readonly realname?: string

  @Column({ name: 'users_birth', type: 'date' })
  public readonly birthday?: Date

  @Column({ name: 'users_status' })
  public readonly status: UserStatus

  @Column({ name: 'users_createdat', type: 'timestamp' })
  public readonly createdAt: Date

  @Column({ name: 'users_deleteat', type: 'timestamp' })
  public readonly deleteAt?: Date

  @Column({ name: 'users_point' })
  public readonly point: number

  @OneToMany(() => Cars, (cars) => cars.user)
  public readonly cars: Cars[]

  @OneToMany(() => Reserves, (reserves) => reserves.user)
  public readonly reserves: Reserves[]
}
