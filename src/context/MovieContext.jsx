import { useEffect, useState, createContext, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");
    if (storedFavs) {
      setFavourites(JSON.parse(storedFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]); // ✅ update when favourites change

  const addToFavourite = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  const removeFromFavourite = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavourite = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const values = {
    favourites,
    addToFavourite,
    removeFromFavourite,
    isFavourite,
  };

  return (
    <MovieContext.Provider value={values}>
      {children}
    </MovieContext.Provider>
  );
};
