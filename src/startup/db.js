const mongoose = require('mongoose');

module.exports = function() {
    console.log("Connecting to MongoDB...")
    mongoose.set('useCreateIndex', true)
    mongoose.connect('mongodb://mongo:27017/xuver', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB...'))
        .catch((err) => console.error('Could not connect to MongoDB...'));
}
