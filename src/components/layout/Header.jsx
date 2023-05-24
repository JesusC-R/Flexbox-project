import React from "react";

import Logo from "../common/Logo";
import logoImg from "../../assets/img/logo.png";

//Profile img
import profileImg from "../../assets/img/user.jpg";

//icons
import { BiSearch as SearchIcon } from "react-icons/bi";
import { BsFillBookmarkFill as Bookmarkicon } from "react-icons/bs";
import { BsFillChatFill as ChatIcon} from "react-icons/bs";

const Header = () => {
	return (
    <header className="header">
      <Logo src={logoImg} alt={"logo"} imgClassNames={"logo"} />

      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels"
        />
        
        <button className="search__button">
          <SearchIcon className="search__icon" />
        </button>
      </form>

      <nav className="user-nav">

        <div className="user-nav__icon-box">
          <Bookmarkicon className="user-nav__icon" />
          <span className="user-nav__notification">7</span>
        </div>

        <div className="user-nav__icon-box">
          <ChatIcon className="user-nav__icon" />
          <span className="user-nav__notification">13</span>
        </div>

        <div className="user-nav__user">
          <img src={profileImg} alt="profile img" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Helix</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;