import { Reviews } from './Reviews';
import { Users } from './Users';
import { Zones } from './Zones';
export declare enum SpaceType {
    MANUALLY = 0,
    AUTOMATICALLY = 1
}
export declare enum SpaceStatus {
    PENDING_APPROVE = 0,
    ENABLED = 1,
    DENIED = 2,
    DELETED = 3
}
export declare class Spaces {
    readonly id: number;
    readonly managerId: number;
    readonly manager: Users;
    readonly name: string;
    readonly description?: string;
    readonly lat: number;
    readonly lng: number;
    readonly defaultCost: number;
    readonly type: SpaceType;
    readonly createdAt: Date;
    readonly status: SpaceStatus;
    readonly timeUnit: number;
    readonly childrenZones: Zones[];
    readonly reviews: Reviews[];
}
