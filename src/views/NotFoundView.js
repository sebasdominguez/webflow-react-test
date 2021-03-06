/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6065c405e40bf938a4d315a4").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class NotFoundView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NotFoundController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NotFoundView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6065c405e40bf913cad315b2'
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
    const proxies = NotFoundView.Controller !== NotFoundView ? transformProxies(this.props.children) : {

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
            <div className="af-class-utility-page-wrap">
              <div className="af-class-_404-wrap">
                <div className="af-class-_404-content-wrap">
                  <div className="af-class-heading-jumbo">Page Not Found</div>
                  <div className="af-class-paragraph-bigger af-class-cc-bigger-light">The page you are looking for doesn't exist or has been moved.</div>
                </div>
                <a href="index.html" className="af-class-button af-class-cc-white-button w-inline-block">
                  <div>Go Back to Safety</div>
                </a>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default NotFoundView

/* eslint-enable */