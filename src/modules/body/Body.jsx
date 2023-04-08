import React, { Component } from 'react'
import Banner from '../banner/Banner'
import Card from '../card/Card'

export default class Body extends Component {
    render() {
        return (
            <div className='body_wrapper'>
                <Banner />
                <div className="wrapper container">
                    <div className="row card_container">
                        <Card title='Fresh new layout' paragraph="With Bootstrap 5, we've created a fresh new layout for this template!" icon="fa-solid fa-layer-group"/>
                        <Card title='Free to download' paragraph="With Bootstrap 5, we've created a fresh new layout for this template!" icon="fa-solid fa-download" />
                        <Card title='Jumbotron hero header' paragraph="With Bootstrap 5, we've created a fresh new layout for this template!" icon="fa-solid fa-credit-card" />
                        <Card title='Feature boxes' paragraph="With Bootstrap 5, we've created a fresh new layout for this template!" icon="fa-solid fa-fire" />
                        <Card title='Simple clean code' paragraph="With Bootstrap 5, we've created a fresh new layout for this template!" icon="fa-solid fa-code" />
                        <Card title='A name you trust' paragraph="With Bootstrap 5, we've created a fresh new layout for this template!" icon="fa-solid fa-spell-check" />
                    </div>
                </div>
            </div>
        )
    }
}
