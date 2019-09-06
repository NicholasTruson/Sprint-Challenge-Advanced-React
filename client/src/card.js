// *** Imports *** //

import React from 'react';

import { Segment, Card } from 'semantic-ui-react'

import CardData from './cardData';

// *** Card Component *** //

const CardComp = props => {

    return (
    
    <Segment raised>

        
        <Card>
            <Card.Content>

                <h4>Womens Soccer Stars</h4>

                <Card.Meta>Name{props.data.name}</Card.Meta>
                <Card.Meta>Country{props.data.country}</Card.Meta>
                <Card.Meta>Searches {props.data.searches}</Card.Meta>

                <CardData />

            </Card.Content>
            
        </Card>
        

    </Segment>)
}

export default CardComp;