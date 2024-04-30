import React, { useState, useEffect } from 'react'
import { useSavedBooks } from '../context/SavedBooksContext'
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [query, setQuery] = useState('')
    const [books, setBooks] = useState([])
    const [error, setError] = useState(null)
    const [isVisible, setIsVisible] = useState(false);
    const { addToBooklist } = useSavedBooks()

    const showToastMessage = () => {
        toast('Book added!');
    };

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window.addEventListener('scroll', toggleVisibility);


    const fetchMoreData = async () => {
        if (query) {
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=books+${query}&startIndex=${books.length}&maxResults=20&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`);
                const data = response.data;
                setBooks(prevBooks => [...prevBooks, ...(data.items || [])]);
                setError(null);
            } catch (error) {
                setError(error.message);
            }
        }
    };
    useEffect(() => {
        const fetchBooks = async () => {
            try {
                if (query) {

                    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=books+${query}&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`);
                    const data = response.data;
                    setBooks(data.items || []);
                    setError(null);
                }
                else {
                    // Fetch some default books when query is empty
                    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=books&key=AIzaSyAbr_mnO88bXbeseUjO5aX1L2xXQCoVr_c`);
                    const data = response.data;
                    setBooks(data.items || []);
                    setError(null);
                }
            }
            catch (error) {
                setError(error.message);
            }
        }
        fetchBooks();
    }, [query])


    return (
        <>
            <div className="container mx-auto px-4">

                <div className="flex flex-col items-center justify-center">
                    <div className="flex w-full max-w-md mx-auto">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for books..."
                            className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <button
                            type="submit"
                            className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <svg
                                className="w-4 h-4"
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
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                    {error && <div className="text-red-500 mt-2">{error}</div>}
                    <InfiniteScroll
                        dataLength={books.length}
                        next={fetchMoreData}
                        hasMore={true}
                        loader={query && <h4>Loading...</h4>}
                    >
                        <div className="grid sm:grid-cols-1 xl:grid-cols-5 md:grid-cols-2  gap-4 mt-4">
                            {books.map((book, index) => (
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
                                                to={book.volumeInfo.previewLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-green-500 text-white px-2 py-1 rounded hover:underline"
                                            >
                                                See more
                                            </Link>
                                            {/* <Link to="/booklist"> */}
                                            <button
                                                onClick={() => {
                                                    addToBooklist(book);
                                                    showToastMessage();
                                                }
                                                }

                                                type="button"
                                                className="text-blue-500 hover:underline"
                                            >
                                                Add to Booklist
                                            </button>
                                            {/* </Link> */}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
            <div className="scroll-to-top">
                {isVisible &&
                    <div onClick={scrollToTop} className="fixed bottom-2 right-2">
                        <button className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-full">Back to top</button>
                    </div>}
            </div>
        </>
    )
}

export default HomePage