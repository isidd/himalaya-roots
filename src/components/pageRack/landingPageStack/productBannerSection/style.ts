import styled, { keyframes } from "styled-components"

const beeAnimation = keyframes`
  0% { position: relative; left : 0px }
  25% { position: relative; top : 0px; left: -200px }
  35% { position: relative; top : -70px; left: -200px }
  65% { position: relative; top : -70px; left: 200px }
  70% { position: relative; top : -70px; left: 200px }
  85% { position: relative; top : 0px; left: 200px }
  100% { position: relative; top : 0px; left: 0px }
`
  
export const StyleSpan = styled('span')`
    cursor: pointer;
    animation-name: ${beeAnimation};
    animation-duration: 8s;
    animation-iteration-count: 1;
    `

