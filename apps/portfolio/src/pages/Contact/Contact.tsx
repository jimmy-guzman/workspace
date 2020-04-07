import React from 'react'

import contact from '../../lang/contact.json'
import GithubSVG from '../../components/SVGs/GithubSVG'
import LinkedinSVG from '../../components/SVGs/LinkedinSVG'
import EmailSVG from '../../components/SVGs/EmailSVG'

export interface ContactProps {
  isEnglish?: boolean
}

export const Contact = ({ isEnglish = true }: ContactProps) => (
  <main className='light'>
    <section className='contact grid__row'>
      <div className='card grid__col--6'>
        <p>{isEnglish ? contact.english : contact.spanish}</p>
        <ul>
          <li>
            <a href='mailto:hello@jimmyguzman.com'>
              <EmailSVG width='50' height='50' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/jimmy-guzman-87bb2714a/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinSVG width='50' height='50' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/jimmy-guzman'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubSVG width='50' height='50' />
            </a>
          </li>
        </ul>
        <p>
          <a href='mailto:hello@jimmyguzman.com'>hello@jimmyguzman.com</a>
        </p>
      </div>
    </section>
  </main>
)
