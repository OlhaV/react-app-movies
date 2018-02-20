import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as currentMovie from './../Movie/movieActions.js'
import * as fetchPopular from './../Popular/PopularActions.js'
import * as redirect from './mainActions.js'

import Sidebar from './../../components/sidebar/sidebar.jsx'
import Header from './../../components/header/header.jsx'
import Footer from './../../components/footer/footer.jsx'
import Overview from './../Overview/Overview.jsx'
import Watch from './../Watch/Watch.jsx'
import Cast from './../Cast/Cast.jsx'
import Favorite from './../Favorite/Favorite.jsx'
import Popular from './../Popular/Popular.jsx'


class Child extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        switch (this.props.childPage) {
            case '/watchtrailer':
                return <Watch
                    video={this.props.video}
                    title={this.props.title}/>
            case '/description':
                return <Overview overview={this.props.overview}/>
            case '/cast':
                return <Cast />
            case '/favorites':
                return <Favorite clickHandler={this.props.clickHandler}
                    favoriteMovies={this.props.favoriteMovies}/>
            default:
                return <Popular
                    redirect={this.props.redirect}
                    fetchPopular={this.props.fetchPopular}
                    popularMovies={this.props.popularMovies}
                    addToFavorite={this.props.addToFavorite}
                    watchCurrentMovie={this.props.watchCurrentMovie}
                />
        }
    }
}


class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { movieSource, overview, title, video, favoriteMovies } = this.props.movie;
        const { fetchPopular } = this.props.fetchPopular;
        const { popularMovies } = this.props.popular;
        const { watchCurrentMovie, addToFavorite } = this.props.currentMovie;
        const { redirect } = this.props.redirect;
        const { childPage } = this.props.main;

        return (
            <div className="container">
                <Sidebar redirect={redirect}/>
                <Header redirect={redirect}/>
                <main className='main-content'>
                    <Child
                        addToFavorite={addToFavorite}
                        redirect={redirect}
                        childPage = {childPage}
                        watchCurrentMovie={watchCurrentMovie}
                        popularMovies = {popularMovies}
                        movieSource={movieSource}
                        overview = {overview}
                        fetchPopular = {fetchPopular}
                        favoriteMovies={favoriteMovies}
                        video={video}
                        title={title}
                    />
                </main>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        main: state.main,
        movie: state.movie,
        popular: state.popularMovies
    }
}

function mapDispatchToProps(dispatch){
    return {
        redirect: bindActionCreators(redirect, dispatch),
        currentMovie: bindActionCreators(currentMovie, dispatch),
        fetchPopular: bindActionCreators(fetchPopular, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
