import { useState, useContext } from "react";
import { ImagesContext } from "../../context/images.provider";
import ImagesAPI from "../../services/images.service";
import "./search.css";

export const Search = () => {
  const { setImages } = useContext(ImagesContext);
  const [q, setQ] = useState("");
  const defaultCategories = [
    {
      name: "Fashion",
      id: 1,
    },
    {
      name: "Nature",
      id: 2,
    },
    {
      name: "Science",
      id: 3,
    },
    {
      name: "Education",
      id: 4,
    },
  ]
  function searchItem(q) {
    // https://pixabay.com/api/?key={ KEY }&q=yellow+flowers&image_type=photo
    fetch(
      `https://pixabay.com/api/?key=4700925-c7b0e37cb9afa755b1257ef22&q=${q}&image_type=photo`
    )
      .then((response) => response.json())
      .then((imagesData) => setImages(imagesData));

    // console.log(data)
  }

  const handleChange = (e) => {
    e.preventDefault();
    setQ(e.target.value);
  };
  

  
  return (
    <section className="search">
      <div><form>
        <h2>
          <i>SnapShot</i>
        </h2>
        <input
          type="search"
          id="search"
          placeholder="Search..."
          value={q}
          onChange={handleChange}
          name="search"
        />
        &nbsp;
        <button type="button" onClick={() => searchItem(q)}>
          Search
        </button>
      </form>
      <div className="buttons">
     
        {defaultCategories.map((category) =>
          <button key={category.id}  onClick={() => searchItem(category.name)}>
            {category.name}
          </button>
          
        )}
      </div></div>
      </section>
  );
  
};
