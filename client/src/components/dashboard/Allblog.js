import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  getblogsall } from '../../actions/uploads';
import { Provider } from 'react-redux';
import store from '../../store';
import Alerts from '../../components/layout/Alerts';
import setAuthToken from '../../utils/setAuthToken';
import UploadsUI from './blog';


import { loadUser } from '../../actions/auth';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Allblogs= ({  getblogsall,id,uploads: { allblogs, loadingallblogs } }) => {
  useEffect(() => {
     getblogsall(id);
  }, [ getblogsall]);
  return loadingallblogs ? (
    <div>Loading ....</div>
  ) : (
    <Fragment>
     <section class="page-section bg-light_pink" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">You'r Cookbook</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
           <div className='row'>
     
              {' '}
              {allblogs.map((uploads) => (
                <UploadsUI key={uploads._id} uploads={uploads} />
              ))}
            </div>
          
      </div>
      </section>
     
    </Fragment>
  );
};

Allblogs.propTypes = {
   getblogsall: PropTypes.func.isRequired,
  uploads: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  uploads: state.uploads,
});
export default connect(mapStateToProps, {  getblogsall })(Allblogs);
