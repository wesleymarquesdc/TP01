import "../../pages/DashboardPage/Dashboard.css"
import SubmitButton from '../Button/SubmitButton.jsx';
import SelectCategory from '../SelectCategory/SelectCategory.jsx';

import React from "react";


const Search = () => {
    const [category, setCategory] = React.useState('');
    const [error, setError] = React.useState('');
    
    const handleChange = (event) => {
        setCategory(event.target.value);
        // Limpa o erro se o usuário escolheu uma categoria
            if (event.target.value !== '') {
                    setError('');
            }
    };
            
    // Manipula o envio do formulário, evitando o comportamento padrão e validando a seleção
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Se nenhuma categoria foi selecionada, exibe uma mensagem de erro
        if (category === '') {
            setError('Por favor, selecione uma categoria!');
                return;
            }
            
            // Caso a validação seja bem-sucedida, você pode prosseguir com a ação desejada:
            // Por exemplo, enviar os dados para uma API ou atualizar um estado global.
            console.log(`Categoria selecionada: ${category}`);
            // Aqui também pode ser feito um redirecionamento ou outras ações necessárias,
            // por exemplo: history.push(`/categoria/${categoria}`);
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