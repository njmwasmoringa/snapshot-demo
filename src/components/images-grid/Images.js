import { useContext } from "react";
import { ImagesContext } from "../../context/images.provider";
import { LoaderContext } from "../../context/loader.provider";
import Pagination from "../pagination/Pagination";
import "./images.css";

export default function Images() {

    const { images } = useContext(ImagesContext);
    const { loading } = useContext(LoaderContext);

    return <div>
        {
            loading ? <div align="center">Loading Images</div> :
            images.hits && images.hits.length ?

                    <div>

                        <div className="image-grid">
                            {images.hits.map(image => <div key={image.id}>
                                <img src={image.previewURL} />
                            </div>)}
                        </div>

                        <Pagination />
                    </div> :

                    <div>
                        <h3>No images found</h3>
                    </div>
        }
    </div>
}