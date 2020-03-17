import styled from 'styled-components'

//define the styled component
const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
color:${props=>(props.cart?"var(--mainYellow)":"var(--lightBlue)")};
border-radius:0.5rem;
border-color:${props=>(props.cart?"var(--mainYellow)":"var(--lightBlue)")};
cursor:pointer;
padding:0.2rem 0.5rem;
marging:0.2rem 0.5rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:${props=>(props.cart?"var(--mainYellow)":"var(--lightBlue)")};
    color:var(--mainBlue);
}
&:focus{
    outline:none;
}
`;

export default ButtonContainer;