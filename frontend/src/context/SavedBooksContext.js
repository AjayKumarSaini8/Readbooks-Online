import React, { createContext, useState, useContext } from 'react';

const SavedBooksContext = createContext();

export const useSavedBooks = () => {
    return useContext(SavedBooksContext);
};

export const SavedBooksProvider = ({ children }) => {
    const [booklist, setBooklist] = useState([]);

    const addToBooklist = (book) => {
        setBooklist(prevBooklist => [...prevBooklist, book]);
    };

    return (
        <SavedBooksContext.Provider value={{ booklist, addToBooklist }}>
            {children}
        </SavedBooksContext.Provider>
    );
};
