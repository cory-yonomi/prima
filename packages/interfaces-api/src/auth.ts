import { Role } from "./role";
import { Tenant } from "./tenant";
import { User } from "./user";

export interface TenantCreateFunction {
    input: {
        displayName: string;
        administrator: string | User;
        roles: string[];
    };
    output: Tenant;
}

export interface TenantLoginFunction {
    input: {
        credentials: {
            tenantName: string;
            hashedPassword: string;
        };
    };
    output: Tenant;
}
