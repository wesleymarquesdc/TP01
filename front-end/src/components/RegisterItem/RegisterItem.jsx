import React, { useState } from "react";
import "../../pages/DashboardPage/Dashboard.css";
import SubmitButton from "../Button/SubmitButton.jsx";
import SelectCategory from "../SelectCategory/SelectCategory.jsx";
import { saveItemToDB } from "../../firebase/db.jsx";

const RegisterItem = ( ) => {
    const [item, setItem] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        // photo: null,
        type: 'perdido',
        category: '',
        // user: ''
    });
    const [error, setError] = useState("");

    // datas mínimas e máximas
    const minDate = "1927-09-07";
    const maxDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setItem(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!item.category) {
        setError("Por favor, selecione uma categoria.");
        return;
      }

      const id = await saveItemToDB(item);
      if (id) {
        setError('')
        alert('Item cadastrado com sucesso!');
        setItem({
          title: '',
          description: '',
          date: '',
          location: '',
          // photo: null,
          type: 'perdido',
          category: '',
          // user: ''
        });
      } else {
        alert('Erro ao cadastrar item')
      }
    };

    return (
        <section className="register-section">
            <h2>Cadastrar Item Perdido</h2>
            
            <form onSubmit={handleSubmit}>

              <input type="text" 
              name="title" 
              value={item.title} 
              onChange={handleChange} 
              placeholder="Título" 
              required />

              <textarea name="description" 
              value={item.description} 
              onChange={handleChange} 
              placeholder="Descrição" 
              rows="1" 
              required />

              <input type="date" 
              name="date" 
              value={item.date} 
              onChange={handleChange} 
              min={minDate} 
              max={maxDate} 
              required />

              <input type="text" 
              name="location" 
              value={item.location} 
              onChange={handleChange} 
              placeholder="Local" 
              required />

              {/* <input type="file" 
              name="photo" 
              accept="image/*"  
              onChange={handleChange} 
              placeholder="Foto" /> */}

              <select name="type" 
              value={item.type} 
              onChange={handleChange}>
                <option value="perdido">Perdido</option>
                <option value="encontrado">Encontrado</option>
              </select>

              {/* CONFIGURAR NO BANCO DE DADOS */}
              <SelectCategory 
              value={item.category} 
              onChange={handleChange}>
              </SelectCategory>

              {error && <p style={{ color: "red" }}>{error}</p>} {/* Mensagem de erro */}
              <SubmitButton>Cadastrar</SubmitButton>
          </form>

        </section>
    );
};

export default RegisterItem;
