import React from 'react';
import './Cards.css'
import CardItem from '../CardItem/CardItem';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check out this EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon!"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel through the Islands of bali in a private cruise!"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src="images/img-4.jpg"
                            text="Explore the hidden waterfall deep inside the Amazon!"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Travel through the Islands of bali in a private cruise!"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="Travel through the Islands of bali in a private cruise!"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Cards;