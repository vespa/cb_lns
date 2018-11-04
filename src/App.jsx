import React, { Component } from 'react';
import Card from './components/Card';
import cabifyLogo from './images/cabify-logo.svg';
import './styles/App.css';

class App extends Component {
  constructor(args) {
    super(args);
    this.state = {
      name: '',
      jobDescription: '',
      phone: '',
      eMail: '',
      website: 'www.cabify.com',
      address: '',
    };
  }

  render() {
    return (
      <div className="mainWrapper row">
        <article className="businessCard col col6">
          <figure className="businessCard-badge">
            <a className="businessCard-badge-logo" href="http://www.cabify.com">
              <img src={cabifyLogo} alt="Cabify" />
            </a>
          </figure>
          <h1 className="title-main">Request your business card</h1>
          <Card {...this.state} />
        </article>
        <article className="builder col col6">
          <form className="form" action="">
            <div className="row">
              <div className="formField-input active col col12">
                <div className="input">
                  <input type="text" name="fullname" value="Laura Sánchez" />
                  <label htmlFor="fullname">Full name</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              {/* you probably need to add active/focus/disabled classNames */}
              <div className="formField-input active focus col col12">
                <div className="input">
                  <input type="text" name="jobdescription" value="Fronte" />
                  <label htmlFor="jobdescription">Job description</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium row-gutterMedium">
              <div className="col col3">
                {/* select field will be placed here */}
              </div>
              <div className="formField-input col col9">
                <div className="input">
                  <input type="tel" name="ponenumber" />
                  <label htmlFor="ponenumber">Phone number</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="formField-input col col12">
                <div className="input">
                  <input type="email" name="email" />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="formField-input active disabled col col12">
                <div className="input">
                  <input type="text" name="website" value="www.cabify.com" />
                  <label htmlFor="website">Website</label>
                </div>
              </div>
            </div>
            <div className="row row-separationMedium">
              <div className="formField-input active col col12">
                <div className="input">
                  <input type="text" name="address" value="Calle Pradillo 42. CP: 28002. Madrid" />
                  <label htmlFor="address">Address</label>
                </div>
              </div>
            </div>
            <div className="row row-separationHuge">
              <input className="button button-full button-primary disabled" type="submit" value="Request" />
            </div>
          </form>
        </article>
      </div>
    );
  }
}

export default App;
