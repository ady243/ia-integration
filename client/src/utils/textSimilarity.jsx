// Fonction pour tokenizer un texte en mots
export function tokenizeRecipeText(text) {
    return text.toLowerCase().split(/\s+/).filter(word => word.length > 0);
  }
  // Fonction pour calculer la similarité cosinus entre deux listes de mots (vecteurs TF-IDF)
  export function computeSimilarity(tokens1, tokens2) {
    const intersection = tokens1.filter(word => tokens2.includes(word));
    const similarity = intersection.length / Math.sqrt(tokens1.length * tokens2.length);
    return isNaN(similarity) ? 0 : similarity; // Assurez-vous de gérer les cas où la similarité est indéfinie
  }
  