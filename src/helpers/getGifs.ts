import { Gif } from "../interfaces/gif.interface";

export const getGifs = async(category:string) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=6Tpp5G0TQ88FVjSthNaOMTB4QDtPNoOI&limit=10&q=${category}`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs:Gif[] = data;
    const reducedGifs = gifs.map(img=>({
      id:img.id,
      title: img.title,
      url:img.images.downsized_medium.url
    }))
    console.log(reducedGifs);
    
    return reducedGifs;
    
    
  }