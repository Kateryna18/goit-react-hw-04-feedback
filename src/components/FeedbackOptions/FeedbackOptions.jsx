import React from 'react'
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <div>
        {options.map(option => <button key={option} className={css.feedbackButton} name={option} onClick={onLeaveFeedback}>{option}</button>)} 
    </div>
  )
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,

}