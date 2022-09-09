import React, { useEffect, useRef } from "react";

const grid = () => {
  const ref = useRef<any>();
  const row = 4;

//   useEffect(() => {
//     const { current: grid } = ref;
//     const result = [...grid.children].reduce((resultArray, item, index) => {
//       const chunkIndex = Math.floor(index / row);

//       if (!resultArray[chunkIndex]) {
//         resultArray[chunkIndex] = []; // start a new chunk
//       }

//       resultArray[chunkIndex].push(item);

//       return resultArray;
//     }, []);
//     result.forEach((el, i) => {
//       if (i % 2 == 0) {
//         el.forEach((e, idx) => {
//           if (idx % 2 == 0) e.classList.add("big");
//         });
//       } else {
//         el.forEach((e, idx) => {
//           if (idx % 2 == 1) e.classList.add("big");
//         });
//       }
//     });
//   }, []);

  return (
    <div className="grid w-full grid-cols-4 bg-red-600 gap-4 p-4" ref={ref}>
      <div className="box w-full h-32 bg-green-500">1</div>
      <div className="box w-full h-32 bg-green-500">2</div>
      <div className="box w-full h-32 bg-green-500">3</div>
      <div className="box w-full h-32 bg-green-500">4</div>
      <div className="box w-full h-32 bg-green-500">5</div>
      <div className="box w-full h-32 bg-green-500">6</div>
      <div className="box w-full h-32 bg-green-500">7</div>
      <div className="box w-full h-32 bg-green-500">8</div>
      <div className="box w-full h-32 bg-green-500">9</div>
      <div className="box w-full h-32 bg-green-500">10</div>
      <div className="box w-full h-32 bg-green-500">11</div>
      <div className="box w-full h-32 bg-green-500">12</div>
      <div className="box w-full h-32 bg-green-500">13</div>
      <div className="box w-full h-32 bg-green-500">14</div>
      <div className="box w-full h-32 bg-green-500">15</div>
      <div className="box w-full h-32 bg-green-500">16</div>
      <div className="box w-full h-32 bg-green-500">17</div>
      <div className="box w-full h-32 bg-green-500">18</div>
      <div className="box w-full h-32 bg-green-500">19</div>
      <div className="box w-full h-32 bg-green-500">20</div>
      <div className="box w-full h-32 bg-green-500">21</div>
      <div className="box w-full h-32 bg-green-500">22</div>
      <div className="box w-full h-32 bg-green-500">23</div>
      <div className="box w-full h-32 bg-green-500">24</div>
    </div>
  );
};

export default grid;
