import React, { useState } from 'react';

const SEOPanel = () => {
    const [metaTitle, setMetaTitle] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [slug, setSlug] = useState('');

    const handleSave = () => {
        // Logic to save SEO settings
        console.log('SEO settings saved:', { metaTitle, metaDescription, slug });
    };

    return (
        <div className="seo-panel">
            <h2>SEO Panel</h2>
            <div className="seo-input">
                <label htmlFor="metaTitle">Meta Title:</label>
                <input
                    type="text"
                    id="metaTitle"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                />
            </div>
            <div className="seo-input">
                <label htmlFor="metaDescription">Meta Description:</label>
                <textarea
                    id="metaDescription"
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                />
            </div>
            <div className="seo-input">
                <label htmlFor="slug">Slug:</label>
                <input
                    type="text"
                    id="slug"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                />
            </div>
            <button onClick={handleSave}>Save SEO Settings</button>
        </div>
    );
};

export default SEOPanel;