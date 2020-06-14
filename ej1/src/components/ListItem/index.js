import React from 'react'
import Item from '../Item'

import { List } from './styled'


const data = [
    {
        image: 'https://i.ytimg.com/an_webp/co9zWYa2N0c/mqdefault_6s.webp?du=3000&sqp=CJiHkPcF&rs=AOn4CLDSint3qsIbbNJw9Ah4ph5n8aM0HA',
        logo: 'https://yt3.ggpht.com/a-/AOh14Gju11PNJT1RdZ_ZJZVaQXqbRHYVDXs1JAI8LQ=s68-c-k-c0x00ffffff-no-rj-mo',
        title: 'Qué lenguajes de programación usa SpaceX',
        name: 'Platzi',
        date: 'hace 18 horas',
        view: 12.432
    },
    {
        image: 'https://i.ytimg.com/an_webp/co9zWYa2N0c/mqdefault_6s.webp?du=3000&sqp=CJiHkPcF&rs=AOn4CLDSint3qsIbbNJw9Ah4ph5n8aM0HA',
        logo: 'https://yt3.ggpht.com/a-/AOh14Gju11PNJT1RdZ_ZJZVaQXqbRHYVDXs1JAI8LQ=s68-c-k-c0x00ffffff-no-rj-mo',
        title: 'Qué lenguajes de programación usa SpaceX',
        name: 'Platzi',
        date: 'hace 18 horas',
        view: 12.432
    }
]

export const ListItem = () => {
    return(
        <List>
            {
                data.map( (elem, key)=>{
                    return <Item key={key} {...elem}/>
                })
            }
        </List>
    )
}