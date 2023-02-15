import { Component } from 'react';
import Carousel from "./Carousel";



class Home extends Component {
    render() {
        return (
            <>
                <h4>Trending Now</h4>
                <Carousel name="lord of the rings" type="movie" />
                <h4>Watch it Again</h4>
                <Carousel name="superman" type="movie" />

                <h4>New Releases</h4>
                <Carousel name="batman" type="movie" />
            </>


        )
    }
}

export default Home;