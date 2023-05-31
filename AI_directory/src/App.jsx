import React from "react";
import { sitesData } from "./list";
import './App.css'
import { nanoid } from "nanoid";
import logo from './assets/icons8-godtier-48.png'
import { category } from "./categories";

function App(){

    function handleSubmit(e){
        e.preventDefault()
    }

    function handleChange(e){
        setInput(e.target.value)
        const filterArray = sitesData.filter((item)=>item.name.toLowerCase().includes(input.toLowerCase()))
        setFilteredArray(filterArray)
        setFilteredApplied(!filteredApplied)
    }
    
    const [input, setInput] = React.useState('')

    

    function handleSelection(e){
        setSelectedCategory(e.target.value)
        const filterArray = sitesData.filter((item) => item.category === e.target.value)
        setFilteredArray(filterArray)
        setFilteredApplied(!filteredApplied)
        if(filteredApplied === true){
            setFilteredApplied(false)
        }

    }

   
    const [filteredApplied, setFilteredApplied] = React.useState(false)
    const [selectedCategory, setSelectedCategory] = React.useState('')

    const [filteredArray, setFilteredArray] = React.useState([])


    

     



    return(
        <>
         <nav className="nav">
          <div className="cen">
             <h2><img src={logo}/>The AI Resource Library</h2>
            <h4>Curated list of AI tools for your every need</h4>
           </div>
         </nav>


         <div className="body">
           <form className="form" onSubmit={handleSubmit}>
              <input
                type='text'
                value = {input}
                onChange ={handleChange}
                placeholder = 'Search for resource'
                />

           </form>
           <div className="dropdown">
                    <select value={selectedCategory} onChange={handleSelection} className="options-menu">
                   <option value="">ALL</option>
                   {category.map((item)=>(
                    <option key={nanoid()} 
                            value = {item.category}
                            >{item.category}</option>
                   ))}
              </select>

               

                </div>
           <hr></hr>

           
            <div className="resources">
  {filteredApplied
    ? filteredArray.map((resource) => (
        <div key={nanoid()} className="resource">
          <a href={resource.link}>
            <img src={resource.img} alt={resource.name} />
          </a>
          <p className="title">{resource.name}</p>
          <p className="desc">{resource.description}</p>
          <h5 className="cat">{resource.category}</h5>
          <h5 className="price">{resource.price}</h5>
        </div>
      ))
    : sitesData.map((resource) => (
        <div key={nanoid()} className="resource">
          <a href={resource.link}>
            <img src={resource.img} alt={resource.name} />
          </a>
          <p className="title">{resource.name}</p>
          <p className="desc">{resource.description}</p>
          <h5 className="cat">{resource.category}</h5>
          <h5 className="price">{resource.price}</h5>
        </div>
      ))}
</div>

<footer>
 <p>&copy; Aurelius </p>
 <p>Contact us via <a href="https://twitter.com/AureliustheIV">Twitter</a> or
  <a href="https://web.facebook.com/ifeoluwa.akinpelu.773"> Facebook</a> </p>
</footer>

               
         </div>
        </>
    )
}

export default App


