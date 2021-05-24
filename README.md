## Zuri Backend Task - CRUD App with Database
_____
### Documentation
1. This app has one route path and one route parameters 
2. A `post` request to the `/user` route path retrieves the user details in the request body and saves them in the database.
3. A `put` request to the `/user/:id` route parameter retrives the id in the request params, if it matches any id in the database it updates the user data in the database.
4. A `delete` request to the `/user/:id` route parameter deletes the user with the passed id.