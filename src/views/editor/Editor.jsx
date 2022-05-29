import { Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import Container from '../../components/blocks/container/Container'
import SettingsPanel from '../../components/blocks/SettingPanel/SettingPanel'
import Toolbox from '../../components/blocks/ToolsBox/ToolBox'
import TopBar from '../../components/blocks/TopBar/TopBar'

const Editor = () => {
    return (
        <section style={{margin: "0 auto", width: "800px"}}>
            <Typography variant="h5" align="center">A super simple page editor</Typography>
            <Grid spacing={3} style={{paddingTop: "10px"}}>
                <TopBar />
                <Grid item xs>
                    <Container padding={5} background="#eee">
                        <Card />
                    </Container>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <Toolbox />
                        <SettingsPanel />
                    </Paper>          
                </Grid>
            </Grid>
        </section>
    )
}

export default Editor
