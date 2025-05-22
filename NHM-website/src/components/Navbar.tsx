import React from 'react';

const Navbar: React.FC = () => {
    return (
      <nav className="nav nav--has-active-item nav--site-nav light--dark">
        <a
          className="button button--dimmed screenreader-only screenreader-only--show-on-focus"
          href="#content"
        >
          Gå til sideindhold
        </a>
        <h1 className="nav__home">
          <a className="nav__home__title" href="/">
            Naturhistorisk Museum
          </a>
        </h1>
        <div className="nav__site">
          <div className="nav__items">
            <a className="nav__item nav__item--active" href="/solution">
              Expedition to Africa
            </a>
          </div>
          <button
            className="nav__toggle"
            aria-haspopup="true"
            aria-expanded="false"
            title="Menu"
          >
            Menu
          </button>
        </div>
        <div className="nav__search" role="search">
          <form className="form">
            <div className="form__inline-submit">
              <div className="form__field form__field--inline-label">
                <label htmlFor="search-no-utilities">Search</label>
                <input id="search-no-utilities" type="search" />
              </div>
              <input
                className="form__inline-submit__button"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
        <div className="nav__utilities nav__utilities--has-only-search-toggle">
          <button
            className="nav__search-toggle nav__item nav__item--icon nav__item--icon--hide-label"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Show search
          </button>
        </div>
      </nav>
    );
};

export default Navbar;