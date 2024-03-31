import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory= (newCategory:string) =>{
        
        if(categories.includes(newCategory))return;
        // categories.push('Nueva categoria')
        setCategories([newCategory,...categories]);
    }
  return (
    <>
    {/* Title */}
    <h1>GifExpertApp</h1>
     {/* Input  */}
     <AddCategory 
    //  setCategories={setCategories}
        onNewCategory={ (value:any) => onAddCategory(value) }
      />
     {/* Gif List */}
        {categories.map(category =>(
            <GifGrid key={category} category={category}  />
        )

             
        )}
        
     {/* Gif item */}
    </>
  )
}
