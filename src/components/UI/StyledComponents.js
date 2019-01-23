import styled, { css } from 'styled-components'

export const Button = styled.button`
background: transparent;
height: 2em;
border-radius: 4px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em 1em;
cursor: pointer;
:hover {
  box-shadow: 2px 2px 2px #bbbbbb;
}
:active {
  transform: translateY(2px);
}
`

export const Container = styled.div`
  text-align: center;
`

export const Input = styled.input`
`
