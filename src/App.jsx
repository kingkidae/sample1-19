import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

// function Header() {
//   return (
//     // <header>
//     //   {/* <h1>header</h1> */}

//     // </header>
//     <div>
//       <Header />
//       <Body />
//       <Footer />
//     </div>
//   );
// }

// import "./App.css";

function App() {
  const names = "Kay";
  const location = "Daegu";
  return (
    <>
      {/* 빈 프래그먼트라고 함. 하나의 프래그먼트(부모) 밑에 여러 자식들이 있음. */}
      <Header />
      <Body name={names} location={location} />
      <Footer />
    </>
  );
}

export default App;
