import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview'

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() { 
    if (this.state.showFormReview) {
      return <SurveyFormReview onCancel={() => this.setState({ showFormReview: false})} />
    }

    return <SurveyForm onSurveySubmit={() => this.setState({ showFormReview: true })} />
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  // If user navigates away from survey new, then dump the values in survey form
  // aka default behavior destroyOnUnmount
  form: 'surveyForm'
})(SurveyNew);