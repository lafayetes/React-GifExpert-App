interface GifItemProps {
    id: number; // O el tipo correcto para el id
    url: string;
    title: string;
}

export const GifItem: React.FC<GifItemProps> = ({ id, url, title }) => {
    
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>)
}
