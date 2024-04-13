// utils/textSimilarity.js

// Fonction pour tokenizer un texte en mots
export function tokenizeRecipeText(text) {
    // Implémentez la logique de tokenization appropriée ici
    // Par exemple, diviser le texte en mots, supprimer la ponctuation, etc.
    return text.toLowerCase().split(/\s+/).filter(word => word.length > 0);
  }
  
  // Fonction pour calculer la similarité cosinus entre deux listes de mots (vecteurs TF-IDF)
  export function computeSimilarity(tokens1, tokens2) {
    // Implémentez le calcul de similarité cosinus entre les deux vecteurs de mots
    // Vous devrez utiliser TF-IDF ou une autre méthode appropriée pour obtenir les vecteurs
    // Retournez une valeur de similarité entre 0 et 1 (0 = pas similaire du tout, 1 = très similaire)
    const intersection = tokens1.filter(word => tokens2.includes(word));
    const similarity = intersection.length / Math.sqrt(tokens1.length * tokens2.length);
    return isNaN(similarity) ? 0 : similarity; // Assurez-vous de gérer les cas où la similarité est indéfinie
  }
  