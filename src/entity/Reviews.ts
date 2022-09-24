import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Spaces } from './Spaces'
import { Users } from './Users'

@Entity('reviews')
export class Reviews {
  @PrimaryGeneratedColumn({ name: 'reviews_id' })
  public readonly id: number

  @Column({ name: 'reviews_content' })
  public readonly content: string

  @Column({ name: 'reviews_rating' })
  public readonly rating: number

  @Column({ name: 'reviews_created_at' })
  public readonly createdAt: Date

  @Column({ name: 'reviews_deleted_at' })
  public readonly deletedAt: Date

  @Column({ name: 'users_id' })
  public readonly writer: number

  @Column({ name: 'spaces_id' })
  public readonly spaceId: number

  @ManyToOne(() => Users, (user) => user.id, { eager: true })
  @JoinColumn({ name: 'users_id' })
  public readonly user: Users

  @ManyToOne(() => Spaces, (space) => space.id, { eager: true })
  @JoinColumn({ name: 'spaces_id' })
  public readonly space: Spaces
}
