import React, {Component} from 'react'
import Section from './../Section/Section.jsx'
import { List } from './../../components/List/List.jsx'


export default class Favorite extends Component {
    constructor(props) {
        super(props)
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler() {
        this.props.clickHandler()
    }

    render() {
        return (
            <div className='movies__favorite'>
                <Section>
                    <List
                        className = 'movies__favorite_list'
                        listItemClass="movies__favorite_movie"
                        list={this.props.favoriteMovies}
                        clickHandler={this.onClickHandler}/>
                </Section>
            </div>
        )
    }
}
