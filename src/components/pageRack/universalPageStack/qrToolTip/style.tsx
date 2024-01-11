import { Box } from "@mui/material"
import styled, { keyframes } from "styled-components"

const toolTipAnimation = keyframes`
 0% { width: 60px;  }
 5% { width: 320px; background : #658C4A;color:#fff; height : 95px;}
 100% { width: 320px; background : #658C4A;color:#fff; height : 95px;}
`

const toolTipAnimation1 = keyframes`
 0% { color:#658C4A}
 25% { color:#e1bc9e}
 50% { color:#658C4A}
 70% { color:#e1bc9e}
 100% { color:#658C4A}
`

export const StyledHomeBox = styled(Box)`
    cursor:pointer;
    width:60px;
    overflow : hidden;
    display: inline-block; 
    white-space: nowrap;
    border-radius : 10px;
    height : 60px;
    z-index:200;
    position:fixed;
    bottom:84px;
    right:5px;
    alignItems:center;
    animation-name: ${toolTipAnimation1};
    animation-duration: 1s;
    animation-iteration-count: 10;
    &:hover {
        animation-name: ${toolTipAnimation};
        animation-duration: 20s;
        right: 0;
        border-top-right-radius : 0;
        border-bottom-right-radius : 0;
    }

`