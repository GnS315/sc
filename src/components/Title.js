import React from 'react';
import styled from 'styled-components'
/*
* Данный стилизованный компонент представляет собой заголовок,
* где в пропсах можно передать цвет этого заголовка
* */
const StyledTitle = styled.h1`
color: ${({color}) => color || 'white'};
`

const Title = (props) => {
    return <StyledTitle{...props} />
};

export default Title;