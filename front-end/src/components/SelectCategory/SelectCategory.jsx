import React from 'react'

const SelectCategory = ({ value, onChange, children }) => {
        return (
                <>
                <select name="category" id="category" value={value} onChange={onChange}>
                        <option value="">Selecione uma categoria</option>
                        <option value="eletronicos">Eletrônicos</option>
                        <option value="vestuario">Vestuário</option>
                        <option value="documentos">Documentos</option>
                        <option value="chaves">Chaves</option>
                        <option value="dinheiro">Dinheiro</option>
                </select>
                {children}
                </>
        )
}

export default SelectCategory
