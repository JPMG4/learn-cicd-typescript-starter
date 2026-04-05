import { IncomingHttpHeaders } from "http";
import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";
const emptyHeaders: IncomingHttpHeaders = {};

const person = {
    isActive: true,
    age: 32,
};

describe("person", () => {
    test("person is defined", () => {
        expect(person).toBeDefined();
    });

    test("is active", () => {
        expect(person.isActive).toBeTruthy();
    });
});

const headers = {
    authorization: "ApiKey 12345"
};

describe("getAPIKey", () => {
    test("returns the correct API key", () => {
    const apiKey = getAPIKey(headers);
    expect(apiKey).toBe("12345");
    });
});

describe("getAPIKey with empty headers", () => {
    test("returns null when authorization header is missing", () => {
    const apiKey = getAPIKey(emptyHeaders);
    expect(apiKey).toBeNull();
    });
});

const invalidHeaders = {
    authorization: "Bearer 12345"
};

describe("getAPIKey with invalid headers", () => {
    test("returns null when authorization header is not in the correct format", () => {
    const apiKey = getAPIKey(invalidHeaders);
    expect(apiKey).toBeNull();
    });
});