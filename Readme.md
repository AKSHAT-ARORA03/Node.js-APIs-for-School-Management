# 📮 School Management API

## API Endpoints

### 1. `POST /api/addSchool`

- **Description**: Add a new school.
- **Request Body**:

```json
{
  "name": "Test School",
  "address": "123 Main St",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

- **Response**:

```json
{
  "message": "School added successfully",
  "id": 1
}
```

---

### 2. `GET /api/listSchools?latitude=40.7128&longitude=-74.0060`

- **Description**: Get all schools sorted by proximity to the provided coordinates.

- **Response**:

```json
[
  {
    "id": 1,
    "name": "Test School",
    "address": "123 Main St",
    "latitude": 40.7128,
    "longitude": -74.0060,
    "distance": 0
  }
]
```

---

## 🧪 Testing with Postman

- **Postman Collection**: Download Collection
- **Setup Instructions**:
  - Import the `.json` file in Postman.
  - Set `baseUrl` variable to:

```arduino
https://school-management-api-5mq9.onrender.com
```

- Test both endpoints.

---

## 🛠️ Project Setup (Local)

### 🔧 Prerequisites

- Node.js v16+
- TiDB Cloud Account
- Postman
- Git

---

### 🧰 Installation

```bash
git clone https://github.com/AKSHAT-ARORA03/Node.js-APIs-for-School-Management.git
cd school-management-api
npm install
```

---

### ⚙️ Environment Variables

Create a `.env` file based on `.env.example`:

```env
DB_HOST=your-tidb-host
DB_USER=your-tidb-username
DB_PASSWORD=your-tidb-password
DB_NAME=school_management
DB_PORT=4000
PORT=3000
```

---

### 🗄️ Database Setup

Use `schema.sql` to create the database and table:

```sql
CREATE DATABASE school_management;
USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

Connect using MySQL CLI:

```bash
mysql -h <your_host> -u <your_user> -p -P 4000
```

---

### ▶️ Run the Server

```bash
npm start
```

- Server: `http://localhost:3000`

- Console should show:

```pgsql
Connected to MySQL database
Server running on port 3000
```

---

## 📁 File Structure

```
school-management-api/
├── config/                # DB connection config
│   └── db.js
├── controllers/           # API logic
│   └── schoolController.js
├── routes/                # Routes
│   └── schoolRoutes.js
├── utils/                 # Utility functions
│   └── distance.js        # Haversine formula
├── .env.example
├── schema.sql
├── package.json
├── server.js
└── postman_collection.json
```

---

## 🧠 Distance Calculation (Haversine)

**utils/distance.js**:

```javascript
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
module.exports = calculateDistance;
```

---

## 🧾 Deployment

