import React, { useState, useEffect } from 'react';

function RandomImage() {
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const accessKey = '34m6xGvvYRl6Gs5jsSHZIvkoVZfGUxkZ2WyD96CsE6A';

    const fetchRandomImage = async () => {
        try {
            const response = await fetch('https://api.unsplash.com/photos/random', {
                method: 'GET',
                headers: {
                    'Authorization': `Client-ID ${accessKey}`,
                },
            });
            const data = await response.json();
            setImage(data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchRandomImage();
    }, []);

    return (
        <>
            {error && <div>Error: {error}</div>}
            {!image ? (
                <div>Loading...</div>
            ) : (
                <img 
                    src={image.urls.regular} 
                    alt={image.description || 'Random Image'}
                />
            )}
        </>
    );
}

export default RandomImage;