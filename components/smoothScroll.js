import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default () => (
    <div>
        <AnchorLink href='#things'>Things</AnchorLink>
        <AnchorLink href='#stuff'>Stuff</AnchorLink>

        <section id='things'>
            <h2>Things</h2>
        </section>
        <section id='stuff'>
            <h2>Stuff</h2>
        </section>
    </div>
)