import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUploads } from '../../actions/uploads';
import { Provider } from 'react-redux';
import store from '../../store';
import Alerts from '../../components/layout/Alerts';
import setAuthToken from '../../utils/setAuthToken';
import UploadsUI from './UploadUI';


import { loadUser } from '../../actions/auth';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Uploads = ({ getUploads,id,uploads: { uploads, loading } }) => {
  useEffect(() => {
    getUploads(id);
  }, [getUploads]);
  return loading ? (
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
              {uploads.map((uploads) => (
                <UploadsUI key={uploads._id} uploads={uploads} />
              ))}
            </div>
          
      </div>
      </section>
     
    </Fragment>
  );
};

Uploads.propTypes = {
  getUploads: PropTypes.func.isRequired,
  uploads: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  uploads: state.uploads,
});
export default connect(mapStateToProps, { getUploads })(Uploads);
