export interface KeySchema {
    hk: string;
    sk: string;
}

export interface Meta {
    createdAt: string;
    updatedAt: string;
}

export interface Address {
    streetAddress1: string;
    streetAddress2: string;
    city: string;
    state: string;
    zipCode: number;
}
