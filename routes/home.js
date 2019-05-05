let secrets = require('../config/secrets_char');

module.exports = function (router) {

    let homeRoute = router.route('/');

    homeRoute.get(function (req, res) {
        let connectionString = secrets.token;
        res.json({ message: 'My connection string is ' + connectionString });
    });

    return router;
};
