import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({path: ".env"});

connectDB()
.then(()=>{
    app.on("error",(err)=>{
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    });
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
})
.catch((error)=>{
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
})




