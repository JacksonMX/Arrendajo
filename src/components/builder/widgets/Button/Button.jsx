import React  from "react";
import { useNode } from "@craftjs/core";
import { Button as MaterialButton } from "@material-ui/core";

const Button = ({size, variant, color, children}) => {
    const { connectors: {connect, drag} } = useNode();

    return (
        <MaterialButton ref={ ref => connect(drag(ref))} size={size} variant={variant} color={color}>
            {children}
        </MaterialButton>
    )
}

export default Button;