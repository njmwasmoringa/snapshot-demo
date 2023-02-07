import { createContext, useContext, useEffect, useState } from "react";
import ImagesAPI from "../services/images.service";
import { LoaderContext, LoaderProvider } from "./loader.provider";

export const ImagesContext = createContext();

export function ImagesProvider({ children }) {

    const [images, setImages] = useState([]);
    const {setLoading} = useContext(LoaderContext);
    const imagesAPI = new ImagesAPI();

    useEffect(() => {
        setLoading(true);
        imagesAPI.getImages().then(imagesData => {
            setImages(imagesData);
            setLoading(false);
        });
    }, []);

    return <ImagesContext.Provider value={{ images, setImages }}>
       {children}
    </ImagesContext.Provider>
}