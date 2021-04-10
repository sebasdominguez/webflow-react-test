import React from 'react'
import ThankYouView from '../views/ThankYouView'
import './thanks.css'

export default function ThankYouController(props) {
    return (
        <ThankYouView>
            <thanks>
                <div className='thanks'>
                    Thank you {props.location.state.name}!
                </div>
                <div className='message__title'>
                    We receive your message: 
                    <span className='message__text'>
                        "{props.location.state.message}"
                    </span>
                </div>
                
                <div className='reply'>
                    Don´t forget checking <span className='mail'>{props.location.state.email} </span> since tomorrow.
                </div>
                
            </thanks>
        </ThankYouView>
    )
}
