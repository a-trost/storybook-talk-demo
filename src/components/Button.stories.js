import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, select } from "@storybook/addon-knobs/react";
import Button from "./Button";
import buttonDocs from "./buttonDocs.md";

export const actions = {
  action: action("onButtonClick")
};

const buttonSizes = {
  small: "small",
  medium: "medium",
  large: "large"
};

storiesOf("Button", module)
  .addDecorator(story => <div style={{ padding: "2rem" }}>{story()}</div>)

  .addDecorator(withKnobs)
  .add(
    "solid",
    () => {
      const sizeSelector = select("size", buttonSizes, "medium");
      return (
        <div className="row-of-items">
          <Button color="grey" size={sizeSelector} {...actions}>
            Button Text
          </Button>
          <Button color="red" size={sizeSelector} {...actions}>
            Button Text
          </Button>
          <Button color="blue" size={sizeSelector} {...actions}>
            Button Text
          </Button>
          <Button color="green" size={sizeSelector} {...actions}>
            Button Text
          </Button>
        </div>
      );
    },
    {
      notes: { markdown: buttonDocs }
    }
  )
  .add(
    "outline",
    () => {
      const sizeSelector = select("size", buttonSizes, "medium");
      return (
        <div className="row-of-items">
          <Button color="grey" type="outline" size={sizeSelector} {...actions}>
            Button Text
          </Button>
          <Button color="red" type="outline" size={sizeSelector} {...actions}>
            Button Text
          </Button>
          <Button color="blue" type="outline" size={sizeSelector} {...actions}>
            Button Text
          </Button>
          <Button color="green" type="outline" size={sizeSelector} {...actions}>
            Button Text
          </Button>
        </div>
      );
    },
    {
      notes: { markdown: buttonDocs }
    }
  );
