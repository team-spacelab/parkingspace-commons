import { Users } from './Users';
export declare enum CarType {
    LIGHTCAR = 0,
    COMPACTCAR = 1,
    SUBCOMPACTCAR = 2,
    MIDSIZECAR = 3,
    SEMILARGECAR = 4,
    LARGECAR = 5
}
export declare enum CarStatus {
    AVALIABLE = 0,
    DELETED = 1
}
export declare class Cars {
    readonly id: number;
    readonly userId: number;
    readonly user: Users;
    readonly num: string;
    readonly type: CarType;
    readonly alias: string;
    readonly status: CarStatus;
}
