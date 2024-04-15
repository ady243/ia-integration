import React, { useState } from 'react';

const AddRecipeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null // Nous allons stocker le fichier d'image ici
  });

  // Gérer les changements dans les champs du formulaire
  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  // Soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envoyer les données du formulaire au parent pour traitement
    // Réinitialiser le formulaire après soumission si nécessaire
    setFormData({ name: '', description: '', image: null });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom de la recette:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Ajouter la recette</button>
    </form>
  );
};

export default AddRecipeForm;
