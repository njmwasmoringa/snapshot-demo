import React,{useState} from 'react'
import './search.css'
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button';
export const Search=()=>{
  const[search,setSearch]=useState("")
  const categories=[
    {name:"Mountain"},
    {name:"Mountain"},
    {name:"Mountain"},
    {name:"Mountain"},
  ]

    return(
        <>
          <form>
             <h2 ><i>SnapShot</i></h2>
            <input type="search"id="search"placeholder="Search..." name="search"/> &nbsp;
            <button>Search</button>
           </form>
          <div class="buttons">
            <button >Mountain </button> &nbsp;
            <button>Beaches</button> &nbsp;
            <button>Birds</button> &nbsp;
            <button>Food</button>
          </div>

          
        </>
    )  
}