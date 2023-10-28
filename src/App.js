import styled from 'styled-components';
import Title from './components/Title';
import Button from './components/Button';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: antiquewhite;
`

function App() {
    return (
        <AppWrapper>
            <Title color={'white'}>Заголовок</Title>
            <Button outlined color={'red'}>Кнопка</Button>
        </AppWrapper>
  );
}

export default App;
