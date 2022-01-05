import React from "react";
import styled from "styled-components";


function Description(props) {
    return (
      <P>{ props.children }</P>
    );
  }
  

const P = styled.p`
    font-size: 1.25rem;
    margin: 2rem 0 2rem 0;
`;  
 



export default Description;