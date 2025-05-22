import dyr from '../assets/dyr.png';

const Events: React.FC = () => {
  return (
    <>
      <div className="page__content__block">
        <h2 className="header__content__title">Happening now</h2>
        <div id="c2253755" className="csc-default">
          <div className="two row row--2">
            <div className="large-6 medium-6 small-12 column row__item">
              <div id="c2484997" className="csc-default">
                <div className="two row row--2">
                  <div className="large-6 medium-6 small-12 column row__item">
                    <div
                      id="c2484998"
                      className="aubanner hastext aubanner-2   csc-default"
                    >
                      <a href="/">
                        <div className="aubanner-content">
                          <h4>Experience the wild horses – with Peter Lassen</h4>

                          <p style={{fontSize: "13px"}}>
                           Enjoy a truly special experience in Denmark’s most beautiful nature.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="large-6 medium-6 small-12 column last row__item">
                    <div
                      id="c2484999"
                      className="aubanner hastext aubanner-2   csc-default"
                    >
                      <a href="/">
                        <div className="aubanner-content">
                          <h4>Trip with Morten DD</h4>

                          <p style={{fontSize: "13px"}}>
                            Join exciting nature tours with Morten DD. Find schedule and tickets here.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div id="c2237900" className="csc-default">
                <div className="two row row--2">
                  <div className="large-6 medium-6 small-12 column row__item">
                    <div
                      id="c2237898"
                      className="aubanner hastext aubanner-2   csc-default"
                    >
                      <a href="/">
                        <div className="aubanner-content">
                          <h4>Take part in the survey and win cool prizes.</h4>
                          <p style={{fontSize: "13px"}}>
                            We’d like to get to know you and your cultural habits better.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="large-6 medium-6 small-12 column last row__item">
                    <div
                      id="c2237899"
                      className="aubanner hastext aubanner-2 lightgray  csc-default"
                    >
                      <a href="/">
                        <div className="aubanner-content">
                          <h4>Earth Day Celebration</h4>
                          <p style={{fontSize: "13px"}}>
                            Join us for a vibrant and inspiring Earth Day Celebration as we come together to honor and protect our planet!
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="large-6 medium-6 small-12 column last row__item">
              <div
                id="c2253756"
                className="aubanner hastext aubanner-2 bg-dark-magenta  csc-default"
              >
                <a href="/">
                  <img
                    src={dyr}
                    width="625"
                    height="210"
                    alt=""
                    style={{objectFit: "cover"}}
                  />

                  <div className="aubanner-content">
                    <h4>Animals in Cities</h4>
                    <p style={{fontSize: "13px"}}>Join Vimse on an adventure in the city, and meet lots of exciting animals.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
