module.exports = function() {
    return {
        path: process.env.APP_PATH || '',
        host: process.env.APP_HOST || '127.0.0.1',
    }
}