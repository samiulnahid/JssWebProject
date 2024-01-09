/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Bars } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className="loader__wrapper">
      <Bars
        height="80"
        width="80"
        color="#00204a"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass="loader__wrapper"
        visible={true}
      />
    </div>
  );
}
