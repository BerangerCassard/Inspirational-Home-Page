import React, { useState, useEffect } from 'react';
import '../index.css';

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
        <div className="">
            {image && (
                <>
                    <img 
                        src={image.urls.regular}
                        alt={`Photo par ${image.user.name}`}
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <p>Photo by : {image.user.name}</p>
                    <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    onClick={handleNewImage}
                    >
                        Charger une nouvelle image
                    </button>
                </>
            )}
        </div>
    );
}

export default RandomImage;