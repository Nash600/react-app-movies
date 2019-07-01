import React, { Component } from 'react';
import Actor from './Actor';
import './Movie.css';

class Movie extends Component {
    state = {
        liked: false,
        showCast: false
    }
    changeLike = () => {
        this.setState({
            liked: !this.state.liked
        })
    }

    toggleCast = () =>{
        this.setState({
            showCast: !this.state.showCast
        })
    }
    render() {
        let castMembers = (
            <ul>
                {this.props.cast.map( (member, index) => <Actor key={index} name={member.name} role={member.role} />)}
            </ul>
        )

        return (
            <div>
                <h3>{this.props.title} <button onClick={() => this.props.deleteMovie(this.props.id)} >Delete Movie</button></h3>
                <button onClick={this.changeLike}>{this.state.liked ? 'Unlike' : 'Like'}</button>
                <p>Directed by: {this.props.director}</p>
                <p>Starring: <button onClick={this.toggleCast}>{this.state.showCast ? "Hide Cast" : "Show Cast"}</button></p>
                {this.state.showCast ? castMembers : ""}
            </div>
        )
    }

}

export default Movie;
