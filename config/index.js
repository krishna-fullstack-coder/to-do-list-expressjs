var configValues = require('./config');

module.exports = {
    // can read username, pwd from config file
    getDbConnectionString: function() {
        // get the string by logging in to mlab
        return 'mongodb+srv://test:test@cluster0.bohfi.mongodb.net/todolist?retryWrites=true&w=majority';

        // todolist is our db. Will be created automatically
    }
    
}