const cors_proxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';

// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['Origin', 'X-Requested-With'],
    removeHeaders: ['Cookie', 'Cookie2']
}).listen(port, host);
