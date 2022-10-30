import React, { FC } from 'react'
import { SimplePokemon } from '../../interfaces/interfaces'
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props{
    pokemon: SimplePokemon
}

export const PokemonCard: FC<Props> = ({pokemon:{ id, image, name, url }}) => {

    const navigate = useRouter()
    
    const onClick = () => {
        navigate.push(`/pokemon/${id}`)
    }

    return (
        <Grid  xs={12} sm={4} md={3} xl={2}>
            <Card 
                isHoverable 
                isPressable 
                onClick={onClick}
            >
                <Card.Body css={{ p:5 }}>
                    <Card.Image 
                        src={ image }
                        width = '100%'
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text >#{id}</Text>
                        <Text transform="capitalize">{name}</Text>
                        
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
