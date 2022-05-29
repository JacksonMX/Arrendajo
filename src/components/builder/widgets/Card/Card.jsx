import React  from "react";
import Button from "../Button/Button";
import Container from "../Container/Container";
import Text from "../Text/Text";

const Card = ({background, padding = 20}) => {
    return (
        <Container background={background} padding={padding}>
            <div className="text-only">
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </div>
            <div className="buttons-only">
                <Button size="small" text="Learn more" variant="contained" color="primary" />
            </div>
        </Container>
    )
}

export default Card;