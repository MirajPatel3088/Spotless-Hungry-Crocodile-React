import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content">
          <h1 className="hero-text thq-heading-1">{props.heading1}</h1>
          <p className="hero-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button1">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero-content1">
        <div className="hero-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image01 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image02 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image03 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image04 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero-placeholder-image05 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image06 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image07 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image08 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image09 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image9Src:
    'https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Fresh Salad Bowl',
  image3Alt: 'Crispy Chicken Sandwich',
  image10Alt: 'Outdoor Seating Area',
  image10Src:
    'https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Burger and Fries Combo',
  image12Alt: '24/7 Customer Support',
  action2: 'View Menu',
  action1: 'Order Now',
  image11Alt: 'Contactless Delivery',
  image7Src:
    'https://images.unsplash.com/photo-1505935428862-770b6f24f629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'Drive-Thru Service',
  image6Alt: 'Family Meal Deals',
  image4Alt: 'Refreshing Beverages',
  image2Src:
    'https://images.unsplash.com/photo-1457666134378-6b77915bd5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image12Src:
    'https://images.unsplash.com/photo-1516100882582-96c3a05fe590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Welcome to our Fast Food Store',
  content1:
    'Satisfy your cravings with our delicious and quick meals made fresh daily.',
  image5Alt: 'Tasty Desserts',
  image3Src:
    'https://images.unsplash.com/photo-1506458539166-34079f9e1d2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM2Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: "Kids' Menu Options",
  image8Alt: 'Vegetarian Choices',
  image4Src:
    'https://images.unsplash.com/photo-1488477181946-6428a0291777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1468218620578-e8d78dcda7b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3NHw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Src:
    'https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3Mnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Src:
    'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero.propTypes = {
  image9Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image8Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  image11Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image12Src: PropTypes.string,
  image5Src: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image5Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image6Src: PropTypes.string,
  image11Src: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero
