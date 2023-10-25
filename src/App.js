import styled from 'styled-components'
import Title from "./components/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: antiquewhite;
`

function App() {
    return (
        <AppWrapper>
            <Title color={'white'}> asdasd</Title>
        </AppWrapper>
  );
}

export default App;
