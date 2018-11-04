import React, { Component } from 'react';
import Card from './components/Card';
import Form from './components/Form';
import cabifyLogo from './images/cabify-logo.svg';
import './styles/App.css';

class App extends Component {
  constructor(args) {
    super(args);
    this.state = {
      fullname: '',
      jobdescription: '',
      phonenumber: '',
      email: '',
      website: 'www.cabify.com',
      address: '',
    };
    this.changeFieldValue = this.changeFieldValue.bind(this);
  }

  changeFieldValue(name) {
    return ({ target: { value } }) => {
      this.setState({
        [name]: value,
      });
    };
  }

  render() {
    const {
      fullname, jobdescription, phonenumber, email, website, address,
    } = this.state;
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
            changeFieldValue={this.changeFieldValue}
            fields={[
              {
                name: 'fullname',
                placeholder: 'Your name here',
                value: fullname,
                title: 'Full Name',
                validation: 'text',
                classes: '',
              },
              {
                name: 'jobdescription',
                value: jobdescription,
                placeholder: 'What is your company position?',
                title: 'Job description',
                validation: 'text',
                classes: 'row-separationMedium',
              },
              {
                name: 'phonenumber',
                value: phonenumber,
                title: 'Phone number',
                validation: 'text',
                classes: 'row-separationMedium row-gutterMedium',
              },
              {
                name: 'email',
                value: email,
                placeholder: 'your.name@cabify.com',
                title: 'Email',
                validation: 'email',
                classes: 'row-separationMedium',
              },
              {
                name: 'website',
                value: website,
                title: 'Website',
                validation: 'site',
                classes: 'row-separationMedium',
                readOnly: true,
              },
              {
                name: 'address',
                value: address,
                placeholder: 'your office address',
                title: 'Adress',
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
