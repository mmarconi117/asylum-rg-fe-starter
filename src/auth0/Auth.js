const { auth, requiresAuth } = require('express-openid-connect');

// Function to configure authentication
function configureAuth(app) {
  const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://10.0.0.171:3000',
    clientID: 'JVC5gGxTuUahivqtgGPJHE9FfpJjFfcE',
    issuerBaseURL: 'https://dev-0hi5xg40tti5e21y.us.auth0.com'
  };

  // Attach authentication routes to the app
  app.use(auth(config));
}

// Function to define authentication-related routes
function defineAuthRoutes(app) {
  // Define routes related to authentication
  app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
  });

  app.get('/profile', requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });

  // Add more authentication-related routes as needed
}

// Export functions for use in other files
module.exports = { configureAuth, defineAuthRoutes };
