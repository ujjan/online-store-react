import Styled from "styled-components";
/* this is how we can use styled componets to style buttons and 
diffrent parts of our application
 */
export const CartButton = Styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.1rem solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out; 
&:hover{
  background: var(--lightBlue);
  color: var(--MainBlue);
}
&:focus{
  outline: none;
  
}
`;
