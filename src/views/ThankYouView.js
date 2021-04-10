/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6065c405e40bf938a4d315a4").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class ThankYouView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ThankYouController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ThankYouView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6065cbb68e4e52cd3e053387'
    htmlEl.dataset['wfSite'] = '6065c405e40bf938a4d315a4'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        // new Function(`
        //   with (this) {
        //     eval(arguments[0])
        //   }
        // `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = ThankYouView.Controller !== ThankYouView ? transformProxies(this.props.children) : {
      'thanks': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/react-app.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} role="banner" className="af-class-navigation w-nav">
              <div className="af-class-navigation-items">
                <a href="index.html" className="af-class-logo-link w-nav-brand"><img src="images/portfolio-logo2x.png" width={104} alt className="af-class-logo-image" /></a>
                <div className="af-class-navigation-wrap">
                  <nav role="navigation" className="af-class-navigation-items w-nav-menu">
                    <a href="index.html" className="af-class-navigation-item w-nav-link">Home</a>
                  </nav>
                  <div className="af-class-menu-button w-nav-button"><img src="images/menu-icon_1menu-icon.png" width={22} alt className="af-class-menu-icon" /></div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-container">
                <div className="af-class-intro-wrap">
                  {map(proxies['thanks'], props => <h1 {...{...props, className: `af-class-heading-jumbo ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Thank you!</React.Fragment>}</h1>)}
                  <h2>Our team will get back to you soon.</h2>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div id="works-grid" className="w-layout-grid af-class-works-grid">
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fa5-3e053387">
                  <a href="#" className="af-class-work-image af-class-cc-work-1 w-inline-block" />
                </div>
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fad-3e053387">
                  <a href="#" className="af-class-work-image af-class-cc-work-2 w-inline-block" />
                </div>
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fb4-3e053387">
                  <a href="#" className="af-class-work-image af-class-cc-work-3 w-inline-block" />
                  <div className="af-class-work-description" />
                </div>
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fbb-3e053387">
                  <a href="#" className="af-class-work-image af-class-cc-work-4 w-inline-block" />
                  <div className="af-class-work-description" />
                </div>
              </div>
              <div className="af-class-container" />
            </div>
            <div className="af-class-footer-wrap">
              <div>
                <a href="https://webflow.com/" target="_blank" className="af-class-webflow-link w-inline-block"><img src="images/webflow-w-small2x_1webflow-w-small@2x.png" width={15} alt className="af-class-webflow-logo-tiny" />
                  <span className="af-class-paragraph-tiny">Powered by Webflow</span>
                </a>
              </div>
              <div className="af-class-footer-links">
                <a href="https://www.facebook.com/webflow/" target="_blank" className="af-class-footer-item">Facebook</a>
                <a href="https://twitter.com/webflow" target="_blank" className="af-class-footer-item">Twitter</a>
                <a href="https://www.instagram.com/webflowapp/" target="_blank" className="af-class-footer-item">Instagram</a>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default ThankYouView

/* eslint-enable */