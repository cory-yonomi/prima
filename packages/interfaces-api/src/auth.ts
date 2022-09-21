export interface KeySchema {
    hk: string;
    sk: string;
}

export interface Meta {
    createdAt: string;
    updatedAt: string;
}

export interface User {
    displayName: string;
    email: string;
    hashedPassword: string;
    roles: string[];
}

export interface UserItem extends User {
    key: KeySchema;
    meta: Meta;
}

export interface UserLoginRequest {
    email: string;
    hashedPassword: string;
}
