import React from 'react'

import contact from '@portfolio/lang/contact.json'
import { GithubIcon, LinkedinIcon, EmailIcon } from '@portfolio/SVGs'
import { Styled as StyledList } from '@portfolio/components/List'
import { Link, Card } from '@portfolio/components'
import { StyledContact } from './Contact.styles'

export interface ContactProps {
  isEnglish?: boolean
}

export const Contact = ({ isEnglish = true }: ContactProps) => (
  <main className='light'>
    <StyledContact className='grid__row'>
      <Card className='grid__col--6'>
        <p>{isEnglish ? contact.english : contact.spanish}</p>
        <StyledList.List centered style={{ justifyContent: 'space-around' }}>
          <StyledList.ListItem>
            <Link color='primary' href='mailto:hello@jimmyguzman.com'>
              <EmailIcon width='50' height='50' />
            </Link>
          </StyledList.ListItem>
          <StyledList.ListItem>
            <Link
              color='primary'
              href='https://www.linkedin.com/in/jimmy-guzman-87bb2714a/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinIcon width='50' height='50' />
            </Link>
          </StyledList.ListItem>
          <StyledList.ListItem>
            <Link
              color='primary'
              href='https://github.com/jimmy-guzman'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubIcon width='50' height='50' />
            </Link>
          </StyledList.ListItem>
        </StyledList.List>
        <p>
          <Link color='primary' href='mailto:hello@jimmyguzman.com'>
            hello@jimmyguzman.com
          </Link>
        </p>
      </Card>
    </StyledContact>
  </main>
)
