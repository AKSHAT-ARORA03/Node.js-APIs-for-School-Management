# School Management APIs

## Setup Instructions
1. Clone the repository
2. Install dependencies: `npm install`
3. Setup MySQL database and update `.env` file
4. Create database and table using provided SQL
5. Start the server: `npm start`

## API Endpoints
1. POST /api/addSchool
   - Payload: { name, address, latitude, longitude }
2. GET /api/listSchools?latitude={lat}&longitude={lon}

## Postman Testing
1. Import postman_collection.json
2. Update baseUrl variable if needed
3. Test both endpoints with provided example requests