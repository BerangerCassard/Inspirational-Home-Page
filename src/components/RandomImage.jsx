import React, { useState, useEffect } from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

function RandomImage() {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const accessKey = '34m6xGvvYRl6Gs5jsSHZIvkoVZfGUxkZ2WyD96CsE6A';

    const fetchRandomImage = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api.unsplash.com/photos/random', {
                method: 'GET',
                headers: {
                    'Authorization': `Client-ID ${accessKey}`,
                },
            });
            if (!response.ok) {
                throw new Error('Erreur lors du chargement de l\'image');
            }
            const data = await response.json();
            setImage(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomImage();
    }, []);

    const handleNewImage = () => {
        fetchRandomImage();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w-full">
            {image && (
                <>
                    <img
                        className="w-full h-auto"
                        src={image.urls.regular}
                        alt={`Photo par ${image.user.name}`}
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <div className="flex justify-center mt-4 flex-col items-center">
                    <p className="text-center my-2">Photo by : {image.user.name}</p>
                        <ArrowPathIcon 
                        className="w-8 h-8" 
                        onClick={handleNewImage}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default RandomImage;