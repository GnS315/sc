import React from 'react';
import styled, {css} from 'styled-components';
/*
* Данный стилизованный компонент представляет собой кнопку, имеющую стандартные стили,
* также можно группировать стили и отображать их в зависимости от переданных пропсов.
* Например при передаче пропса outlined и color = {'white'} в компонент Button,
* мы получим прозрачную кнопку с белым текстом и белой рамкой
* */
const StyledButton = styled.button`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  
  ${props => props.primary && css `
    color: ${props => props.color || 'white'};
    background: ${props => props.background || 'white'};
  `}
  
  ${props => props.outlined && css `
    color: ${props => props.color || 'white'};
    border: 1px solid ${props => props.color || 'white'};
    background: transparent;
  `}
`

/*
* Также мы можем расширять стили нашего компонента, например расширим стили кнопки
* сделав её больше
* */

const BigButton = styled(StyledButton) `
  font-size: 32px;
`
/*
* Теперь мы можем вернуть вместо StyledButton BigButton и BigButton унаследует все стили
* от StyledButton
* */

const Button = (props) => {
    return <StyledButton {...props} />
};

export default Button;