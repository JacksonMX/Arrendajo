import React from "react";
import { Paper } from '@mui/material';

const Container = ({background, padding = 0, children}) => {
    return (
        <Paper style={{margin: "5px 0", background, padding: `${padding}px`}}>
            {children}
        </Paper>
    )
}

export default Container;