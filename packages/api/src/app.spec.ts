import app from "./app";
import request from "supertest";

const createTenantInput = {
    userName: "John Doe",
    credentials: {
        email: "email@email.com",
        password: "1",
        password_confirmation: "1",
    },
    orgName: "ABC Graphics",
};

const fakeUser = {
    displayName: "John Doe",
    email: "email@email.com",
    hashedPassword: "password",
    roles: ["admin"],
};

const fakeTenantItem = {
    displayName: "ABC Graphics",
    administrator: fakeUser,
    pubKey: "fake-key",
};

describe("Tenant CRUD", () => {
    describe("Create Tenant", () => {
        it("creates a unique user", async () => {
            const resp = await request(app)
                .post("/signup")
                .send(createTenantInput);
            expect(resp.statusCode).toBe(200);
            expect(resp.body.user).toBe(fakeUser);
        });
    });
});
