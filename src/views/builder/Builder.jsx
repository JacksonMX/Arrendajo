import React from 'react';
import {Typography, Paper, Grid} from '@material-ui/core';
import Topbar from '../../components/builder/tools/TopBar/TopBar';
import Toolbox from '../../components/builder/tools/TookBox/ToolBox';
import SettingsPanel from '../../components/builder/tools/SettingsPanel/SettingsPanel';
import Container from '../../components/builder/widgets/Container/Container';
import Card, { CardTop, CardBottom } from '../../components/builder/widgets/Card/Card';
import Button from '../../components/builder/widgets/Button/Button';
import Text from '../../components/builder/widgets/Text/Text'
import { Editor, Frame, Element } from "@craftjs/core";


const Builder = () => {
    return (
        <div style={{margin: "0 auto", width: "800px"}}>
            <Typography variant="h5" align="center">A super simple page editor</Typography>
            <Editor resolver={{Card, Button, Text, Container,CardTop, CardBottom }}> 
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Frame>
                            <Element is={Container} padding={5} background="#eee" canvas>
                                    <Card /> 
                                    <Button size="small" variant="outlined">Click</Button>
                                    <Text size="small" text="Hi world!" />
                                    <Element is={Container} padding={2} background="#999" canvas>
                                    <Text size="small" text="It's me again!" />
                                    </Element>
                                </Element>
                        </Frame>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper>
                            <Toolbox />
                            <SettingsPanel />
                        </Paper>          
                    </Grid>
                </Grid>
            </Editor>
        </div>
    );
}

export default Builder;