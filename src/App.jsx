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
      {/* 빈 프래그먼트라고 함. 하나의 프래그먼트(부모) 밑에 여러 자식들이 있음. */}
      <Header />
      <h1>헬로우 리액트</h1>
      <Body />
      <Footer />
    </>
  );
}

export default App;
