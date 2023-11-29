/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useState, useEffect } from 'react';


export const AnimationPrefContext = createContext();
export const AnimationPref = ({children}) => {
    const getQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const [motion, setMotion] = useState(!getQuery.matches);

    useEffect(() => {
        const listener = (event) => {
            setMotion(!event.matches)
        }
        getQuery.addEventListener('change', listener);
        return () => getQuery.removeEventListener('change', listener);
    }, []);
    return (
        <AnimationPrefContext.Provider value={motion}>
            {children}
        </AnimationPrefContext.Provider>

    );
}