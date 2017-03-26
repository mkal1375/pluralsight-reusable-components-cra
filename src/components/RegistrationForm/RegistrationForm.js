import React, {PropTypes} from 'react';
import TextInput from '../TextInput';
import PasswordInput from '../PasswordInput';

class RegistrationForm extends React.Component {
  static defaultProps = {
    confirmationMessage: "Thanks for registering!",
    minPasswordLength: 16
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {},
      submitted: false,
    };
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  }

  // Returns a number from 0 to 100 that represents password quality.
  // For simplicity, just returning % of min length entered.
  // Could enhance with checks for number, special char, unique characters, etc.
  passwordQuality(password) {
    if (!password) return null;
    if (password.length >= this.props.minPasswordLength) return 100;
    const percentOfMinLength = parseInt(password.length/this.props.minPasswordLength * 100, 10);
    return percentOfMinLength;
  }

  validate({email, password}) {
    const errors = {};

    if (!email) {
      errors.email = 'Email required.';
    }

    if (password.length < this.props.minPasswordLength) {
      errors.password = `Password must be at least ${this.passwordMinLength} characters.`;
    }

    this.setState({errors});
    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit = () => {
    const {user} = this.state;
    const formIsValid = this.validate(user);
    if (formIsValid) {
      this.props.onSubmit(user);
      this.setState({submitted: true});
    }
  }

  render() {
    const {errors, submitted} = this.state;
    const {email, password} = this.state.user;

    return (
      submitted ?
      <h2>{this.props.confirmationMessage}</h2> :
      <div>
        <TextInput
          htmlId="registration-form-email"
          name="email"
          onChange={this.onChange}
          label="Email"
          value={email}
          error={errors.email}
          required />

        <PasswordInput
          htmlId="registration-form-password"
          name="password"
          value={password}
          onChange={this.onChange}
          quality={this.passwordQuality(password)}
          showVisibilityToggle
          maxLength={50}
          error={errors.password} />

        <input type="submit" value="Register" onClick={this.onSubmit} />
      </div>
    )
  }
}

RegistrationForm.propTypes = {
  confirmationMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  minPasswordLength: PropTypes.number
}

export default RegistrationForm;
