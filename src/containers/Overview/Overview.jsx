import React, {Component} from 'react'
import Section from './../Section/Section.jsx'


export default class Overview extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Section>
                    <p className='movie_overview'> {this.props.overview} </p>
                </Section>
            </div>
        )
    }
}
