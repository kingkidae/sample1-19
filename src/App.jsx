import Body from "./Body";
import Footer from "./Footer";

function Header() {
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <h1>헬로우 리액트</h1>
      <Body />
      <Footer />
    </>
  );
}

export default App;
