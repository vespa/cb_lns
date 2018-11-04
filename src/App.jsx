import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';
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
          <Form
            fields={[
              {
                name: 'fullname',
                value: this.state.name,
                title: 'Full Name',
                validation: 'text',
                classes: '',
              },
              {
                name: 'jobdescription',
                value: 'Job',
                title: 'Job description',
                validation: 'text',
                classes: 'row-separationMedium',
              },
              {
                name: 'ponenumber',
                value: '999',
                title: 'Phone number',
                validation: 'text',
                classes: 'row-separationMedium row-gutterMedium',
              },
              {
                name: 'email',
                value: '@',
                title: 'Email',
                validation: 'email',
                classes: 'row-separationMedium',
              },
              {
                name: 'website',
                value: 'www',
                title: 'Website',
                validation: 'site',
                classes: 'row-separationMedium',
                active: false,
              },
              {
                name: 'address',
                value: 'Calle Pradillo 42. CP: 28002. Madrid',
                title: 'Address',
                validation: 'site',
                classes: 'row-separationMedium',
              },
            ]}
          />
        </article>
      </div>
    );
  }
}

export default App;
