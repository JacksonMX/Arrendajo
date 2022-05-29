import React  from "react";
import { Button as MaterialButton } from '@mui/material';

const Button = ({size, variant, color, children}) => {
    return (
        <MaterialButton size={size}>
            {children}
        </MaterialButton>
    )
}

export default Button;