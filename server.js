const app = require('./src/app');
const db = require('./src/config/database');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

db.sync().then(() => {
    console.log('✅ Database synced successfully');
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('❌ Failed to sync database:', err);
});