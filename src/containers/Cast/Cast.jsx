import React, {Component} from 'react'
import ListofLinks from './../../components/List/List.jsx'
import Section from './../Section/Section.jsx'


export default class Watch extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='movie__cast'>
                <Section>
                    <ListofLinks/>
                </Section>
            </div>
        )
    }
}
