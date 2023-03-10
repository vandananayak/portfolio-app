import React from "react";
import ScrollingCard from "./ScrollingCard";

const Contact = () => {
  const Contact = () => {
    return (
      <>
        <div>
          <h1>Contact</h1>
          <h3>
            <ul>
              <li>
                <u>
                  <a
                    classname="contact"
                    href="https://www.linkedin.com/in/vandana-nayak-094/"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    LinkedIn
                  </a>
                </u>
              </li>

              <li>
                <u>
                  <a
                    href="https://github.com/vandananayak"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Github
                  </a>
                </u>
              </li>
            </ul>
          </h3>
        </div>
      </>
    );
  };
  return (
    <div>
      <ScrollingCard data={Contact()}></ScrollingCard>
    </div>
  );
};

export default Contact;
