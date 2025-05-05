import SubmitButton from '../Button/SubmitButton.jsx';
import SelectCategory from '../SelectCategory/SelectCategory.jsx';
import { useState } from "react";
import { CategoryContext, useCategory } from '../../contexts/categoryContext.jsx';
import "../../pages/DashboardPage/Dashboard.css"


const Search = () => {
    const { selectedCategory, setSelectedCategory } = useCategory(CategoryContext);
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
        if (event.target.value !== '') setError('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (category === '') {
        setError('Por favor, selecione uma categoria!');
        return;
        }

        setSelectedCategory(category);
    };
    
    return (
        <>
            <section className="search-section">
                <h2>Buscar por Categoria</h2>

                <form onSubmit={handleSubmit}>
                    {/* Formulario com as categorias */}
                    <SelectCategory value={category} onChange={handleChange}></SelectCategory>
                
                    {/* Se houver erro, exibe a mensagem em vermelho */}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <SubmitButton>Buscar</SubmitButton>
                </form>

            </section>

        </>
    )
}

export default Search;