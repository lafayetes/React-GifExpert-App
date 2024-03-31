import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { SimplifiedGif } from "../interfaces/gif.interface";

export const useFetchGifs = (category:any) => {
    const [images, setimages] = useState<SimplifiedGif[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      const newImages: any[] = await getGifs(category);
      setimages(newImages);
      setIsLoading(false)
    }
    useEffect(() => {
      getImages();
    }, []);
    return {
        images,
        isLoading
    }
}
