import { useContext, useEffect, useState } from "react"
import { ImagesContext } from "../../context/images.provider"
import { LoaderContext } from "../../context/loader.provider";
import ImagesAPI from "../../services/images.service";
import './Pagination.css';

export default function Pagination() {

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [pages, setPages] = useState([]);
    const { images, setImages } = useContext(ImagesContext);
    const { setLoading } = useContext(LoaderContext);
    const imagesAPI = new ImagesAPI();

    useEffect(() => {
        setTotalPages(images.totalHits / imagesAPI.limit);
        const pageInterval = Math.round((images.totalHits / imagesAPI.limit) / 10);
        console.log( pageInterval )
        const pgs=[];
        for(let i=1; i<11; i++){
            pgs.push(i);
        }
        setPages(pgs);
    }, [currentPage]);

    function pageNavigate(pageNumber){
        // setLoading(true);
        setCurrentPage(pageNumber);
        imagesAPI.getImages(pageNumber).then(imagesData=>{
            setImages(imagesData);
            setLoading(false);
        });
    }

    function pageButton(pageNumber, text) {
        return <button 
            onClick={()=>pageNavigate(pageNumber)} 
            className={ pageNumber==currentPage ? 'blue-button' : '' }>{text}</button>
    }

    return <ul>{ totalPages / 10 }
        <li>{currentPage > 1 ? pageButton(1, '<<') : ''}</li>
        <li>{currentPage > 1 ? pageButton(currentPage - 10, '<') : ''}</li>
        {pages.map(page => <li key={page}>{pageButton(page, page)}</li> )}
        <li>{currentPage < totalPages ? pageButton(currentPage + 10, '>') : ''}</li>
        <li>{currentPage < totalPages ? pageButton(totalPages, '>>') : ''}</li>
    </ul>
}