import { Zones } from './Zones';
import { Users } from './Users';
import { Orders } from './Orders';
export declare enum ReserveStatus {
    RESERVED = 0,
    WAITING = 1,
    CANCELED = 2
}
export declare class Reserves {
    readonly id: number;
    readonly zoneId: number;
    readonly zone: Zones;
    readonly userId: number;
    readonly user: Users;
    readonly startAt: Date;
    readonly endAt: Date;
    readonly status: ReserveStatus;
    readonly orders: Orders[];
}
