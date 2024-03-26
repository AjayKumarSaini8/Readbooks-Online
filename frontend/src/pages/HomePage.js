import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'


const HomePage = () => {
    const [notes, setNotes] = useState([])
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)
    const { authTokens, logoutUser } = useContext(AuthContext)

    useEffect(() => {
        getNotes()
    }, [])

    useEffect(() => {
        const fetchBooks = async () => {
            if (query) {
                try {
                    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=books+${query}&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`)
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`)
                    }
                    const data = await response.json();
                    setBooks(data.items || []);
                    setError(null)
                } catch (error) {
                    setError(error.message)
                }
            }
        }
        fetchBooks();
    }, [query])


    const getNotes = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/notes/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + String(authTokens.access)
            }
        })
        const data = await response.json()
        if (response.status === 200) {
            setNotes(data)
        } else if (response.statusText === 'Unauthorized') {
            logoutUser()
        }
    }
    return (
        <div>
            <p>this is home page</p>

            <ul>
                {notes.map(note => (
                    <li key={note.id}>{note.body}</li>
                ))}
            </ul>

            <div className="flex flex-col items-center justify-center">
                <div class="flex">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for books..."
                        class="
      bg-gray-50 border border-gray-300 text-gray-900 text-sm
      rounded-lg focus:ring-blue-500 focus:border-blue-500
      block w-full ps-5 p-2.5 dark:bg-gray-700 dark:border-gray-600
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
      dark:focus:border-blue-500
    "
                    />
                    <button
                        type="submit"
                        class="
      p-2.5 ms-2 text-sm font-medium text-white bg-blue-700
      rounded-lg border border-blue-700 hover:bg-blue-800
      focus:ring-4 focus:outline-none focus:ring-blue-300
      dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
    "
                    >
                        <svg
                            class="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span class="sr-only">Search</span>
                    </button>
                </div>




                {error && <div className="text-red-500">{error}</div>}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {books.map((book, index) => (
                        <div key={index} className="bg-white p-4 shadow-md rounded">
                            {book.volumeInfo.imageLinks && (
                                <img
                                    src={book.volumeInfo.imageLinks.smallThumbnail}
                                    alt={book.volumeInfo.title}
                                    className="mb-2 rounded"
                                />
                            )}

                            <h4 className="text-xl font-bold">{book.volumeInfo.title}</h4>

                            <p className="text-gray-600">
                                {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}
                            </p>

                            <div className="mt-2">
                                <a
                                    href={book.volumeInfo.previewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-green-500 text-white px-2 py-1 rounded ml-2"
                                >
                                    See more
                                </a>

                                <Link to="/">
                                    <button
                                        type="button"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Add to Booklist
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default HomePage