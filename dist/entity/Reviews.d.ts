import { Spaces } from './Spaces';
import { Users } from './Users';
export declare class Reviews {
    readonly id: number;
    readonly content: string;
    readonly rating: number;
    readonly createdAt: Date;
    readonly deletedAt: Date;
    readonly userId: number;
    readonly spaceId: number;
    readonly user: Users;
    readonly space: Spaces;
}
