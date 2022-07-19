import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';


const Blog = ({
  auth,
  uploads: { image, Name, date, _id },
}) => (
  <div class="col-lg-4 col-sm-6 mb-4">

    <div class="portfolio-item" >
    <Link class="portfolio-link" data-bs-toggle="modal" to={`/view/${_id}`}>
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src={image} alt="..." />
                    </Link>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">{Name}</div>
                        <div class="portfolio-caption-subheading text-muted"> Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></div>
                   
                      
                    </div>
              

     
    </div>
    
  </div>
);

Blog.propTypes = {
  uploads: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Blog);
