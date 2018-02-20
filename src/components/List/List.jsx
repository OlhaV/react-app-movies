import React, {Component} from 'react'
import ListItem from './../ListItem/ListItem.jsx'
import Img from './../Img/Img.jsx'
import Movie from './../../containers/Movie/Movie.jsx'
import API_KEY from './../../containers/Main/mainConstants';

export default function ListofLinks(props) {
    let content = (<span> No list given </span>)

    if (props.listItems) {
        content = props.listItems.map((item, index) => {
            return (
                <ListItem
                    key={index}
                    clickHandler={props.clickHandler}>
                    {props.children}
                    <a href={item.link}> {item.text} </a>
                </ListItem>
            )
        })
    }
    return (
        <ul className={props.className}>
            {content}
        </ul>
    )
}

export function List(props) {
    let content = (<span> No list given </span>)

    if (props.list) {
        content = props.list.map((item, index) => {
            return (
                <li className={props.listItemClass}
                    key={index + '_' + item.id}>
                    {item.title}
                </li>
            )
        })
    }
    return (
        <ul className={props.className}>
            {content}
        </ul>
    )
}

export function ListWithImages(props) {
    let content = (<span> No list given </span>)

    if (props.listItems && props.listItems.length) {
        content = props.listItems.map((item, index) => {
            let link = item.link ? item.link : '#';
            return (
                <ListItem key={index}
                          listItemClass={props.listItemClass}
                          clickHandler={props.clickHandler}>
                    <Img src={item.src} />
                    <a href={link}> {item.text} </a>
                </ListItem>
            )
        })
    }
    return (
        <ul className={props.className}>
            {content}
        </ul>
    )
}

export function ListOfPopularMovies(props) {
    let content = (<span> No movies found </span>);
    let posterURL = 'https://image.tmdb.org/t/p/w640';

    if (props.movies && props.movies.length) {
        content = props.movies.map((movie, index) => {
            console.log(movie)
            let poster = posterURL + movie.poster_path;
            let id = movie.id;
            let text = movie.overview;
            let title = movie.title;
            let vote = movie.vote_average;

            return (
                <Movie
                    id={id}
                    key={index}
                    redirect={props.redirect}
                    watchCurrentMovie={props.watchCurrentMovie}
                    addToFavorite={props.addToFavorite}
                    title={title}
                    poster={poster}
                    text={text}
                    vote_average={vote}>
                </Movie>
            )
        })
    }
    return (
        <ul className={props.className}>
            {content}
        </ul>
    )
}
