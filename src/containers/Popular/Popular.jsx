import React, { Component } from 'react'
import Section from './../Section/Section.jsx'
import { ListOfPopularMovies } from './../../components/List/List.jsx'


export default class Popular extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        window.addEventListener('load', () => {
            this.props.fetchPopular()
        })
    }

    render() {
        return (
            <Section>
                <div className='movies_popular'>
                    <ListOfPopularMovies
                        redirect={this.props.redirect}
                        movies={this.props.popularMovies}
                        addToFavorite={this.props.addToFavorite}
                        watchCurrentMovie={this.props.watchCurrentMovie}
                    />
                </div>
            </Section>
        )
    }

}
