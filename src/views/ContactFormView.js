/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class ContactFormView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContactFormController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactFormView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    /* View has no WebFlow data attributes */

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
    const proxies = ContactFormView.Controller !== ContactFormView ? transformProxies(this.props.children) : {
      'name': [],
      'email': [],
      'message': [],
      'submit': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/react-app.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="w-form">
            <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" className="af-class-contact-form">
              <div className="w-layout-grid af-class-contact-form-grid">
                <div id="w-node-_64364dd8-c81a-df0c-1a78-27eb3561a1ad-aed315a7"><label htmlFor="Name-3">Name</label>{map(proxies['name'], props => <input type="text" maxLength={256} name="Name" data-name="Name" placeholder="Enter your name" id="Name" {...{...props, className: `af-class-text-field w-input ${props.className || ''}`}}>{props.children}</input>)}</div>
                <div id="w-node-_64364dd8-c81a-df0c-1a78-27eb3561a1b1-aed315a7"><label htmlFor="Email-3">Email Address</label>{map(proxies['email'], props => <input type="email" maxLength={256} name="Email" data-name="Email" placeholder="Enter your email" id="Email" required {...{...props, className: `af-class-text-field w-input ${props.className || ''}`}}>{props.children}</input>)}</div>
                <div id="w-node-_64364dd8-c81a-df0c-1a78-27eb3561a1b5-aed315a7"><label htmlFor="Message">Comments</label>{map(proxies['message'], props => <textarea id="Message" name="Message" placeholder="Enter your message" maxLength={5000} data-name="Message" {...{...props, className: `af-class-text-field af-class-cc-textarea w-input ${props.className || ''}`}}>{props.children}</textarea>)}</div>
              </div>{map(proxies['submit'], props => <input type="submit" value="Submit" data-wait="Please wait..." {...{...props, className: `af-class-button w-button ${props.className || ''}`}}>{props.children}</input>)}
            </form>
            <div className="af-class-status-message af-class-cc-success-message w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="af-class-status-message af-class-cc-error-message w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default ContactFormView

/* eslint-enable */