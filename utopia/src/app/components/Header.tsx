import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import * as classNames from "classnames";

@observer
export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <div className="logo">
            Utopia.<span>se</span>
          </div>
          <div className="header__links">
            <a className="header__item" href="#">
              Nyheter
            </a>
            <a className="header__item" href="#">
              Projekt
            </a>
            <a className="header__item" href="#">
              Kontakt
            </a>
          </div>
        </div>
        <div className="header__right">
          <div className="header__links header__links--language">
            <div className="line"></div>
            <a className="header__item" href="#">
              EN
            </a>
            /
            <a className="header__item" href="#">
              SE
            </a>
            <div className="header__item header__item--icons">
              <a href="#">
                <img src="/utopia/images/icn_search.svg" />
              </a>
              <a href="#">
                <img src="/utopia/images/icn_profile.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
