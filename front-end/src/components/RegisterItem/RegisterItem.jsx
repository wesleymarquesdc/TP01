import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "../../pages/DashboardPage/Dashboard.css";

const RegisterItem = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        location: '',
        photo: null,
        type: 'perdido',
        category: ''
    });


    const [categories, setCategories] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const navigate = useNavigate();
    // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // Carrega categorias do mock
    useEffect(() => {
        const fetchCategories = async () => {
        try {
            const response = await fetch('/api/categories');
            const data = await response.json();
            setCategories(data.categories);
        } catch (error) {
            console.error('Erro ao carregar categorias:', error);
        }
        };

        fetchCategories();
    }, []);


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        
        if (name === 'photo') {
          setFormData({
            ...formData,
            photo: files[0]
          });
        } else {
          setFormData({
            ...formData,
            [name]: value
          });
        }
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
    
        try {
          const formDataToSend = new FormData();
          formDataToSend.append('title', formData.title);
          formDataToSend.append('description', formData.description);
          formDataToSend.append('date', formData.date);
          formDataToSend.append('location', formData.location);
          formDataToSend.append('type', formData.type);
          formDataToSend.append('category', formData.category);
          if (formData.photo) {
            formDataToSend.append('photo', formData.photo);
          }
    
          const response = await fetch('/api/items', {
            method: 'POST',
            body: formDataToSend
          });
    
          if (response.ok) {
            alert('Item cadastrado com sucesso!');
            // navigate('/');
          } else {
            throw new Error('Erro ao cadastrar item');
          }
        } catch (error) {
          console.error('Erro:', error);
          alert('Ocorreu um erro ao cadastrar o item');
        } finally {
          setIsSubmitting(false);
        }
    };
    

    return (
        <section className="register-section">
            <h2>Cadastrar Item Perdido/Encontrado</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titulo">Título</label>
                <input type="text" id="titulo" name="titulo" value={formData.title} onChange={handleChange} required />

                <label htmlFor="description">Descrição</label>
                <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="1" />

                <label htmlFor="data">Data</label>
                <input type="date" id="data" name="data" value={formData.data} onChange={handleChange} required />

                <label htmlFor="local">Localização</label>
                <input type="text" id="local" name="local" value={formData.location} onChange={handleChange} required />

                <label htmlFor="photo">Foto</label>
                <input type="file" id="photo" name="photo" onChange={handleChange} accept="image/*" />

                <label htmlFor="type">
                <input
                type="radio" name="type" value="perdido" 
                checked={formData.type === 'perdido'} onChange={handleChange} required/>Perdido</label>

                <label htmlFor="type">
                <input type="radio" name="type" value="encontrado" checked={formData.type === 'encontrado'} 
                onChange={handleChange} /> Encontrado </label>

                {/* <label htmlFor="category">Categoria</label>
                <select id="category" name="category" value={formData.category} onChange={handleChange} required>
                    <option value="">Selecione uma Categoria</option>
                    <option value="eletronicos">Eletrônicos</option>
                    <option value="vestuario">Vestuário</option>
                    <option value="documentos">Documentos</option>
                    <option value="acessorios">Acessórios</option>
                </select> */}

                <label className="block text-gray-700 mb-2" htmlFor="category">Categoria*</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                <option value="">Selecione uma categoria</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <button type="submit" disabled={isSubmitting}>Cadastrar Item</button>
            </form>
        </section>
    );
};

export default RegisterItem;
