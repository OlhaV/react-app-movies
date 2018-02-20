import React, {Component} from 'react'
import ListofLinks from '../List/List.jsx'
import UpperMenu from './UpperMenu.js'


export default class Header extends Component {
    clickHandler(e) {
        this.props.redirect(e.target.href.split('#')[1]);
    }
    
    render() {
        return (
            <header className='header'>
                <ListofLinks
                    clickHandler={this.clickHandler.bind(this)}
                    listItems={UpperMenu}
                    className='UpperMenu'>
                </ListofLinks>
            </header>
        )
    }
}
