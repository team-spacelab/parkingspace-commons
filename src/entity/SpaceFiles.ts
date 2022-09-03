import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Spaces } from './Spaces'
import { Users } from './Users'

/* eslint-disable no-unused-vars */

export enum SpaceFileType {
  SPACE_PICTURE,
  SPACE_OWNERSHIP_DOCS
}

/* eslint-enable no-unused-vars */

@Entity('spacefiles')
export class SpaceFiles {
  @PrimaryGeneratedColumn({ name: 'spacefiles_id' })
  public readonly id: number

  @Column({ name: 'spaces_id' })
  public readonly spaceId: number

  @ManyToOne(() => Spaces, (space) => space.id, { eager: true })
  @JoinColumn({ name: 'spaces_id' })
  public readonly space: Spaces

  @Column({ name: 'users_id' })
  public readonly uploaderId: number

  @ManyToOne(() => Users, (user) => user.id, { eager: true })
  @JoinColumn({ name: 'users_id' })
  public readonly uploader: Users

  @Column({ name: 'spacefiles_type' })
  public readonly type: SpaceFileType

  @Column({ name: 'spacefiles_createdat', type: 'timestamp' })
  public readonly createdAt: Date
}
