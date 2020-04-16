import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import GolfCourse from "../components/GolfCourse/GolfCourse";
import StoryRouter from 'storybook-react-router';
import { addDecorator } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.css';

addDecorator(StoryRouter())

storiesOf("Golf Course", module)
  .add("Appointment Empty", () => (
    <GolfCourse className="show" name="Long Golf Course Name Bla Bla" postal_code="J3H6C6" phone_number="438-498-5662" website_url="http://www.golflaseigneurie.ca/" />
  ))
  .add("Golf Course Sponsored", () => (
    <GolfCourse name="Long Golf Course Name Bla Bla" sponsor={true} postal_code="J3H6C6" phone_number="438-498-5662" website_url="http://www.golflaseigneurie.ca/" />
  ))