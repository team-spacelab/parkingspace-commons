import { Users } from './Users';
import { Cars } from './Cars';
import { Zones } from './Zones';
import { Reserves } from './Reserves';
export declare enum MethodType {
    '카드' = 0,
    '계좌이체' = 1
}
export declare enum OrderStatus {
    READY = 0,
    IN_PROGRESS = 1,
    WAITING_FOR_DEPOSIT = 2,
    DONE = 3,
    CANCELED = 4,
    PARTIAL_CANCELED = 5,
    ABORTED = 6,
    EXPIRED = 7
}
export declare class Orders {
    readonly id: string;
    readonly userId: number;
    readonly user: Users;
    readonly carId: number;
    readonly car: Cars;
    readonly zoneId: number;
    readonly zone: Zones;
    readonly reserveId: number;
    readonly reserve: Reserves;
    readonly method: MethodType;
    readonly amount: number;
    readonly status: OrderStatus;
    readonly createdAt: Date;
    readonly point: number;
    readonly receipt: string;
}
