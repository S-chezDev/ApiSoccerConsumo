import dotenv from 'dotenv';

// Load environment variables before importing other modules
dotenv.config();

// Import app after dotenv has populated process.env
const { default: app } = await import('./app.js');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});