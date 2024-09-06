import React from "react";
import { data } from "./data";
import "../Question&Answer/QAStyle.scss";

export function QA() {
  const openDropdown = (index, e) => {
    const subTitle = document.querySelectorAll(".card > .subTitle");
    console.log(subTitle[index]);
    console.log(index);
    if (
      subTitle[index].style.display === "" ||
      subTitle[index].style.display === "none"
    ) {
      subTitle[index].style.display = "block";
    } else {
      subTitle[index].style.display = "none";
    }

    for (const i of subTitle) {
      if (i !== subTitle[index]) {
        console.log(i, "i");
        i.style.display = "none";
      }
    }
  };
  return (
    <>
      <section className="QA">
        <p className="heading">Frequently Asked Questions</p>
        {data.map((data, index) => (
          <div className="card" key={index}>
            <article className="title" onClick={openDropdown.bind(this, index)}>
              <span>{data.title}</span>
              <span>+</span>
            </article>
            <article className="subTitle">{data.subTitle}</article>
          </div>
        ))}
      </section>
    </>
  );
}
