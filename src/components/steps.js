import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container1 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps-actions">
              <button className="thq-button-animated thq-button-filled steps-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps-container2">
            <div className="steps-container3 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text04 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text05 thq-heading-3">01</label>
            </div>
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="steps-text07 thq-body-small">
                {props.step2Description}
              </span>
              <label className="steps-text08 thq-heading-3">02</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text10 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text11 thq-heading-3">03</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text13 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text14 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step4Title: 'Enjoy Your Meal',
  step2Title: 'Customize Your Order',
  step1Description: 'Browse through our menu and select your favorite meal.',
  step4Description:
    'Sit back and relax while we prepare your delicious meal for you to enjoy.',
  step3Title: 'Place Your Order',
  step2Description:
    'Personalize your meal by adding or removing ingredients to suit your taste.',
  step1Title: 'Choose Your Meal',
  step3Description:
    'Confirm your order and choose your preferred payment method.',
}

Steps.propTypes = {
  step4Title: PropTypes.string,
  step2Title: PropTypes.string,
  step1Description: PropTypes.string,
  step4Description: PropTypes.string,
  step3Title: PropTypes.string,
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step3Description: PropTypes.string,
}

export default Steps
