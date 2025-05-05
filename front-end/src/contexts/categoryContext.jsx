import React, { useState, useContext } from "react";

export const CategoryContext = React.createContext();

export function useCategory() {
    return useContext(CategoryContext);
}

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};