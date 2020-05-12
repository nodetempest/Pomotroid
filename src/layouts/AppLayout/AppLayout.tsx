import React, { FunctionComponent } from "react"

import { NavBar } from "@layouts"
import { Box } from "@styled"

import { SlideTransition } from "./SlideTransition"

export const AppLayout: FunctionComponent<{}> = ({ children }) => {
    return (
        <Box
            overflow="hidden"
            height={480}
            width={360}
            ml={10}
            mt={10}
            bgcolor="bg.dark"
            position="relative"
        >
            <NavBar />
            <Box height={0.86} width={1} position="relative">
                <SlideTransition>{children}</SlideTransition>
            </Box>
        </Box>
    )
}