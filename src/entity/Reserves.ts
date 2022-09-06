import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Zones } from './Zones'
import { Users } from './Users'

@Entity('reserves', { schema: 'parkingspace' })
export class Reserves {
  @PrimaryGeneratedColumn({ type: 'int', name: 'reserves_id', unsigned: true })
    id: number

  @Column('timestamp', {
    name: 'reserves_startat',
    default: () => 'CURRENT_TIMESTAMP'
  })
    startat: Date

  @Column('timestamp', {
    name: 'reserves_endat',
    default: () => "'0000-00-00 00:00:00'"
  })
    endat: Date

  @Column('int', { name: 'reserves_status', default: () => "'0'" })
    status: number

  @ManyToOne(() => Zones, (zones) => zones.id, { eager: true })
  @JoinColumn([{ name: 'zones_id' }])
    zoneId: Zones

  @ManyToOne(() => Users, (users) => users.id, { eager: true })
  @JoinColumn([{ name: 'users_id' }])
    userId: Users
}
