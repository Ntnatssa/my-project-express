const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    if (token === 'senha123') {
        console.log('User authenticated successfully:', token);
        next();
    } else {
        res.status(403).json({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;