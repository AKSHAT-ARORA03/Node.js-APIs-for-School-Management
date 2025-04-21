const connection = require('../config/db');
const validator = require('validator');
const { calculateDistance } = require('../utils/distance');

exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Input validation
    if (!name || validator.isEmpty(name.trim())) {
        return res.status(400).json({ error: 'Name is required' });
    }
    if (!address || validator.isEmpty(address.trim())) {
        return res.status(400).json({ error: 'Address is required' });
    }
    if (!latitude || !validator.isFloat(latitude.toString(), { min: -90, max: 90 })) {
        return res.status(400).json({ error: 'Valid latitude is required (-90 to 90)' });
    }
    if (!longitude || !validator.isFloat(longitude.toString(), { min: -180, max: 180 })) {
        return res.status(400).json({ error: 'Valid longitude is required (-180 to 180)' });
    }

    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    connection.query(query, [name.trim(), address.trim(), latitude, longitude], (err, results) => {
        if (err) {
            console.error('Error inserting school:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'School added successfully', id: results.insertId });
    });
};

exports.listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    // Validate query parameters
    if (!latitude || !validator.isFloat(latitude.toString(), { min: -90, max: 90 })) {
        return res.status(400).json({ error: 'Valid latitude is required (-90 to 90)' });
    }
    if (!longitude || !validator.isFloat(longitude.toString(), { min: -180, max: 180 })) {
        return res.status(400).json({ error: 'Valid longitude is required (-180 to 180)' });
    }

    const query = 'SELECT * FROM schools';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching schools:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        // Calculate distance and sort
        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);
        
        const schoolsWithDistance = results.map(school => ({
            ...school,
            distance: calculateDistance(userLat, userLon, school.latitude, school.longitude)
        }));

        // Sort by distance
        schoolsWithDistance.sort((a, b) => a.distance - b.distance);

        res.json(schoolsWithDistance);
    });
};