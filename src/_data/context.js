module.exports = function() {
    return {
        protocol: process.env.APP_PROTO || 'https',
        path: process.env.APP_PATH || '',
        host: process.env.APP_HOST || 'localhost',
    }
}