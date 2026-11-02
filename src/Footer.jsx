function Footer() {
  const strA = "hi";
  const strB = " i'm react";
  const boolA = true;
  const boolB = false;
  const objA = {
    //객체는 리액트에서 자녀로 쓸 수 없음.
    a: 1,
    b: 2,
  };
  return (
    <footer>
      <h1>꼬리말</h1>
      <p>{strA + strB}</p>
      <h2>{boolA || boolB}</h2>
      {/* <h3>{objA}</h3> */}
      <h3>{objA.a}</h3>
      <h3>{objA.b}</h3>
    </footer>
  );
}

export default Footer;

//jsx에서는 리턴 뒤에 하나만 들어갈 수 있음.
