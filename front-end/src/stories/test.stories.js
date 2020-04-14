import React from 'react';
import { action } from '@storybook/addon-actions';
import RegisterGolfCourseInfo from '../components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';
export default {
  title: 'Register Golf Course Info',
  component: RegisterGolfCourseInfo
};
const results = {id: 1, name: "golfcourse", postal_code: "a1ab2b", phone_number: "111-111-1111", website_url:"aaa.com", sponsor: true}
export const DisplayRegisterGolfCourseInfo = () => <RegisterGolfCourseInfo key={results.id} post={results}/>