import {useState} from 'react';
import {AddCategory} from "./components/AdfdCategory";
import {GifGrid} from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif App</h1>

            <AddCategory

                onNewCategory={(value) => onAddCategory(value)}
            />

            <button onClick={onAddCategory}>Agregar</button>

            {
                categories.map(category => (
                    <GifGrid key={category} category={category}/>
                ))
            }
        </>
    )
}