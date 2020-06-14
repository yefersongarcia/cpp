import React from 'react'

import { Container, Image, Img, Logo, Description, Title, 
    Data, Section, Texto
} from './styled'

const Item = ({ image, logo, title, name, date, view }) => {
    return(
        <Container>
            <Image>
                <Img src={image}/>
            </Image>
            <Description>
                <Section>
                    <Logo src={logo}/>
                </Section>
                <Data>
                    <div>
                        <Title>{title}</Title>
                    </div>
                    <div>
                        <Texto>{name}</Texto>
                        <Texto>{view} vistas</Texto>
                        <Texto>{date}</Texto>
                    </div>
                </Data>
            </Description>
        </Container>
    )
}

export default Item;
