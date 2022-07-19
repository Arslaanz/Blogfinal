import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getsingle } from '../../actions/uploads';

import setAuthToken from '../../utils/setAuthToken';
import UploadsUI from './UploadUI';
import Moment from 'react-moment';

import { loadUser } from '../../actions/auth';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const View = ({ getsingle,match,uploads: { single, loadingsingle} }) => {
  useEffect(() => {
    getsingle(match.params.id);
  }, [getsingle]);
  console.log(single)
  return loadingsingle ? (
    <div>Loading ....</div>
  ) : (
    <Fragment>
    

        <header class="masthead">
    <div class="container">

        <div class=" masthead-heading masthead-subheading">{single.Name}</div>
        <div class="masthead-subheading">Posted on <Moment format='YYYY/MM/DD'>{single.date}</Moment></div>
        <a class="btn-primaryL btn-xl text-uppercase" href="#services">Join us!</a>
    </div>
</header>

<section class="page-section" id="services">
       <div class="container gallery-container">
       <img className='logoimg' src={single.image}alt="..." />

<h1 class="page-description text-center">{single.Name}</h1>
<p class="page-description text-center">{single.Text}</p>



</div>
        </section>
      
        
     
    </Fragment>
  );
};

View.propTypes = {
  getsingle: PropTypes.func.isRequired,
  uploads: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  uploads: state.uploads,
});
export default connect(mapStateToProps, { getsingle })(View);
