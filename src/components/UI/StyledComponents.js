import styled, { css, keyframes } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  height: 2em;
  border-radius: 4px;
  border: 2px solid #72d4a2;
  color: #72d4a2;
  margin: 0 1em 1em;
  cursor: pointer;
  box-shadow: 1px 1px 1px #72d4a2;
  outline: none;
:hover {
  background: #72d4a2;
  border: 2px solid #f5fffa;
  color: #f5fffa;
  box-shadow: 1px 1px 1px #f5fffa;
}
:active {
  transform: translateY(2px);
}
`

export const Container = styled.div`
  text-align: center;
`

export const Input = styled.input`
  border: 1px solid #72d4a2;
  border-radius: 4px;
  outline: none;
:focus {
  background-color: #b9f4d6;
}
`
