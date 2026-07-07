import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async(filePath)=>{
    try{
        if(!filePath) return null;
        // Upload the file to Cloudinary
       const result = await cloudinary.uploader.upload(filePath, {resource_type: "auto"}) 
        //uploaded successfully
        console.log("File uploaded to Cloudinary successfully.", result.url);
        return result;
    }
    catch(error){
        fs.unlinkSync(filePath); // Delete the file from local storage if upload fails
        return {error:"Failed to upload file to Cloudinary."};
    }
}

export default uploadToCloudinary;  