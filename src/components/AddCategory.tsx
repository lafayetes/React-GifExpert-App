import { ChangeEvent, FormEvent, useState } from "react"


export const AddCategory = ({onNewCategory}:any) => {
    
    const [inputValue, setinputValue] = useState('One Punch');

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {

        setinputValue(event.target.value);


    }

    const onSubmit = (event:FormEvent<HTMLElement>) => {
        event.preventDefault();
        if(inputValue.trim().length<=1) return;
        onNewCategory( inputValue.trim());
        //setCategories((categories:any)=>[...categories,inputValue]);
        setinputValue('');
        
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}

            />
        </form>

    )
}
