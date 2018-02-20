import React, { Component } from 'react'


export default class Section extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className={this.props.className}>
                <div className='section__inner'>
                    {this.props.children}
                </div>
            </section>
        )
    }
}
