import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import * as classNames from "classnames";

@observer
export class Menu extends React.Component {
  @observable isOpen = false;

  @action
  toggleMenu = () => {
    this.isOpen = !this.isOpen;
  };

  render() {
    return (
      <>
        <div
          className={classNames({
            menu: true,
            "menu--full": true,
            visible: this.isOpen
          })}
        >
          <div className="menu__columnWrap">
            <div className="menu__column">
              <div className="menu__column__title">01. Sections</div>
              <div className="menu__column__links">
                <a href="#">Home</a>
                <a href="#">Our Store</a>
                <a href="#">About</a>
                <a href="#">Design</a>
                <a href="#">Gardens</a>
              </div>
            </div>
            <div className="menu__column">
              <div className="menu__column__title">02. Features</div>
              <div className="menu__column__links">
                <a href="#">Interview</a>
                <a href="#">Plants</a>
                <a href="#">Portraits</a>
                <a href="#">Hunt / Gather</a>
                <a href="#">Musing</a>
              </div>
            </div>
            <div className="menu__column">
              <div className="menu__column__title">03. Categories</div>
              <div className="menu__column__links">
                <a href="#">Kids</a>
                <a href="#">Furniture</a>
                <a href="#">Architecture</a>
                <a href="#">Lighting</a>
                <a href="#">Craft</a>
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="menu__controls">
            <div className="menu__section menu__section--top">
              <img
                className="icn_audio_svg"
                src="/utopia/images/icn_plus.svg"
              />
            </div>
            <div
              className="menu__section menu__section--middle"
              onClick={this.toggleMenu}
            >
              <div
                className={classNames({
                  hamburger: true,
                  "hamburger--active": this.isOpen
                })}
              >
                <div className="hamburger__line"></div>
                <div className="hamburger__line"></div>
              </div>
            </div>
            <div className="menu__section menu__section--bottom">
              <img
                className="icn_audio_svg"
                src="/utopia/images/icn_player.svg"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
