import React from "react";
import { Title, Hero, HeroBody, Container, Subtitle } from "bloomer";

class Header extends React.Component {
    render() {
        return (
            <a href="/">
                <Hero isColor="info">
                    <HeroBody>
                        <Container hasTextAlign="centered">
                            <Title>New York Times Article Scrubber</Title>
                            <Subtitle>
                                Search and Save Articles...
                            </Subtitle>
                        </Container>
                    </HeroBody>
                </Hero>
            </a>
        );
    }
}

export default Header;