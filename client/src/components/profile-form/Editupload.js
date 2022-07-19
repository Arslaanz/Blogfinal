import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editblog, getsingle } from '../../actions/uploads';

const EditBlog = ({
    uploads: { single, loadingsingle},
  editblog,
  getsingle,
  match,
  history,
}) => {
  const [formData, setFormData] = useState({
    _id: '',
    Name: '',
    Text: '',
  });

  
  useEffect(() => {
    getsingle(match.params.id);

    setFormData({
      id: loadingsingle || !match.params.id ? '' :match.params.id,
      Name: loadingsingle || !single.Name ? '' : single.Name,
      Text: loadingsingle || !single.Text ? '' : single.Text,
    
    });
  }, []);

  const {
    id,
    Name,
    Text,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    editblog(formData, history, true);
  };

  return loadingsingle ? (
    <div>Loading ....</div>
  ) : (
    <Fragment>
     <div class="containerlogin">
        
        <div class="col-lg-3 col-md-2"></div>
        <div class="col-lg-4 col-md-8 login-box">
        <div class="col-lg-12 login-key">
            <i className='fas fa-user'></i> 
            </div>
            <div class="col-lg-12 login-title">
            Edit Your Blog
            </div>

            <div class="col-lg-12 login-form">
                <div class="col-lg-12 login-form">
     
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
  

        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='Name'
            value={Name}
            onChange={(e) => onChange(e)}
          />
          
        </div>
     

        <div className='form-group'>
          <textarea
            placeholder='A short Text of yourself'
            name='Text'
            value={Text}
            onChange={(e) => onChange(e)}
          />
        
        </div>

        

    

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>

      </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
        </div>
    </div>
    </Fragment>
  );
};

EditBlog.propTypes = {
    getsingle: PropTypes.func.isRequired,
    uploads: PropTypes.object.isRequired,
    editblog: PropTypes.func.isRequired,
  
};

const mapStateToProps = (state) => ({
    uploads: state.uploads,
});

export default connect(mapStateToProps, { editblog, getsingle })(
  withRouter(EditBlog)
);
