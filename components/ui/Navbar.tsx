import NextLink from 'next/link'
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"
import { useRouter } from "next/router";
import Image from "next/image";


export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <div style={{
            display:'flex',
            width:'100%',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            padding:'0px 20px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image 
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
                alt="pokemon"
                width={70}
                height={70}
            />
            <NextLink 
                href="/" 
                passHref 
                style={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems:'center'
                }} >
                <Text color='white' h2>P</Text>
                <Text color='white' h3>okémon</Text>
            </NextLink>
            <Spacer css={{ flex: 1 }} />
            <NextLink href='/favorites'>
                <Text color='white' h3>Favoritos</Text>
            </NextLink>

        </div>
    )
}
