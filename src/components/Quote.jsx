import React, { useState, useEffect } from 'react';

/**
 * Composant Quote - Affiche une citation aléatoire
 * 
 * Ce composant récupère une citation depuis une API et l'affiche.
 * Il gère également les états de chargement et d'erreur.
 */
function Quote() {
    // États pour gérer la citation, le chargement et les erreurs
    const [quote, setQuote] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Récupère une citation aléatoire depuis l'API
     */
    const fetchQuote = async () => {
        try {
            // Réinitialiser les états avant de commencer
            setLoading(true);
            setError(null);
            
            // Utiliser l'API quotable.io qui autorise les requêtes CORS
            const response = await fetch('https://api.quotable.io/random');
            
            // Vérifier si la réponse est valide
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            
            // Traiter la réponse
            const data = await response.json();
            
            // Adapter le format de l'API quotable.io
            const formattedQuote = {
                content: data.content,
                author: data.author
            };
            
            setQuote(formattedQuote);
            setLoading(false);
        } catch (error) {
            // Gérer les erreurs
            console.error('Erreur lors de la récupération de la citation:', error);
            setError('Impossible de charger la citation. Veuillez réessayer plus tard.');
            setLoading(false);
        }
    };

    // Charger une citation au montage du composant
    useEffect(() => {
        fetchQuote();
    }, []);

    /**
     * Gestionnaire pour charger une nouvelle citation
     */
    const handleNewQuote = () => {
        fetchQuote();
    };

    // Afficher un indicateur de chargement
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

    // Afficher un message d'erreur si nécessaire
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

    // Afficher la citation
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md my-8">
            {quote && (
                <>
                    {/* Affichage de la citation */}
                    <blockquote className="text-xl italic font-semibold text-gray-700 mb-4">
                        "{quote.content}"
                    </blockquote>
                    {/* Affichage de l'auteur */}
                    <p className="text-right text-gray-600">— {quote.author}</p>
                    {/* Bouton pour charger une nouvelle citation */}
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