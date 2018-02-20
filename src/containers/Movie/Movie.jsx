import React, {Component} from 'react'
import Img from './../../components/Img/Img.jsx'
import Favorite from './../../img/favorite/star_on.png'
import NonFavorite from './../../img/favorite/star_off.png'


export default class Movie extends Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.addToFavorite = this.addToFavorite.bind(this);
        this.movieIsFavorite = false;
    }

    onClickHandler() {
        this.props.redirect('/watchtrailer');
        this.props.watchCurrentMovie(this.props);
    }

    addToFavorite() {
        this.props.addToFavorite(this.props);
        this.movieIsFavorite = !this.movieIsFavorite;
    }

    render() {
        let favoriteIcon = this.movieIsFavorite ? Favorite : NonFavorite;
        return (
            <li className={this.props.listItemClass}>
                <button
                    className='movie_button_favorite'
                    onClick={this.addToFavorite}>
                    <Img src={favoriteIcon} className='movie_favorite'/>
                </button>
                <h3> {this.props.title} </h3>
                <span> {this.props.vote_average} </span>
                <Img src={this.props.poster} className='movie_poster'/>
                <p> {this.props.text} </p>
                <button
                    className='movie_button_trailer'
                    id={this.props.id}
                    onClick={this.onClickHandler}>
                    Trailer
                </button>
            </li>
        )
    }
}
