import { Container, ContentAnchor, ContentButton } from "./app.styles";
import Dropdown from "./components/Dropdown";

function App() {
  const handleClick = (message: string) => {
    console.log(message);
  };

  return (
    <Container>
      <h1>Dropdown</h1>
      <Dropdown align="right">
        <ContentButton onClick={() => handleClick("Rename")}>
          Rename
        </ContentButton>
        <ContentButton onClick={() => handleClick("Delete")}>
          Delete
        </ContentButton>
        <ContentAnchor
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Share
        </ContentAnchor>
      </Dropdown>
    </Container>
  );
}

export default App;
