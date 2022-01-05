import React from "react";
import styled from "styled-components";


function DemoWrapper(props) {
    return (
      <div>
        <Wrapper>
             <ComponentWrapper>{ props.children }</ComponentWrapper>
        </Wrapper>
        <Links>
        </Links>
      </div>
    );
  }
  

const Wrapper = styled.div`
    margin-bottom: 1rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: 1px solid black;
`;  

const Title = styled.p`
    padding: 1rem;
    margin: 0px;
    background-color: rgb(250, 250, 250);
    font-weight: 600;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
`; 

const ComponentWrapper = styled.div`
    display: flex;
    min-height: 250px;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient( 
    45deg,var(--ds-background-sunken,#f9f9fa) 25%,transparent 25% ),linear-gradient( 
    135deg,var(--ds-background-sunken,#f9f9fa) 25%,transparent 25% ),linear-gradient( 
    45deg,transparent 75%,var(--ds-background-sunken,#f9f9fa) 75% ),linear-gradient( 
    135deg,transparent 75%,var(--ds-background-sunken,#f9f9fa) 75% );
    background-size: 20px 20px;
    background-position: 0px 0px, 10px 0px, 10px -10px, 0px 10px;
`; 

const Links = styled.div`
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
`;  





export default DemoWrapper;