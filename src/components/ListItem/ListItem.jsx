import React, {Component} from 'react'

export default function ListItem(props) {
    return (
        <li className={props.listItemClass}
            onClick={props.clickHandler}>
            {props.children}
        </li>
    )
}
