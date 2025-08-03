import { v2 as cloudinary } from 'cloudinary';
import { Request } from 'express';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadImage = async (req: Request): Promise<string> => {
  return new Promise((resolve, reject) => {
    const file = req.file;
    if (!file) {
      return reject(new Error('No file uploaded.'));
    }

    cloudinary.uploader.upload_stream((error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result.secure_url);
    }).end(file.buffer);
  });
};