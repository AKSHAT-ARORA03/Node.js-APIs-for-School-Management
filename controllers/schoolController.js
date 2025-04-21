const connectDB = require('../config/db');
const calculateDistance = require('../utils/distance');

// Add a new school
exports.addSchool = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;

        // Validate input
        if (!name || !address || typeof latitude !== 'number' || typeof longitude !== 'number') {
            return res.status(400).json({ error: 'All fields are required and latitude/longitude must be numbers' });
        }

        // Connect to database
        const connection = await connectDB();

        // Insert school into database
        const [result] = await connection.query(
            'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
            [name, address, latitude, longitude]
        );

        // Close connection
        await connection.end();

        res.status(201).json({ message: 'School added successfully', id: result.insertId });
    } catch (error) {
        console.error('Error adding school:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// List schools sorted by proximity
exports.listSchools = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;

        // Validate input
        if (!latitude || !longitude) {
            return res.status(400).json({ error: 'Latitude and longitude are required' });
        }

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        if (isNaN(userLat) || isNaN(userLon)) {
            return res.status(400).json({ error: 'Invalid latitude or longitude' });
        }

        // Connect to database
        const connection = await connectDB();

        // Fetch all schools
        const [schools] = await connection.query('SELECT * FROM schools');

        // Calculate distances and sort
        const schoolsWithDistance = schools.map(school => ({
            ...school,
            distance: calculateDistance(userLat, userLon, school.latitude, school.longitude)
        }));

        // Sort by distance
        schoolsWithDistance.sort((a, b) => a.distance - b.distance);

        // Close connection
        await connection.end();

        res.status(200).json(schoolsWithDistance);
    } catch (error) {
        console.error('Error listing schools:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};