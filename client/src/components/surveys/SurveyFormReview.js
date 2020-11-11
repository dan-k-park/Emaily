// Show users their form inputs for review
import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'


const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    )
  })

  return (
    <div>
      <h5>Confirm your entries</h5>
      {reviewFields}
      <button className='yellow white-text darken-3 btn-flat' onClick={onCancel}>
        Back
      </button>
      <button className='green white-text btn-flat right' onClick={() => submitSurvey(formValues, history)}>
        Send Survey
        <i className='material-icons right'>email</i>
      </button>
    </div>
  )
}

// Remember this will pass whatever's being returned as props to our component
function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));