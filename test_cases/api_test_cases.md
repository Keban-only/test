# API Test Cases - JSONPlaceholder Posts

## API Endpoint: `https://jsonplaceholder.typicode.com/posts`

### Test Case 1: Create a New Post (POST) - Success
* **Test Title:** TC-API-001 - POST Create Success
* **Description:** Verifies that a new post can be successfully created with valid data.
* **Preconditions:** API endpoint is accessible.
* **Test Steps:**
    1.  Send a POST request to `/posts` with a valid JSON body (e.g., `{"title": "foo", "body": "bar", "userId": 1}`).
* **Expected Results:**
    * The response status code is `201 Created`.
    * The response body contains the newly created post object, including a generated `id`.
    * The `title`, `body`, and `userId` in the response match the sent data.

### Test Case 2: Create a New Post (POST) - Missing Fields (Bad Request)
* **Test Title:** TC-API-002 - POST Missing Fields
* **Description:** Verifies that the API returns an appropriate error for a POST request with missing required fields.
* **Preconditions:** API endpoint is accessible.
* **Test Steps:**
    1.  Send a POST request to `/posts` with a JSON body missing required fields (e.g., `{"title": "incomplete post"}`).
* **Expected Results:**
    * The response status code is `400 Bad Request`.
    * (Note: JSONPlaceholder specifically returns 201 with empty/null fields for missing data, which is an API quirk. In a real-world scenario, 400 is expected.)

### Test Case 3: Fetch All Posts (GET) - Success
* **Test Title:** TC-API-003 - GET All Posts
* **Description:** Verifies that fetching all posts returns a list of posts.
* **Preconditions:** API endpoint is accessible.
* **Test Steps:**
    1.  Send a GET request to `/posts`.
* **Expected Results:**
    * The response status code is `200 OK`.
    * The response body is an array of post objects.
    * The array is not empty and contains post objects with `id`, `title`, `body`, and `userId` properties.

### Test Case 4: Fetch Non-Existent Post (GET) - Not Found
* **Test Title:** TC-API-004 - GET Non-Existent Post
* **Description:** Verifies that fetching a non-existent post returns a 404 Not Found error.
* **Preconditions:** API endpoint is accessible.
* **Test Steps:**
    1.  Send a GET request to `/posts/{non_existent_id}` (e.g., `/posts/999999`).
* **Expected Results:**
    * The response status code is `404 Not Found`.
    * The response body is empty or indicates a resource not found.

### Test Case 5: Update an Existing Post (PUT) - Success
* **Test Title:** TC-API-005 - PUT Update Success
* **Description:** Verifies that an existing post can be successfully updated with new data.
* **Preconditions:**
    * API endpoint is accessible.
    * A post with a known ID exists.
* **Test Steps:**
    1.  Send a PUT request to `/posts/{existing_id}` with a valid JSON body (e.g., `{"id": 1, "title": "updated title", "body": "updated body", "userId": 1}`).
* **Expected Results:**
    * The response status code is `200 OK`.
    * The response body contains the updated post object.
    * The `title` and `body` in the response match the updated data.

### Test Case 6: Update Non-Existent Post (PUT) - Not Found
* **Test Title:** TC-API-006 - PUT Non-Existent Post
* **Description:** Verifies that attempting to update a non-existent post returns a 404 Not Found error.
* **Preconditions:** API endpoint is accessible.
* **Test Steps:**
    1.  Send a PUT request to `/posts/{non_existent_id}` (e.g., `/posts/999999`) with an update JSON body.
* **Expected Results:**
    * The response status code is `404 Not Found`.
    * The response body is empty or indicates a resource not found.

### Test Case 7: Delete a Post (DELETE) - Success
* **Test Title:** TC-API-007 - DELETE Success
* **Description:** Verifies that an existing post can be successfully deleted.
* **Preconditions:**
    * API endpoint is accessible.
    * A post with a known ID exists (or can be created for idempotency).
* **Test Steps:**
    1.  (Optional for idempotency: Create a new post to ensure it exists for deletion).
    2.  Send a DELETE request to `/posts/{existing_id}` (e.g., `/posts/1`).
* **Expected Results:**
    * The response status code is `200 OK` or `204 No Content`.
    * The response body is empty.

### Test Case 8: Delete Non-Existent Post (DELETE) - Not Found
* **Test Title:** TC-API-008 - DELETE Non-Existent Post
* **Description:** Verifies that attempting to delete a non-existent post returns a 404 Not Found error.
* **Preconditions:** API endpoint is accessible.
* **Test Steps:**
    1.  Send a DELETE request to `/posts/{non_existent_id}` (e.g., `/posts/999999`).
* **Expected Results:**
    * The response status code is `404 Not Found`.
    * The response body is empty or indicates a resource not found.