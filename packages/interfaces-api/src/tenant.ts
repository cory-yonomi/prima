import { User } from "./user";
import { Role } from "./role";
import { Address, KeySchema, Meta } from "./item";

export interface Tenant {
    id: string;
    displayName: string;
    address?: Address;
    admininstrator: User;
    subAdmins: User[];
    roles: Role[];
}

export interface TenantItem extends Tenant {
    key: KeySchema;
    meta: Meta;
}
