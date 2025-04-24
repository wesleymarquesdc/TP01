import { useState } from "react";
import "../../pages/DashboardPage/Dashboard.css";

const RegisterItem = () => {
    const [formData, setFormData] = useState({
        titulo: "",
        descricao: "",
        data: "",
        local: "",
        foto: null,
        tipo: "",
        categoria: ""
    });

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
        // Aqui você pode enviar para a API (ou mock por enquanto)
        console.log("Enviando dados:", formData);

        // Exemplo usando FormData se quiser enviar com foto:
        /*
        const data = new FormData();
        for (let key in formData) data.append(key, formData[key]);
        fetch("/api/items", {
            method: "POST",
            body: data
        });
        */
    };

    return (
        <section className="register-section">
            <h2>Cadastrar Item Perdido/Encontrado</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titulo">Título</label>
                <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleChange} required />

                <label htmlFor="descricao">Descrição</label>
                <textarea id="descricao" name="descricao" value={formData.descricao} onChange={handleChange} rows="3" />

                <label htmlFor="data">Data</label>
                <input type="date" id="data" name="data" value={formData.data} onChange={handleChange} required />

                <label htmlFor="local">Localização</label>
                <input type="text" id="local" name="local" value={formData.local} onChange={handleChange} required />

                <label htmlFor="foto">Foto</label>
                <input type="file" id="foto" name="foto" onChange={handleChange} accept="image/*" />

                <label htmlFor="tipo">Tipo</label>
                <select id="tipo" name="tipo" value={formData.tipo} onChange={handleChange} required>
                    <option value="">Selecione o tipo</option>
                    <option value="perdido">Perdido</option>
                    <option value="encontrado">Encontrado</option>
                </select>

                <label htmlFor="categoria">Categoria</label>
                <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} required>
                    <option value="">Selecione uma categoria</option>
                    <option value="eletronicos">Eletrônicos</option>
                    <option value="vestuario">Vestuário</option>
                    <option value="documentos">Documentos</option>
                    <option value="acessorios">Acessórios</option>
                </select>

                <button type="submit">Cadastrar Item</button>
            </form>
        </section>
    );
};

export default RegisterItem;
