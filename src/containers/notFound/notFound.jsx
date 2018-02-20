import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NotFound extends Component {
    render() {
        return (
            <div className="notFound">
                <p> Page is not found. Back to <Link href="/">home page</Link> </p>
            </div>
        )
    }
}