import React, {Component} from 'react'


export default class Button extends Component {
    constructor(props) {
        super(props)
    }

    onClickHandler(e) {
        this.props.buttonEvent()
    }

    render() {
        return (
            <div className={this.props.className}>
                <button onClick={this.onClickHandler.bind(this)}></button>
            </div>
        )
    }
}
