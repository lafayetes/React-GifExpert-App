
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }: any) => {
  const {images,isLoading} = useFetchGifs(category);

  // const [images, setimages] = useState<SimplifiedGif[]>([]);

  // const getImages = async () => {
  //   const newImages: any[] = await getGifs(category);
  //   setimages(newImages);
  // }
  // useEffect(() => {
  //   getImages();
  // }, []);
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2> Cargando...</h2>
        
      }
      
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id}
            {...image} />)
        )}
      </div>


    </>
  )
}
