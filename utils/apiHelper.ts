import { APIRequestContext, APIResponse, expect } from '@playwright/test';

export class ApiHelper {
    private requestContext: APIRequestContext;
    private readonly baseUrl: string;

    constructor(requestContext: APIRequestContext, baseUrl: string) {
        this.requestContext = requestContext;
        this.baseUrl = baseUrl;
    }

    async post(path: string, data: object): Promise<APIResponse> {
        return await this.requestContext.post(`${this.baseUrl}${path}`, { data });
    }

    async get(path: string): Promise<APIResponse> {
        return await this.requestContext.get(`${this.baseUrl}${path}`);
    }

    async put(path: string, data: object): Promise<APIResponse> {
        return await this.requestContext.put(`${this.baseUrl}${path}`, { data });
    }

    async delete(path: string): Promise<APIResponse> {
        return await this.requestContext.delete(`${this.baseUrl}${path}`);
    }
}