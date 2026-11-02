function Body() {
  const numA = 1;
  const numB = 2; // jsx에서는 하나의 최상위 태그를 남겨야 하며(부모가 하나여야 함.) 상수 설정이나 변수 설정은 리턴 위에서 해야 함.
  return (
    <div>
      <h1>본문</h1>
      {/* <h2>
        numA + numB {numA} {numB} {numA + numB}
      </h2> */}
    </div>
  );
}

export default Body;
