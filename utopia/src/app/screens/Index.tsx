import * as React from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import * as classNames from "classnames";

@observer
export class Index extends React.Component {
  render() {
    return (
      <div className="hero">
        <div className="hero__left">
          <div className="hero__gallery">
            <div className="hero__gallery__image">
              <img src="/utopia/images/img_slide_1.jpg" />
            </div>
          </div>
          <div className="hero__footer">
            <div className="hero__text">
              <h1>Kristinas Väg</h1>
              <div>
                Projektet består av två byggnader, en högre utskjuten volym mot
                Drottning Kristinas väg och ett lägre lamellhus.
              </div>
              <div className="learnMore">
                <a href="#">Lær Mere</a>
              </div>
            </div>
            <div className="hero__slides">
              <div className="hero__slides__item">
                <div className="number">01</div>
                <img src="/utopia/images/img_slide_1_small.jpg" />
              </div>
              <div className="hero__slides__item">
                <div className="number">02</div>
                <img src="/utopia/images/img_slide_2_small.jpg" />
              </div>
              <div className="hero__slides__item">
                <div className="number">03</div>
                <img src="/utopia/images/img_slide_3_small.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero__project_title">
            <h1>Projektet består av <span>byggnader</span></h1>
            <div className="author">
              <div className="author__text">
                <div className="name">Jeppe Dueholm</div>
                <div className="title">Sr. Arkitekt</div>
              </div>  
              <div className="author__image">
                <img src="/utopia/images/img_slide_1_author.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
