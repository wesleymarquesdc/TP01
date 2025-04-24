import "../../pages/DashboardPage/Dashboard.css"

const Search = () => {
    return (
        <>
            <section className="search-section">
                <h2>Buscar por Categoria</h2>
                <form>
                    <select name="categoria" id="categoria">
                        <option value="">Selecione uma categoria</option>
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="vestuario">Vestuário</option>
                        <option value="documentos">Documentos</option>
                        <option value="acessorios">Acessórios</option>
                    </select>
                    <button type="submit">Buscar</button>
                </form>
            </section>

        </>
    )
}

export default Search;