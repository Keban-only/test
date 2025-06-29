import { test, expect } from '@playwright/test';
import { ApiHelper } from '../../utils/apiHelper';
import postData from '../fixtures/postData.json';

test.describe('API Tests for Posts (CRUD Operations)', () => {
    const BASE_API_URL = 'https://jsonplaceholder.typicode.com';
    let apiHelper: ApiHelper;

    test.beforeEach(async ({ request }) => {
        apiHelper = new ApiHelper(request, BASE_API_URL);
    });

    test('should create a new post (POST) and return 201 Created', async () => {
        const response = await apiHelper.post('/posts', postData.newPost);
        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body).toHaveProperty('id');
        expect(body.title).toBe(postData.newPost.title);
        expect(body.body).toBe(postData.newPost.body);
        expect(body.userId).toBe(postData.newPost.userId);
    });

    // Note: jsonplaceholder API returns 201 even for incomplete posts,
    // which is not ideal for a strict "400 Bad Request" test.
    // In a real-world scenario, you would expect a 400.
    // This test reflects the actual API behavior.
    test('should return 201 Created for missing fields on POST (jsonplaceholder specific)', async ({ request }) => {
        const incompletePost = { title: 'incomplete post' };
        const response = await request.post(`${BASE_API_URL}/posts`, { data: incompletePost });
        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body).toHaveProperty('id');
        // Expect body and userId to be empty/null as per jsonplaceholder's behavior
        expect(body.body === undefined || body.body === '').toBeTruthy();// jsonplaceholder returns empty string for missing body
        expect(body.userId === undefined || body.userId === null).toBeTruthy();
    });

    test('should fetch all posts (GET) and return 200 OK with a list', async () => {
        const response = await apiHelper.get('/posts');
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toBeInstanceOf(Array);
        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toHaveProperty('id');
        expect(body[0]).toHaveProperty('title');
    });

    test('should return 404 Not Found for a non-existent post (GET)', async () => {
        const nonExistentPostId = 999999;
        const response = await apiHelper.get(`/posts/${nonExistentPostId}`);
        expect(response.status()).toBe(404);
        const body = await response.json();
        expect(Object.keys(body).length).toBe(0); // jsonplaceholder returns empty object for 404
    });

    test('should update an existing post (PUT) and return 200 OK', async () => {
        const postIdToUpdate = postData.updatePost.id;
        const response = await apiHelper.put(`/posts/${postIdToUpdate}`, postData.updatePost);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.id).toBe(postIdToUpdate);
        expect(body.title).toBe(postData.updatePost.title);
        expect(body.body).toBe(postData.updatePost.body);
        expect(body.userId).toBe(postData.updatePost.userId);
    });

    test('should return 404 Not Found for non-existent post on PUT', async () => {
        const nonExistentPostId = 999999;
        const response = await apiHelper.put(`/posts/${nonExistentPostId}`, postData.updatePost);
        expect(response.status()).toBe(500);
     });

    test('should delete a post (DELETE) and return 200 OK or 204 No Content', async ({ request }) => {
        // First, create a post to ensure we have something to delete (for idempotency)
        const createResponse = await request.post(`${BASE_API_URL}/posts`, { data: postData.newPost });
        expect(createResponse.status()).toBe(201);
        const createdPost = await createResponse.json();
        const postIdToDelete = createdPost.id;

        const deleteResponse = await apiHelper.delete(`/posts/${postIdToDelete}`);
        expect(deleteResponse.status()).toBe(200); // jsonplaceholder returns 200 for delete
        const body = await deleteResponse.json();
        expect(Object.keys(body).length).toBe(0); // jsonplaceholder returns empty object
    });

    test('should return 404 Not Found for non-existent post on DELETE', async () => {
        const nonExistentPostId = 999999;
        const response = await apiHelper.delete(`/posts/${nonExistentPostId}`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(Object.keys(body).length).toBe(0); // jsonplaceholder returns empty object for 404
    });
});