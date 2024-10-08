import { Box, Container } from "@mui/material";
import { CSSProperties, ReactNode } from "react";

export function ContainerToFixHeader({children,style}:{style?:CSSProperties,children:ReactNode}){
    return(
        <Box  style={{ minHeight:'100vH',paddingTop: '64px', ...style,display:"flex", }} >
            {children}
        </Box>
    )
}