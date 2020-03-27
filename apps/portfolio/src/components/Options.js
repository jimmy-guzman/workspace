import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
// import DaySVG from "./SVGs/DaySVG";
// import NightSVG from "./SVGs/NightSVG";

const Options = ({ isEnglish, updateLang }) => (
  <div className='options'>
    {/* <div className="options__day-night">
      <button className="btn__primary" aria-label="Day Mode">
        <DaySVG height="24" width="24" />
      </button>
      <button className="btn__primary" aria-label="Night Mode">
        <NightSVG height="24" width="24" />
      </button>
    </div> */}
    <NavLink exact to='/' className='home-link' activeClassName='active-home'>
      Jimmy Guzman
    </NavLink>
    <div className='options__lang'>
      <button
        className={!isEnglish ? 'btn__primary active' : 'btn__primary'}
        type='button'
        onClick={() => updateLang('spanish')}
      >
        SP
      </button>
      <button
        type='button'
        className={isEnglish ? 'btn__primary active' : 'btn__primary'}
        onClick={() => updateLang('english')}
      >
        ENG
      </button>
    </div>
  </div>
)

Options.propTypes = {
  isEnglish: PropTypes.bool.isRequired,
  updateLang: PropTypes.func.isRequired
}

export default Options
