import React, {Component} from 'react';

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  renderForm() {
    return (
      <form action="send">
        <h3>Добро пожаловать!</h3>
        <input type="text" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
        <input
          type="password" placeholder="Password" />
        <input className='submit' type="submit" value="Войти" onChange={this.onChange} />
      </form>
    )
  }

  render () {
    return(
      <div className="auth">
        {this.renderForm()}
      </div>
    );
  }
}

export default Auth;