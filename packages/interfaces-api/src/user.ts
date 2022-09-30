import { Role } from "./role";
import { KeySchema, Meta } from "./item";

export interface User {
    displayName: string;
    id: string;
    email: string;
    roles: Role[];
}

export interface UserItem extends User {
    key: KeySchema;
    meta: Meta;
    hashedPassword: string;
}

export interface UserLoginFunction {
    input: {
        email: string;
        hashedPassword: string;
    };
    output: User;
}
