import { storiesOf } from "@storybook/react";
import React from "react";

storiesOf("Styles/Typography", module)
  .addDecorator(story => <div style={{ padding: "2rem" }}>{story()}</div>)
  .add("Styles", () => (
    <>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <br />
      <p>Body Copy</p>
      <a href="/">Link Text</a>
    </>
  ));
