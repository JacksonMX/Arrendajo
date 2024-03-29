import React from "react";
import { Element, useEditor } from "@craftjs/core";
import { Box, Typography, Grid, Button as MaterialButton } from "@material-ui/core";
import Button from "../../widgets/Button/Button";
import Text from "../../widgets/Text/Text"
import Container from "../../widgets/Container/Container";
import Card from "../../widgets/Card/Card"

const Toolbox = () => {
    const { connectors, query } = useEditor();

    return (
        <Box px={2} py={2}>
            <Grid container direction="column"  alignItems="center" justifyContent="center" spacing={1}>
                <Box pb={2}>
                    <Typography>Drag to add</Typography>
                </Box>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Button text="Click me" size="small" />)} variant="contained">Button</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                <MaterialButton ref={ref=> connectors.create(ref, <Text text="Hi world" />)} variant="contained">Text</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Element is={Container} padding={20} canvas />)} variant="contained">Container</MaterialButton>
                </Grid>
                <Grid container direction="column" item>
                    <MaterialButton ref={ref=> connectors.create(ref, <Card />)} variant="contained">Card</MaterialButton>
                </Grid>
            </Grid>
        </Box>
    )
};

export default Toolbox;