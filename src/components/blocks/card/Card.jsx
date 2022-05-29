import React  from "react";
import Container from "../container/Container";
import Text from "../text/Text";


export const Card = ({background, padding = 20}) => {
    return (
        <Container background={background} padding={padding}>
            <div className="text-only">
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </div>
            <div className="buttons-only">
            </div>
        </Container>
    )
}