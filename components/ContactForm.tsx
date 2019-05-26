import React from 'react';

class ContactForm extends React.Component {
  state = {
    email: '',
    isFailed: false,
    isSucceed: false,
  };

  handleChangeInput = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', this.state.email);
    this.setState({
      isFailed: false,
      isSucceed: false,
    });
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwVfb9acsqEuPnYZlgRBOUng74nnNd6a4NGmJPCRXtp5HOBTMeJ/exec',
        {
          body: formData,
          method: 'POST',
        },
      );
      this.setState({
        email: '',
        isSucceed: true,
      });
    } catch (err) {
      console.log(err);
      this.setState({
        isFailed: true,
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.isSucceed && (
          <p className="msg success">Sent successfully!</p>
        )}
        {this.state.isFailed && (
          <p className="msg error">
            Something went wrong, please try again later.
          </p>
        )}

        <div className="input-field">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={this.state.email}
            onChange={this.handleChangeInput}
          />
          <input className="submit" type="submit" value="Subscribe" />
          <input className="submit sm-submit" type="submit" value="→" />
        </div>
        <style jsx>{`
          form {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .input-field {
            width: 555px;
            height: 60px;
            border-radius: 30.5px;
            background-color: #d7f2ee;
            display: flex;
            flex-direction: row;
            align-items: center;
          }

          input {
            width: 405px;
            height: 60px;
            border-radius: 30.5px;
            background-color: #d7f2ee;
            font-size: 16px;
            padding: 21px 30px;
            border: 0;
            color: #222633;
            font-weight: normal;
            font-family: Montserrat;
          }

          input:focus,
          textarea:focus {
            outline: none;
          }

          textarea {
            height: 80px;
          }

          .submit {
            cursor: pointer;
            width: 145px;
            height: 50px;
            border-radius: 30.5px;
            background-color: #90cfbe;

            font-size: 16px;
            font-weight: 600;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.5;
            letter-spacing: 0.3px;
            text-align: center;
            color: #222633;
            padding: 14px 30px;
          }

          .submit:hover {
            opacity: 0.4;
          }

          .msg {
            font-size: 13px;
            font-weight: 600;
            margin-top: 3px;
            position: absolute;
          }

          .success {
            color: #90cfbe;
          }

          .error {
            color: #ef5757;
          }

          .sm-submit {
            display: none;
          }

          @media only screen and (max-width: 1024px) {
            .input-field {
              width: 100%;
            }

            input {
              width: 78%;
            }
          }

          @media only screen and (max-width: 554px) {
            .input-field {
              width: 315px;
            }

            input {
              width: 220px;
            }

            .submit {
              display: none;
            }

            .sm-submit {
              display: block;
              margin-right: 5px;
            }
          }
        `}</style>
      </form>
    );
  }
}

export default ContactForm;
