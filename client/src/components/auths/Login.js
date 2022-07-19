import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
    <div class="containerlogin">
        
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-4 col-md-8 login-box">
            <div class="col-lg-12 login-key">
            <i className='fas fa-user'></i> 
            </div>
            <div class="col-lg-12 login-title">
            Sign In
            </div>

            <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
                    <form onSubmit={(e) => onSubmit(e)}>
                    <div class="form-group">
                            <label class="form-control-label">EMAIL</label>
                            <input type="text"  placeholder='Enter Email Address'
        name='email'
        value={email}
        onChange={(e) => onChange(e)}class="form-control" required/>
                        </div>
                        
                        <div class="form-group">
                            <label class="form-control-label">PASSWORD</label>
                            <input type="password" class="form-control" placeholder=' Enter Password'
        name='password'
        value={password}
        onChange={(e) => onChange(e)} required/>
        
        <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
                        </div>
            
                        <div class="col-lg-12 loginbttm">
                            
                            <div class="col-lg-12 login-btm login-button">
                                <button type="submit" class="btn-primaryLL ">Login</button>
                            </div>
                          
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
        </div>
    </div>

     
    </Fragment>
  );
};
Login.prototype = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToprops = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToprops, { login })(Login);
