import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features2.css'

const Features2 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features2-container1 thq-section-max-width">
        <div className="features2-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features2-tab-horizontal"
          >
            <div className="features2-divider-container">
              {activeTab === 0 && <div className="features2-container2"></div>}
            </div>
            <div className="features2-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features2-tab-horizontal1"
          >
            <div className="features2-divider-container1">
              {activeTab === 1 && <div className="features2-container3"></div>}
            </div>
            <div className="features2-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features2-tab-horizontal2"
          >
            <div className="features2-divider-container2">
              {activeTab === 2 && <div className="features2-container4"></div>}
            </div>
            <div className="features2-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features2-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features2-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features2-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features2-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features2.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1504387828636-abeb50778c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1502741126161-b048400d085d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM3MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature3Title: 'Feature #3',
  feature1ImgAlt: 'feature 1',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1504382262782-5b4ece78642b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjQxMzM2N3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Convenient Ordering',
  feature2Description:
    'Order your favorite fast food items with just a few clicks on our user-friendly website or mobile app.',
  feature1Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  feature3ImgAlt: 'image',
  feature2ImgAlt: 'Convenient Ordering Image',
  feature1Title: 'Feature #1',
}

Features2.propTypes = {
  feature2ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features2
