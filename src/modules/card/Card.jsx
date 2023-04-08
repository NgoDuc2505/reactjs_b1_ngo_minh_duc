import React, { Component } from 'react'
import './card.css'
export default class Card extends Component {
    render() {
        return (
            <div className='col-md-6 col-lg-4 mb-5'>
                <div className="card_content">
                    <div className="icon">
                        <i className={this.props.icon} />
                    </div>
                    <div className="title">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.paragraph}</p>
                    </div>
                </div>
            </div>
        )
    }
}
