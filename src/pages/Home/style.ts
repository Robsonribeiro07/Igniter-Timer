import styled from "styled-components";

export const HomeContainer = styled.main`

height: 100%;
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem
}
`   
export const FormContainer = styled.div`
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme['gray-100']};
  flex-wrap: wrap;
  font-weight: bold;
  font-size: 1.125rem;

`


export const CountDownContainer = styled.div`

    font-family: 'Roboto mono';
    font-size: 10rem;
    line-height: 8rem;
    color: ${props => props.theme['gray-100']};
    display: flex;
    
    gap: 1rem;

    span {
        background: ${props => props.theme['gray-700']};
        padding: 2rem 1rem;
        border-radius: 10px 
    }

`
const BaseInput = styled.input`

background-color: transparent;
height: 2.5rem;
border: 0;
border-bottom: 2px solid ${props => props.theme['gray-500']};
font-weight: bold;
font-size: 1.125rem;
padding: 0 0.5rem;
color: ${props => props.theme['gray-100']};

 &::placeholder {
    color: ${props => props.theme['gray-200']};
 }

 &:focus {
    box-shadow: none;
    border-color: ${props => props.theme['green-500']};
    transition: border-color 0.5s;
 }
 &::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

&::-webkit-datalist-button {
  display: none;
  -webkit-appearance: none;
}
`


export const TaskInput = styled(BaseInput)`
  flex: 1;


`

export const MinutesAmoutn = styled(BaseInput) `
  width: 4rem;
`
export const Separator = styled.div`

  padding: 2rem 0;
  color: ${props => props.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

`
export const StartCountDownButton = styled.button` 

    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;
    background-color: ${props => props.theme['green-500']};

    color: ${props => props.theme['gray-600 ']};


    &:hover {
        background: ${props => props.theme['green-700']};
    }


`