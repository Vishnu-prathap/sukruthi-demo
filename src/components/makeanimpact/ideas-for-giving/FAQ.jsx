import { useState } from "react";

const FAQ = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div class="card story-text">
      <div
        class="card-header"
        onClick={(e) => {
          setShow(!show);
          console.log(show);
        }}
      >
        <h5 class="mb-0">
          <button class="btn ">
            <strong>
              {props.index + 1}. {props.question}
            </strong>
          </button>
        </h5>
      </div>

      <div class={show ? "collapse show" : "collapse"}>
        <div class="card-body">{props.answer}</div>
      </div>
    </div>
  );
};
export default FAQ;
