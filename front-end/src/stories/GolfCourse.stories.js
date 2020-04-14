import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GolfCourse from "../components/GolfCourse/GolfCourse";
import 'bootstrap/dist/css/bootstrap.css';

storiesOf("Appointment", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Appointment Empty", () => (
      <GolfCourse name="Long Golf Course Name Bla Bla" phone_number="438-498-5662" website_url="http://www.golflaseigneurie.ca/"/>
  ))