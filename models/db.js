const mongoose = require('mongoose');
const uri = "mongodb://user2:User12345@cluster0.w4ruk.mongodb.net/Contacts";
mongoose.connect(uri, { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./contact.model');