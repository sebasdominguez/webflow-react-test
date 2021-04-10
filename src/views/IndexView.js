/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import ContactFormView from './ContactFormView'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6065c405e40bf938a4d315a4").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6065c405e40bf97aaed315a7'
    htmlEl.dataset['wfSite'] = '6065c405e40bf938a4d315a4'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {
      'contact-form': [],
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
                <a href="index.html" aria-current="page" className="af-class-logo-link w-nav-brand w--current"><img src="images/portfolio-logo2x.png" width={104} alt className="af-class-logo-image" /></a>
                <div className="af-class-navigation-wrap">
                  <nav role="navigation" className="af-class-navigation-items w-nav-menu">
                    <a href="index.html" aria-current="page" className="af-class-navigation-item w-nav-link w--current">Home</a>
                  </nav>
                  <div className="af-class-menu-button w-nav-button"><img src="images/menu-icon_1menu-icon.png" width={22} alt className="af-class-menu-icon" /></div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div className="af-class-container">
                <div className="af-class-intro-wrap">
                  <div className="af-class-name-text">Jane Lo</div>
                  <div className="af-class-paragraph-light">Product Designer</div>
                  <h1 className="af-class-heading-jumbo">Hey there! I’m a creative graphic and web designer based in sunny San Francisco, CA. </h1>
                </div>
              </div>
            </div>
            <div className="af-class-section af-class-cc-contact">
              <div className="af-class-container">
                <div className="af-class-contact">
                  <div className="af-class-contact-headline">
                    <h3>Want to get in touch?<br />Drop me a line!</h3>
                    <p className="af-class-paragraph-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                  </div>
                  <div className="af-class-contact-form-wrap">
                    {map(proxies['contact-form'], props => <ContactFormView.Controller {...props}>{props.children}</ContactFormView.Controller>)}
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-section">
              <div id="works-grid" className="w-layout-grid af-class-works-grid">
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fa5-aed315a7">
                  <a href="#" className="af-class-work-image af-class-cc-work-1 w-inline-block" />
                  <div className="af-class-work-description">
                    <a href="#" className="af-class-project-name-link">Project 1<br /></a>
                    <div className="af-class-paragraph-light">Graphic Design</div>
                  </div>
                </div>
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fad-aed315a7">
                  <a href="#" className="af-class-work-image af-class-cc-work-2 w-inline-block" />
                  <div className="af-class-work-description">
                    <a href="#" className="af-class-project-name-link">Project 2</a>
                    <div className="af-class-paragraph-light">Web Design</div>
                  </div>
                </div>
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fb4-aed315a7">
                  <a href="#" className="af-class-work-image af-class-cc-work-3 w-inline-block" />
                  <div className="af-class-work-description">
                    <a href="#" className="af-class-project-name-link">Project 3</a>
                    <div className="af-class-paragraph-light">Web Design</div>
                  </div>
                </div>
                <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fbb-aed315a7">
                  <a href="#" className="af-class-work-image af-class-cc-work-4 w-inline-block" />
                  <div className="af-class-work-description">
                    <a href="#" className="af-class-project-name-link">Project 4</a>
                    <div className="af-class-paragraph-light">Graphic Design</div>
                  </div>
                </div>
              </div>
              <div className="af-class-container">
                <div className="af-class-carrer-headline-wrap">
                  <h2>My experience</h2>
                  <p className="af-class-paragraph-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
                </div>
                <div className="w-layout-grid af-class-work-experience-grid">
                  <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fc9-aed315a7" className="af-class-work-position-wrap">
                    <div className="af-class-position-name-text">Webflow</div>
                    <div className="af-class-paragraph-light af-class-cc-position-name">Graphic Designer</div>
                    <div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">April 2014 — Mar 2015<br /></div>
                  </div>
                  <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fd1-aed315a7" className="af-class-work-position-wrap">
                    <div className="af-class-position-name-text">Webflow</div>
                    <div className="af-class-paragraph-light af-class-cc-position-name">Web Designer</div>
                    <div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">Apr 2015 — Mar 2016<br /></div>
                  </div>
                  <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fd9-aed315a7" className="af-class-work-position-wrap">
                    <div className="af-class-position-name-text">Webflow</div>
                    <div className="af-class-paragraph-light af-class-cc-position-name">Visual Developer</div>
                    <div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">Jun 2016 — Jul 2017<br /></div>
                  </div>
                  <div id="w-node-dff26f68-5731-3efa-d3dd-8f65c72d8fe1-aed315a7" className="af-class-work-position-wrap">
                    <div className="af-class-position-name-text">Webflow</div>
                    <div className="af-class-paragraph-light af-class-cc-position-name">Dictator</div>
                    <div className="af-class-paragraph-tiny af-class-cc-paragraph-tiny-light">Aug 2017 — forever<br /></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-footer-wrap">
              <div>
                <a href="https://webflow.com/" target="_blank" className="af-class-webflow-link w-inline-block"><img src="images/webflow-w-small2x_1webflow-w-small2x.png" width={15} alt className="af-class-webflow-logo-tiny" />
                  <div className="af-class-paragraph-tiny">Powered by Webflow</div>
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

export default IndexView

/* eslint-enable */