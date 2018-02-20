import React, { Component } from 'react'
import {ListWithImages} from './../List/List.jsx'
import Img from './../Img/Img.jsx'
import Movie from './../../img/header/Movie.png'
import SidebarLinks from './SidebarLinks.js'


export default class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

    clickHandler(e) {
        this.props.redirect(e.target.href.split('#')[1]);
    }

    render() {
        return (
            <aside className='product-panel'>
                <div className='product-logo'>
                    <a href='#'>
                        <Img src={Movie} className='product-logo__image' />
                    </a>
                </div>
                <ListWithImages
                    clickHandler={this.clickHandler.bind(this)}
                    className='tabs-wraper js-show-product-nav'
                    listItemClass='tabs-wraper__link js-tab-navigation'
                    listItems={SidebarLinks}>
                </ListWithImages>
            </aside>
        )
    }
}
