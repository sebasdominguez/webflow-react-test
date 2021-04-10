import React from 'react'
import IndexView from '../views/IndexView'

export default function IndexController(props) {
    return (
        <IndexView>
            <contact-form {...props}/>
        </IndexView>
    )
}
