import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = ()=>{

    const APP_ID ='09f3fcff';
    const APP_KEY ='cafd4efe65a8cab60caa05f23deabb4c';

    const [recipes, setRecipes] = useState([]);

    useEffect(  ()=>{
        getRecipes();
    },[]);

    const getRecipes = async()=>{
        const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`, {

        });
        const data = await  response.json();
        setRecipes(data.hits);
        console.log(data.hits);

    }

    return(
        <div className="App">
            <form className="search-form">
                <input className="search-bar" type="text"/>
                <button className="search-button"
                        type="submit"
                >
                    Search
                </button>
            </form>
            {recipes.map(recipe=>(
                <Recipe/>
            ))};
        </div>

    );
}

export default App;