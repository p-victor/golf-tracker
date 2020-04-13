import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Search from '../components/Search/Search';
import SearchBar from '../components/SearchBar/SearchBar';
import Results from '../components/Results/Results';
import RegisterGolfCourseInfo from '../components/RegisterGolfCourseInfo/RegisterGolfCourseInfo';

const results = {id: 1, name: "golfcourse", postal_code: "a1ab2b", phone_number: "111-111-1111", website_url:"aaa.com", sponsor: true}


storiesOf("RegisterGolfCourseInfo", module)
  .addParameters({backgrounds: [{name: "dark", value: "222f3e", default: true}]})
  .add(() => <RegisterGolfCourseInfo key={results.id} post={results}/>)

// storiesOf("Search", module)
//   .addParameters({backgrounds: [{name: "dark", value: "222f3e", default: true}]})
//   .add(() => <Search results={results} setKeyword={action("setKeyword")}/>)

// storiesOf("SearchBar", module)
//   .addParameters({backgrounds: [{name: "dark", value: "222f3e", default: true}]})
//   .add(() => <SearchBar onSearch={keyword => action(`setKeyword(${keyword})`)}/>)

// storiesOf("Results", module)
//   .addParameters({backgrounds: [{name: "dark", value: "222f3e", default: true}]})
//   .add(() => <Results key={results.id} results={results}/>)


  