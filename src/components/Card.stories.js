import React from "react";
import { storiesOf } from "@storybook/react";

import Card from "./Card";

storiesOf("Atoms/Card", module)
  .addDecorator(story => <div style={{ padding: "2rem" }}>{story()}</div>)
  .add("default", () => <Card>Inner Content</Card>)
  .add("lots of text", () => (
    <Card>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
      doloremque earum dignissimos aliquid animi illo fugiat labore eaque
      incidunt asperiores cumque veritatis laudantium, laboriosam, nesciunt
      soluta dolorum repellat dolorem ipsum? Similique, aliquam. Quis, eos
      porro. Sunt eaque reiciendis laborum cupiditate rem repellat expedita
      labore quasi temporibus ipsum, nam omnis, ratione rerum pariatur tempora.
      Modi delectus reiciendis omnis soluta tenetur consequatur? Provident cum
      necessitatibus, placeat inventore earum soluta perspiciatis excepturi
      consectetur laboriosam qui harum error odit. Molestiae, voluptate ipsum.
      Consequuntur assumenda amet recusandae obcaecati cumque non earum. Saepe
      suscipit vel distinctio! Sit enim veniam nam reprehenderit. Doloribus
      consequuntur mollitia dolore quas, tempora deleniti veritatis, quae
      aliquid vel pariatur praesentium, modi minus dolorum commodi magni
      consectetur quidem similique beatae at unde nisi! Ullam sit accusamus, at
      debitis ut quisquam aut earum quaerat soluta beatae distinctio iure
      expedita vitae cumque sint voluptas in asperiores, harum dignissimos quia
      cum maiores id eius illo. Doloremque! Enim sapiente nam, praesentium
      molestiae perferendis ea quos! Officiis eligendi, placeat deleniti ea eum
      blanditiis corrupti reprehenderit ratione quidem dolorem ex nobis velit
      quaerat nisi rerum quam quas necessitatibus. Enim. Laborum, ipsam
      consequatur. Commodi nemo doloremque repellat earum laboriosam?
      Consequuntur asperiores amet similique cupiditate consectetur iure alias
      ut sit, labore dolorem tenetur ducimus, est eius! Corrupti, sapiente
      quaerat. Unde, fugiat! In aut nemo blanditiis sunt facilis dolor
      explicabo, incidunt vero iure quis modi esse quos laborum eum rem
      quisquam. Officiis autem recusandae quo architecto, repudiandae quasi
      dolorum! Deserunt, ipsum eveniet?
    </Card>
  ));
