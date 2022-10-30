import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import React from 'react'
import { pokeApi } from '../../api';
import { Layout } from '../../components/layouts'
import { PokemonFull, Sprites } from '../../interfaces/interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

interface Props {
    pokemon: {
        name: string
        sprites: Sprites
    };
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    return (
        <Layout title={pokemon.name}>
            <Grid.Container
                css={{ marginTop:'5px',  }}
                gap={  2 }
            >
                <Grid xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <Card.Image 
                                src={pokemon.sprites.other?.dream_world.front_default || ''}
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display:'flex', justifyContent:'space-between' }}>
                            <Text h1 transform='capitalize'>{ pokemon.name }</Text>
                            <Button color='gradient' ghost>
                                Guardar en favoritos
                            </Button>
                            
                        </Card.Header>
                        <Card.Body>
                            <Text size={30}>Sprites</Text>
                            <Container css={{ flexDirection:'row', display:'flex' }} gap={0} >
                                <Image 
                                    src={pokemon.sprites.front_default} 
                                    alt={pokemon.name}
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image 
                                    src={pokemon.sprites.back_default} 
                                    alt={pokemon.name}
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image 
                                    src={pokemon.sprites.back_shiny} 
                                    alt={pokemon.name}
                                    width={ 100 }
                                    height={ 100 }
                                />
                                <Image 
                                    src={pokemon.sprites.back_shiny} 
                                    alt={pokemon.name}
                                    width={ 100 }
                                    height={ 100 }
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>

            </Grid.Container>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemon151 = [...Array(151)].map( (value, index ) => `${ index + 1 }` ) 

    return {
        paths: pokemon151.map( id => ({
            params: { id }
        }) ),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id:string }

    const { data } = await pokeApi.get<PokemonFull>(`/pokemon/${ id }`)
    const pokemon = {
        name: data.name,
        sprites: data.sprites
    }

    return {
        props: {
            pokemon: pokemon
        }
    }
}

export default PokemonPage;