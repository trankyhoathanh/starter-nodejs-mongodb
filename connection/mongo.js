var mongoose = require('mongoose')

const mlabURI = 'mongodb+srv://trankyhoathanh:<your_password>@free-trankyhoathanh-nou5c.gcp.mongodb.net/test'

const mongoConnect = mongoose.connect(mlabURI, 
	{
		useCreateIndex: true,
		useNewUrlParser: true 
	},
	(error) => {
        if (error) {
            console.log("Error " + error);
        } else {
            console.log("Connected to mongodb")
        }
    }
)

module.exports = mongoConnect;