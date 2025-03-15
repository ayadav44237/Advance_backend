import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

import { v2 as cloudinary } from 'cloudinary';



    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY 
    });
    
    // Upload an image
     const uploadCloudinary= async (localFilePAth)=>{
        try {
            if(!localFilePAth) return null;
            const response= await cloudinary.uploader.upload(localFilePAth,{
                resource_type:"auto"
            })
    //file has been uploaded successfully
     console.log("file has been uploaded successfully",response.url);
             return response;
        } catch (error) {
            fs.unlinkSync(localFilePAth) //remove the locally saved temporary file as the upload operation got failed.
            return null;
        }
     }
    
     export{ uploadCloudinary};