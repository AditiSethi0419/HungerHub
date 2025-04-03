import React from 'react';
import { useRouteError } from 'react-router-dom';

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const err = useRouteError();
    console.log(err);
  return (
    <div><h1>OOPS! Something went wrong</h1><h4>{err.status}:{err.statusText}</h4></div>
  )
}

export default index