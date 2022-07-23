import {useState} from "react";


export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('One Punch')

    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim().length<=1) return;

        // setCategories(categories=> [inputValue,...categories])
        setinputValue('')
        onNewCategory(inputValue.trim())

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>

            <input type="text"
                   placeholder='Buscar Gifs'
                   value={inputValue}
                   onChange={(event) => onInputChange(event)}
            />
        </form>
    )
}