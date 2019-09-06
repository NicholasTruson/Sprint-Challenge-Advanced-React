import React from 'react';

import axios from 'axios';

import { Segment, Card } from 'semantic-ui-react'

class CardData extends React.Component{
    constructor(){
        super();
        this.state = {
            players: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
            //.then(res => console.log(res.data))
            .then(res => this.setState({players:res.data}))
      }
      render() {
        console.log(this.state.name)

        return (

            this.state.players.map ( e => {

                return (
                    < Segment raised >
                        <Card>
                            <Card.Content>
                                <Card.Header>
                                    {e.name}
                                </Card.Header>
                                <Card.Meta>{e.country}</Card.Meta>
                                <Card.Meta>{e.searches}</Card.Meta>
                            </Card.Content>
                        </Card>
                    </Segment >)
            })

        )
    }
}

export default CardData