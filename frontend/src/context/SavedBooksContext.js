import React, { createContext, useState, useContext } from 'react';

const SavedBooksContext = createContext();

export const useSavedBooks = () => {
    return useContext(SavedBooksContext);
};

export const SavedBooksProvider = ({ children }) => {
    const [booklist, setBooklist] = useState([]);

    const addToBooklist = (book) => {
        setBooklist(prevBooklist => [...prevBooklist, book]);
        console.log('addToBooklist');
    };
    const removeBooklist = (book) => {
        setBooklist(prevBooklist => prevBooklist.filter(b => b.id !== book.id));
        console.log('removeBooklist');
    };

    return (
        <SavedBooksContext.Provider value={{ booklist, addToBooklist, removeBooklist }}>
            {children}
        </SavedBooksContext.Provider>
    );
};
