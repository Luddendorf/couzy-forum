import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../components/button/Button';
import { setActiveTopbarItem, setActiveSubmenuItem, selectActiveMenuItem, selectActiveSubMenuItem
} from './topbarSlice';
import styles from '../../scss/main.scss';

export function Topbar() {
  const activeTab = useSelector(selectActiveMenuItem);
  const activeSubTab = useSelector(selectActiveSubMenuItem);
  const dispatchTopbarActions = useDispatch();
  const [activeFirstRow, setActiveFirstRow] = useState('topbar-browse');
  const [activeSecondRow, setActiveSecondRow] = useState('topbar-topics');

  // const incrementValue = Number(incrementAmount) || 0; {styles.home__container}
  const changeActiveTab = (e, menuItemName) => {
    e.preventDefault();
    // const menuItem = e.currentTarget;
    dispatchTopbarActions(setActiveTopbarItem(menuItemName));
  }

  const changeActiveSubmenuItem = (e, submenuItemName) => {
    e.preventDefault();
    // const menuItem = e.currentTarget;
    // console.log(submenuItemName);
    dispatchTopbarActions(setActiveSubmenuItem(submenuItemName));
  }

  return (
      <div className="topbar__container">
        <div className="topbar__row--first">
          <div className="topbar__logo-main"></div>
          <div className="topbar__row--first-right">
            <h1 className="topbar__sign-in-wrapper">Sign in element</h1>
            <Button legend="Sign up" width="150" height="40" fontSize="25"/>
          </div>
        </div>
        <div className="topbar__row--second">
          <menu className="topbar__row--second--menu">
            <div className="topbar__menu--holder">
              <li href="#" className="topbar__menu--item"
                onMouseEnter={(event) => changeActiveTab(event, 'topbar-browse')}>Browse</li>
              <span className="topbar__menu--hat"></span> 
            </div>
            <div className="topbar__menu--holder">
            <li href="#" className="topbar__menu--item"
                onMouseEnter={(event) => changeActiveTab(event, 'topbar-events')}>Events</li>
              <span className="topbar__menu--hat"></span> 
            </div>
            <div className="topbar__menu--holder">
            <li href="#" className="topbar__menu--item"
                onMouseEnter={(event) => changeActiveTab(event, 'topbar-get-help')}>Get Help</li>
              <span className="topbar__menu--hat"></span> 
            </div>
          </menu>
          <div className="topbar__row--second--search--holder">
            <div className="topbar__row--second--search">
                <input type="text" />
            </div>
          </div>
        </div>
        <div className="topbar__row--third">
          { activeTab === 'topbar-browse' ? 
          <menu className="topbar__submenu--browse">
            <li href="#" className="topbar__submenu--item"
                onClick={(event) => changeActiveSubmenuItem(event, 'topbar-topics')}>Topics</li>
            <li href="#" className="topbar__submenu--item"
                onClick={(event) => changeActiveSubmenuItem(event, 'topbar-gallery')}>Gallery</li>
            <li href="#" className="topbar__submenu--item"
                onClick={(event) => changeActiveSubmenuItem(event, 'topbar-users-online')}>Users Online</li>
            <li href="#" className="topbar__submenu--item"
                onClick={(event) => changeActiveSubmenuItem(event, 'topbar-our-team')}>Our Team</li>
          </menu> : ''}

          { activeTab === 'topbar-events' ? 
          <menu className="topbar__submenu--browse">
            <li href="#" className="topbar__submenu--item"
                onClick={(event) => changeActiveSubmenuItem(event, 'topbar-all-meetings')}>All Meetings</li>
            <li href="#" className="topbar__submenu--item"
                onClick={(event) => changeActiveSubmenuItem(event, 'topbar-holidays')}>Holidays</li>
            <li href="#" className="topbar__submenu--item"
                onClick={(event) => changeActiveSubmenuItem(event, 'topbar-search')}>Search</li>
          </menu> : '' }

          { activeTab === 'topbar-get-help' ?
          <menu className="topbar__submenu--browse">
            <li href="#" className="topbar__submenu--item"
                onClick={(event) => changeActiveSubmenuItem(event, 'topbar-faq')}>FAQ</li>
            <li href="#" className="topbar__submenu--item"
                onClick={(event) => changeActiveSubmenuItem(event, 'topbar-contact-us')}>Contact Us</li>
          </menu> : '' }

        </div>
      </div>
  );
}