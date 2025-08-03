import React, { useState } from 'react';
import { Cloudinary } from 'cloudinary-core';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState('');

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setUploading(true);
        setError('');

        const cloudinary = new Cloudinary({ cloud_name: 'YOUR_CLOUD_NAME' });
        const url = cloudinary.url(file.name, { type: 'upload' });

        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Upload failed');
            }

            const data = await response.json();
            setImage(data.secure_url);
        } catch (err) {
            setError(err.message);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="image-upload">
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {uploading && <p>Uploading...</p>}
            {error && <p className="error">{error}</p>}
            {image && <img src={image} alt="Uploaded" />}
        </div>
    );
};

export default ImageUpload;