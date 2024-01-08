/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Data } from "./props";

const BookList = () => {
  return (
    <>
      <h1>Best Seller</h1>
      <section className="booklist">
        {Data.map((x, index) => {
          return <Book {...x} key={x.id} number={index} />;
        })}
      </section>
    </>
  );
};

// const EventExamples = () => {
//   const handleInput = () => {
//     console.log("inside input");
//   };

//   const handleClick = () => {
//     alert("button dabad diya bhai");
//   };
//   return (
//     <section>
//       <form>
//         <h2>Standard Form</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: "1rem 0" }}
//           onChange={handleInput}
//         />
//       </form>
//       <button onClick={handleClick}>click me</button>
//     </section>
//   );
// };

const Book = (props) => {
  const { img, title, author, number } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number"> {`# ${number + 1}`}</span>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
