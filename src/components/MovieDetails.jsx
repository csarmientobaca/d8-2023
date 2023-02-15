import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
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

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {movie && (
                <>
                    <Card className="text-center">
                        <Card.Header>{movie.Title}</Card.Header>
                        <Card.Body>
                            <Card.Img variant="top" src={movie.Poster} />
                            <Card.Text>
                                {movie.Plot}
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        <Card.Footer className="text-muted">{movie.Year}</Card.Footer>
                    </Card>

                </>
            )}

        </>

    )

}
export default MovieDetails