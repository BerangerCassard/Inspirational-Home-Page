import React, { useState, useEffect } from 'react';

function Quote() {
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchQuote = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await fetch('https://api.quotable.io/random', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                },
                mode: 'cors',
            });
            
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            
            const data = await response.json();
            setQuote(data);
            setLoading(false);
        } catch (error) {
            console.error('Erreur lors de la récupération de la citation:', error);
            setError('Impossible de charger la citation. Veuillez réessayer plus tard.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const handleNewQuote = () => {
        fetchQuote();
    };

    if (loading) {
        return (
            <div className="text-center p-4">
                <div className="animate-pulse flex space-x-4 justify-center">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
                <p className="mt-2 text-gray-500">Chargement de la citation...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center p-4 fixed top-0">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Erreur!</strong>
                    <span className="block sm:inline"> {error}</span>
                </div>
                <button 
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                    onClick={handleNewQuote}
                >
                    Réessayer
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
            {quote && (
                <>
                    <blockquote className="text-xl italic font-semibold text-gray-700 mb-4">
                        "{quote.content}"
                    </blockquote>
                    <p className="text-right text-gray-600">— {quote.author}</p>
                    <div className="flex justify-center mt-6">
                        <button 
                            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
                            onClick={handleNewQuote}
                        >
                            Nouvelle citation
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Quote;