// function Body() {
//   const numA = 1;
//   const numB = 2; // jsx에서는 하나의 최상위 태그를 남겨야 하며(부모가 하나여야 함.) 상수 설정이나 변수 설정은 리턴 위에서 해야 함.
//   return (
//     <div>
//       <h1>본문</h1>
//       {/* <h2>
//         numA + numB {numA} {numB} {numA + numB}
//       </h2> */}
//     </div>
//   );
// }

// export default Body;

// function Body() {
//   const num = 19;
//   return (
//     <>
//       <h2>
//         {num}은(는) {num % 2 === 0 ? "짝수" : "홀수"}이다.
//         {/* num을 2로 나눴을 때 나머지가 0이면(?) 짝수 아니면(:) 홀수이다 라는 뜻  */}
//       </h2>
//       <br />
//       <p>조건문을 이용한 조건부 렌더링</p>

//     </>
//   );
// }

// export default Body;

// function Body() {
//   const num = 200;

// 인라인 스타일로 색상편집
//   if (num % 2 === 0) {
//     return <div>{num}is even.</div>;
//   } else {
//     <div>{num} is odd.</div>;
//   }
// }
// export default Body;

//css로 색상편집
// import "./body.css";
// function Body() {
//   return (
//     // <div style={{ background: "red", color: "blue" }}>
//     <div className="body">
//       {/* 백그라운드는 배경색, 컬러는 글자색 */}
//       <h1>Body</h1>
//     </div>
//   );
// }
// export default Body;

//tailwind css활용해서 색상편집
function Body(name) {
  console.log(name);
  return (
    <div className="body">
      <h1 className="text-pink-700">Body {name}</h1>
    </div>
  );
}
export default Body;
