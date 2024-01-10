import React from 'react';

export default function EventSearch() {
  return (
    <section>
      <form className="search__form d-flex justify-between w-100 ">
        <input type="text" className="w-100  d-block" />

        <button type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </section>
  );
}
