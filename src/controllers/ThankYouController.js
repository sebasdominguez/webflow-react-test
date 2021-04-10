import React from 'react'
import ThankYouView from '../views/ThankYouView'

export default function ThankYouController(props) {
    return (
        <ThankYouView>
            <thanks>
                Thank you! {props.location.state.name}
            </thanks>
        </ThankYouView>
    )
}
