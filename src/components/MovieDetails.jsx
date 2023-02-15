import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
const MovieDetails = () => {
    const params = useParams()
    console.log(params)

    const [movie, setMovie] = useState(null)

    // "fetch" + params
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=f6045731&i=${params.movieId}`);
            const data = await response.json();
            console.log(data, "this is data");

            setMovie(data);
        };

        fetchData();
        console.log(movie, "this is movie settato")

    }, []);
    return (
        <>
            {movie && (
                <>
                    <h1>IdNumber :{params.movieId} </h1>
                    <h1>Name :{movie.Title} </h1>
                    <h1>Year :{movie.Year} </h1>
                </>
            )}

        </>

    )

}
export default MovieDetails