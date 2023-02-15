import { Component } from "react"
import { Row, Col, Spinner, Alert } from "react-bootstrap"


class Carousel extends Component {
    state = {
        films: [],
        load: true,
        error: false
    }
    componentDidMount = async () => {
        try {
            let response = await fetch(`http://www.omdbapi.com/?apikey=f6045731&s=${this.props.name}&type=${this.props.type}`)
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                console.log(data.Search)
                this.setState({
                    films: data.Search, load: false, error: false
                }
                )
            }
            else {
                console.log("error")
                this.setState({
                    load: false, error: true
                })
            }
        } catch (error) {
            console.log(error)
            this.setState({
                load: false, error: true
            })
        }
    }

    render() {
        const movie = this.state.films
        console.log(movie)
        return (

            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center" >
                {this.state.load && <Col><Spinner animation="border" /></Col>}
                {this.state.error && < Col > <Alert variant="danger"> error</Alert></Col>}

                {
                    movie.map(movie =>
                        <Col key={movie.imdbID} className="mb-2 px-1">
                            <img className="img-fluid" src={movie.Poster} alt="poster" />
                        </Col>
                    )
                }

            </Row >
        )


    }
}
export default Carousel