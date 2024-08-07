import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap';

const Player = ({
    name,
    team,
    nationality,
    jerseyNumber,
    age,
    imageUrl
}) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <CardImg variant = 'top' src={imageUrl} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>
                Team: {team}
                <br />
                Nationality: {nationality}
                <br />
                Jersey Number: {jerseyNumber}
                <br />
                Age: {age}
                </CardText>
            </CardBody>
        </Card>
    );
};

Player.defaultProps = {
    name: 'Unknown Player',
    team: 'Unknown Team',
    nationality: 'Unknown Nationality',
    jerseyNumber: 0,
    age: 0,
    imageUrl: 'https://via.placeholder.com/150'
}

export default Player;