import mongoose, { mongo } from "mongoose";
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const conn = async () => {
	try {
		const dbConn = await mongoose.connect(
			`mongodb+srv://${dbUser}:${dbPass}@cluster0.czlle.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
		);
        console.log("Database Connected!");
        return dbConn;
	} catch (error) {
        console.log(error);
    }
};

conn();
module.exports = conn;
