import { Orders } from './Orders';
import { Reserves } from './Reserves';
import { Spaces } from './Spaces';
import { Users } from './Users';
export declare enum ZoneStatus {
    DISABLED = 0,
    ENABLED = 1,
    DELETED = 2
}
export declare class Zones {
    readonly id: number;
    readonly spaceId: number;
    readonly parentSpace: Spaces;
    readonly managerId: number;
    readonly manager: Users;
    readonly costDiffrence?: number;
    readonly status: ZoneStatus;
    readonly reserves: Reserves[];
    readonly orders: Orders[];
}
