import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball"]);
    

    return(
    <>  
        <div id='titleBack'>
            <h1 className='animate__animated animate__bounce'>Gif Expert App</h1>
        </div>
        
        <AddCategories setCategories = {setCategories} />
        
        <ol>
            {
                categories.map(categoria => 
                    <GifGrid 
                    key={ categoria }
                    category={ categoria }
                    />
                )
            }
        </ol>
    </>
    );
};

export default GifExpertApp;