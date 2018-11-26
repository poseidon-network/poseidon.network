import React from 'react';
import axios from 'axios';

class ContactForm extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    receiveUpdate: false,
  };

  handleChangeInput = ({ target: { name, value  } }: { target: { name: string; value: string  } }) => {
    this.setState({
      [name]: value,
    });
  }

  handleChangeCheckBox = ({ target: { name, checked  } }: { target: { name: string; checked: boolean  } }) => {
    this.setState({
      [name]: checked,
    });
  }

  handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
      receiveUpdate: this.state.receiveUpdate,
    };
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzrn9HjWirz3EcZt7-XWlxWN8oNGiA3VwPOVTpSWfceWO-26DTl/exec', {
        body: JSON.stringify(data),
        method: 'POST',
      });
      console.log('success');
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChangeInput}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChangeInput}
        />

        <label htmlFor="your-message">Your Message</label>
        <textarea
          id="your-message"
          name="message"
          value={this.state.message}
          onChange={this.handleChangeInput}
        />

        <div className="check-container">
          <label htmlFor="checkbox">
            <input
              id="checkbox"
              type="checkbox"
              name="receiveUpdate"
              checked={this.state.receiveUpdate}
              onChange={this.handleChangeCheckBox}
            />
            <span className="checkmark"></span>
            I want to receive occasional e-mail updates from POSEIDON NETWORK
          </label>
        </div>

        <input className="submit" type="submit" value="Send" />

        <style jsx>{`
          label {
            color: #222633;
            font-size: 16px;
            display: block;
            margin-bottom: 10px;
            width: 276px;
          }

          input, textarea {
            border: none;
            border-radius: 4px;
            border: 1px solid #90cfbe;
            box-shadow: none;
            background-color: #ffffff;
            margin-bottom: 32px;
            padding: 5px;
            width: 311px;
            font-size: 16px;
            height: 44px;
          }

          input:focus, textarea:focus {
            outline: none;
          }

          textarea {
            height: 80px;
          }

          .check-container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 22px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          #checkbox {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
          }

          /* Create a custom checkbox */
          .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            width: 20px;
            height: 20px;
            border-radius: 4px;
            border: 1px solid #90cfbe;
            background-color: #fff;
          }


          /* When the checkbox is checked, add a green background */
          .check-container input:checked ~ .checkmark {
            background-color: #90cfbe;
          }

          /* Create the checkmark/indicator (hidden when not checked) */
          .checkmark:after {
            content: "";
            position: absolute;
            display: none;
          }

          /* Show the checkmark when checked */
          .check-container input:checked ~ .checkmark:after {
            display: block;
          }

          /* Style the checkmark/indicator */
          .check-container .checkmark:after {
            left: 5px;
            top: 2px;
            width: 3px;
            height: 8px;
            border: solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
          }

          .submit {
            cursor: pointer;
            width: 311px;
            height: 48px;
            border-radius: 24px;
            border: 1px solid #222633;
            background: transparent;
            outline: none;
            margin: 30px auto;
          }

          .submit:hover {
            opacity: 0.8;
          }
        `}</style>
      </form>
    );
  }
}

export default ContactForm;