- **Platform**: Render (Free Tier)
- **Live URL**: [https://school-management-api-5mq9.onrender.com](https://school-management-api-5mq9.onrender.com)

### Env Vars on Render:

```env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=school_management
DB_PORT=4000
PORT=3000
```

- **Build Command**: `npm install`
- **Start Command**: `npm start`

> ⚠️ Note: Render free tier may take 10–30 seconds to wake up.

---

## 🧯 Troubleshooting

### ❌ API Error: Table doesn't exist

Re-run:

```sql
CREATE DATABASE school_management;
USE school_management;
CREATE TABLE schools (...);
```

---

### ❌ 500 Internal Server Error

- Check `distance.js` file exists and exported.
- Ensure environment variables are set.
- Check Render logs for DB errors.

---

### ❌ Postman Issues

Use `cURL` to verify:

```bash
curl -X POST https://school-management-api-5mq9.onrender.com/api/addSchool \
  -H "Content-Type: application/json" \
  -d '{"name":"Test School","address":"123 Main St","latitude":40.7128,"longitude":-74.0060}'
```

---

## 📦 Deliverables

✅ GitHub Code: [View Repository](https://github.com/AKSHAT-ARORA03/Node.js-APIs-for-School-Management)  
✅ Live API: [Render Deployment](https://school-management-api-5mq9.onrender.com)  
✅ Postman Collection: Download JSON

---

## 📬 Contact

For questions or feedback, reach out via GitHub Issues or connect on [LinkedIn](# 📮 School Management API

## API Endpoints

### 1. `POST /api/addSchool`

- **Description**: Add a new school.
- **Request Body**:

```json
{
  "name": "Test School",
  "address": "123 Main St",
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

- **Response**:

```json
{
  "message": "School added successfully",
  "id": 1
}
```

---

### 2. `GET /api/listSchools?latitude=40.7128&longitude=-74.0060`

- **Description**: Get all schools sorted by proximity to the provided coordinates.

- **Response**:

```json
[
  {
    "id": 1,
    "name": "Test School",
    "address": "123 Main St",
    "latitude": 40.7128,
    "longitude": -74.0060,
    "distance": 0
  }
]
```

---

## 🧪 Testing with Postman

- **Postman Collection**: Download Collection
- **Setup Instructions**:
  - Import the `.json` file in Postman.
  - Set `baseUrl` variable to:

```arduino
https://school-management-api-5mq9.onrender.com
```

- Test both endpoints.

---

## 🛠️ Project Setup (Local)

### 🔧 Prerequisites

- Node.js v16+
- TiDB Cloud Account
- Postman
- Git

---

### 🧰 Installation

```bash
git clone https://github.com/AKSHAT-ARORA03/Node.js-APIs-for-School-Management.git
cd school-management-api
npm install
```

---

### ⚙️ Environment Variables

Create a `.env` file based on `.env.example`:

```env
DB_HOST=your-tidb-host
DB_USER=your-tidb-username
DB_PASSWORD=your-tidb-password
DB_NAME=school_management
DB_PORT=4000
PORT=3000
```

---

### 🗄️ Database Setup

Use `schema.sql` to create the database and table:

```sql
CREATE DATABASE school_management;
USE school_management;

CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
```

Connect using MySQL CLI:

```bash
mysql -h <your_host> -u <your_user> -p -P 4000
```

---

### ▶️ Run the Server

```bash
npm start
```

- Server: `http://localhost:3000`

- Console should show:

```pgsql
Connected to MySQL database
Server running on port 3000
```

---

## 📁 File Structure

```
school-management-api/
├── config/                # DB connection config
│   └── db.js
├── controllers/           # API logic
│   └── schoolController.js
├── routes/                # Routes
│   └── schoolRoutes.js
├── utils/                 # Utility functions
│   └── distance.js        # Haversine formula
├── .env.example
├── schema.sql
├── package.json
├── server.js
└── postman_collection.json
```

---

## 🧠 Distance Calculation (Haversine)

**utils/distance.js**:

```javascript
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
module.exports = calculateDistance;
```

---

## 🧾 Deployment

- **Platform**: Render (Free Tier)
- **Live URL**: [https://school-management-api-5mq9.onrender.com](https://school-management-api-5mq9.onrender.com)

### Env Vars on Render:

```env
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=school_management
DB_PORT=4000
PORT=3000
```

- **Build Command**: `npm install`
- **Start Command**: `npm start`

> ⚠️ Note: Render free tier may take 10–30 seconds to wake up.

---

## 🧯 Troubleshooting

### ❌ API Error: Table doesn't exist

Re-run:

```sql
CREATE DATABASE school_management;
USE school_management;
CREATE TABLE schools (...);
```

---

### ❌ 500 Internal Server Error

- Check `distance.js` file exists and exported.
- Ensure environment variables are set.
- Check Render logs for DB errors.

---

### ❌ Postman Issues

Use `cURL` to verify:

```bash
curl -X POST https://school-management-api-5mq9.onrender.com/api/addSchool \
  -H "Content-Type: application/json" \
  -d '{"name":"Test School","address":"123 Main St","latitude":40.7128,"longitude":-74.0060}'
```

---

## 📦 Deliverables

✅ GitHub Code: [View Repository](https://github.com/AKSHAT-ARORA03/Node.js-APIs-for-School-Management)  
✅ Live API: [Render Deployment](https://school-management-api-5mq9.onrender.com)  
✅ Postman Collection: Download JSON

---

## 📬 Contact

For questions or feedback, reach out via GitHub Issues, connect on [LinkedIn](https://www.linkedin.com/in/akshat-arora-623796191/), or email at **akshatarora1299@gmail.com**

---

