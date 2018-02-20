import React, {Component} from 'react'
import Section from './../Section/Section.jsx'

export default class Watch extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
            <div className='movie__watching'>
                <Section>
                    <div className='movie_title'>
                        <h2> {this.props.title} </h2>
                    </div>
                    <iframe width="420" height="315"
                        src={this.props.video}
                        frameBorder="0"
                        allowFullScreen>
                    </iframe>
                </Section>
            </div>
        )
    }
}
