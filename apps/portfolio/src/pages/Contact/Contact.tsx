import React from 'react'

import contact from '@portfolio/lang/contact.json'
import { GithubIcon, LinkedinIcon, EmailIcon } from '@portfolio/SVGs'
import { Styled } from '@portfolio/components/List'

export interface ContactProps {
  isEnglish?: boolean
}

export const Contact = ({ isEnglish = true }: ContactProps) => (
  <main className='light'>
    <section className='contact grid__row'>
      <div className='card grid__col--6'>
        <p>{isEnglish ? contact.english : contact.spanish}</p>
        <Styled.List centered style={{ justifyContent: 'space-around' }}>
          <Styled.ListItem>
            <a href='mailto:hello@jimmyguzman.com'>
              <EmailIcon width='50' height='50' />
            </a>
          </Styled.ListItem>
          <Styled.ListItem>
            <a
              href='https://www.linkedin.com/in/jimmy-guzman-87bb2714a/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinIcon width='50' height='50' />
            </a>
          </Styled.ListItem>
          <Styled.ListItem>
            <a
              href='https://github.com/jimmy-guzman'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon width='50' height='50' />
            </a>
          </Styled.ListItem>
        </Styled.List>
        <p>
          <a href='mailto:hello@jimmyguzman.com'>hello@jimmyguzman.com</a>
        </p>
      </div>
    </section>
  </main>
)
