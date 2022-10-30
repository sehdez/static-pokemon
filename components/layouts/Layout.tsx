import React, { FC, PropsWithChildren, } from 'react'
import Head from 'next/head'
import { Navbar } from '../ui/Navbar';

type Props = PropsWithChildren & {
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{ title || 'PokemonApp' }</title>
                <meta name='author' content='sehdez' />
                <meta name='description' content={`${title}`} />
                <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
            </Head>

            {/* NavBar */}
            <Navbar />

            <main style={{
                padding:'0px 10px'
            }} >
                { children }
            </main>
        </>
    )
}
