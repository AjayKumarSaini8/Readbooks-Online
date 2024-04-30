import React from 'react';
import { useSavedBooks } from '../context/SavedBooksContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Booklist = () => {
    const { booklist, removeBooklist } = useSavedBooks();

    const showToastMessage = () => {
        toast('Book removed!');
    };

    return (
        <div className="container mx-auto px-4">
            <p className="text-2xl font-bold mb-4">Booklist</p>
            <div className="grid sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2  gap-4 mt-4">
                {booklist.map((book, index) => (
                    book && book.volumeInfo && (
                        <div key={index} className="bg-white p-4 shadow-md rounded transform transition duration-500 hover:bg-green-100">
                            {book.volumeInfo.imageLinks && (
                                <img
                                    src={book.volumeInfo.imageLinks.smallThumbnail}
                                    alt={book.volumeInfo.title}
                                    className="mb-2 rounded h-48 object-cover"
                                />
                            )}
                            <h4 className="text-xl font-bold mb-2">{book.volumeInfo.title}</h4>
                            <p className="text-gray-600 mb-2">
                                {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}
                            </p>
                            <div className="mt-2 flex justify-between items-center">
                                <Link
                                    href={book.volumeInfo.previewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-2 py-1 rounded hover:underline"
                                >
                                    See more
                                </Link>
                                <button
                                    onClick={() => {
                                        removeBooklist(book);
                                        showToastMessage();
                                    }
                                    }

                                    type="button"
                                    className="text-blue-500 hover:underline"
                                >
                                    Remove from Booklist
                                </button>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default Booklist;
