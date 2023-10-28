import styled from 'styled-components';
import Title from './components/Title';
import Button from './components/Button';

/*
* AppWrapper - стилизованный компонент - обертка для приложения
* Стилизованный компонент создается при помощи styled.<название компонента>,
* далее в шаблонных литералах указываются стили. Пример обертки ниже
* */
const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: aliceblue;
`

function App() {
    return (
        <AppWrapper>
            <Title color={'black'}>Заголовок</Title>
            <Button outlined color={'red'}>Кнопка</Button>
        </AppWrapper>
  );
}

export default App;
