export declare enum UserStatus {
    ENABLED = 0,
    BLOCKED = 1,
    PENDING_DELETE = 2,
    DELETED = 3
}
export declare class Users {
    readonly id: number;
    readonly login: string;
    readonly nickname: string;
    readonly password: string;
    readonly salt: string;
    readonly phone?: string;
    readonly isVerified: boolean;
    readonly realname?: string;
    readonly birthday?: Date;
    readonly status: UserStatus;
    readonly createdAt: Date;
    readonly deleteAt?: Date;
    readonly point: number;
}
