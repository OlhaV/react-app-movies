import React, {Component} from 'react'
import $ from 'jquery'


export default class Input extends Component {
    constructor(props) {
        super(props)
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(e) {
        this.props.changeProductName(e.target.value)
    }

    render() {
        
        return (
            <input
                onChange={this.onChangeHandler}
                className={this.props.inputClassName}
                placeholder={this.props.inputPlaceholder}
            />
        )
    }
}
