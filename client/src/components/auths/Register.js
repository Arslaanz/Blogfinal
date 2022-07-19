import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/Createprofile' />;
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
            Sign Up
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
                            <label class="form-control-label">NAME</label>
                            <input type="text"  type='text' 
            placeholder='Enter Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
    class="form-control" required/>
                        </div>
                        <div class="form-group">
                            <label class="form-control-label">PASSWORD</label>
                            <input type="password" class="form-control" placeholder=' Enter Password'
        name='password'
        value={password}
        onChange={(e) => onChange(e)} required/>
        
        
                        </div>
                        <div class="form-group">
                            
                            <input type="password" class="form-control" placeholder='Confirm Password'
        name='password2'
        value={password2}
        onChange={(e) => onChange(e)} 
        required
        
        />
        <p className='my-1'>
        Already have an account? <Link to='/Login'>Sign In</Link>
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

Register.prototype = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToprops = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToprops, { setAlert, register })(Register);
