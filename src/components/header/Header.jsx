import React from 'react'
import './header.scss'
import { logo } from '../../assets/images'

const Header = () => {
  return (
    <div className="header">
        <div className="header__inner container">
            <div className="header__logo">
              <div class="header__text">
                <div className="header__text__neon">
                    <div className="header__text__title">SKYES</div>
                    <div className="header__text__gradient"></div>
                    <div className="header__text__dodge"></div>
                </div>
              </div>
            </div>
            <ul className="header__nav">
                <li><a href="#">About Skyes</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Modal</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header