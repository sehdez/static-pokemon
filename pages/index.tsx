import { NextPage, GetStaticProps } from "next";
import { Grid } from "@nextui-org/react";

import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonsResponse, SimplePokemon } from '../interfaces/interfaces';
import { PokemonCard } from "../components/pokemon";

interface Props {
    pokemons: SimplePokemon[];
}

const HomePage: NextPage<Props> = ({pokemons}) => {
    
    return (
        <Layout title='Listado de Pokémons'>
            <Grid.Container gap={2} justify='flex-start' >
            {
                pokemons.map((pokemon, index) => (
                    <PokemonCard pokemon={pokemon} key={ pokemon.name+index } />
                ))
            }  
            </Grid.Container>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { data: { results } } = await  pokeApi.get<PokemonsResponse>('/pokemon?limit=151');
    const pokemons: SimplePokemon[] = results.map((pokemon, index) =>({
        ...pokemon,
        id : index+1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`
    }))

    return {
        props: {
            pokemons
        }
    }
}
export default HomePage;