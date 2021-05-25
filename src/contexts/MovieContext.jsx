import { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

const MovieProvider = (props) => {

  const values = {
    
  }

  return ( 
    <MovieContext.Provider value={ values }>
      { props.children }
    </MovieContext.Provider>
   );
}
 
export default MovieProvider;