import React, { useState } from "react";
import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import "../../pages/DashboardPage/Dashboard.css";
import api from '../../services/api.js'

const RegisterItem = ( ) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        photo: null,
        type: 'perdido',
        category: '',
        user: ''
    });
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    async function getItems(){
      // Substitua pelo Back-end real :
      await api.get(`${BASE_URL}/items`);
      console.log("Passou por aqui!")
    }
  
    React.useEffect(()=> {
      getItems()
    },[])

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // SUbstitua pelo Back-end real:
        await axios.post(`${BASE_URL}/items`, formData);
        alert('Item cadastrado com sucesso!');
        // Reset form after submission
        setFormData({
          title: '',
          description: '',
          date: '',
          location: '',
          photo: null,
          type: 'perdido',
          category: '',
          user: ''
        });
      } catch (error) {
        console.error('Error adding item:', error);
        alert('Erro ao cadastrar item')
      }
    };

    return (
        <section className="register-section">
            <h2>Cadastrar Item Perdido</h2>
            
            <form onSubmit={handleSubmit}>
              <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Título" required />
              <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Descrição" rows="1" required />
              <input type="date" name="date" value={formData.data} onChange={handleChange} required />
              <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Local" required />
              <input type="file" name="photo" accept="image/*"  onChange={handleChange} placeholder="Foto" />
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="perdido">Perdido</option>
                <option value="encontrado">Encontrado</option>
              </select>
              <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Categoria" required />
              <button type="submit">Cadastrar</button>
          </form>

        </section>
    );
};

export default RegisterItem;
