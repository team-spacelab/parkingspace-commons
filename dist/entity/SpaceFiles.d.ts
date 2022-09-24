import { Spaces } from './Spaces';
import { Users } from './Users';
export declare enum SpaceFileType {
    SPACE_PICTURE = 0,
    SPACE_OWNERSHIP_DOCS = 1
}
export declare class SpaceFiles {
    readonly id: number;
    readonly spaceId: number;
    readonly space: Spaces;
    readonly uploaderId: number;
    readonly uploader: Users;
    readonly url: string;
    readonly type: SpaceFileType;
    readonly createdAt: Date;
}
