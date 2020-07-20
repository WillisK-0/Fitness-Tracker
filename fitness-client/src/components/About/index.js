import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "../partials/SectionHeader";
import Image from "../elements/Image";
import "./style.css";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const About = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: <u>About Us</u>,
    paragraph:
      "The team who made this website come to life. See more of our work or get in contact with us below.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="devCont">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <img
                    className="devImg"
                    src={require("./images/kw.jpeg")}
                    alt="Keith Willis photo"
                  />
                </div>
                <h4 className="title">Keith Willis</h4>
                <div className="linksref">
                  <a
                    href="https://github.com/WillisK-0"
                    target="_blank"
                    className="icon-links"
                  >
                    <Image
                      src={require("./icons/gh.svg")}
                      alt="Keith Willis Github"
                      width={45}
                      height={45}
                      className="icon-links"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/keith-willis-528251156/"
                    target="_blank"
                    className="icon-links"
                  >
                    <Image
                      src={require("./icons/ln.svg")}
                      alt="Keith Willis Linkedin"
                      width={45}
                      height={45}
                      className="icon-links"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="devCont">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <img
                    className="devImg"
                    src={require("./images/jg.jpeg")}
                    alt="Jared Garcia photo"
                  />
                </div>
                <h4 className="title">Jared Garcia</h4>
                <div className="linksref">
                  <a
                    href="https://github.com/JGarcia1998"
                    target="_blank"
                    className="icon-links"
                  >
                    <Image
                      src={require("./icons/gh.svg")}
                      alt="Jared Garcia Github"
                      width={45}
                      height={45}
                      className="icon-links"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jared-garcia-3a51741a6/"
                    target="_blank"
                    className="icon-links"
                  >
                    <Image
                      src={require("./icons/ln.svg")}
                      alt="Jared Garcia LinkedIn"
                      width={45}
                      height={45}
                      className="icon-links"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="devCont">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <img
                    className="devImg"
                    src={require("./images/no.jpeg")}
                    alt="Nathan Orris photo"
                  />
                </div>
                <h4 className="title">Nathan Orris</h4>
                <div className="linksref">
                  <a
                    href="https://github.com/NathanNOSudo"
                    target="_blank"
                    className="icon-links"
                  >
                    <Image
                      src={require("./icons/gh.svg")}
                      alt="Nathan Orris Github"
                      width={45}
                      height={45}
                      className="icon-links"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nathanorris/"
                    target="_blank"
                    className="icon-links"
                  >
                    <Image
                      src={require("./icons/ln.svg")}
                      alt="Nathan Orris LinkedIn"
                      width={45}
                      height={45}
                      className="icon-links"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="devCont">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <img
                    className="devImg"
                    src={require("./images/ae.jpeg")}
                    alt="Andrew Ellis photo"
                  />
                </div>
                <h4 className="title">Andrew Ellis</h4>
                <div className="linksref">
                  <a
                    href="https://github.com/h-drew-ellis"
                    target="_blank"
                    className="icon-links"
                  >
                    <Image
                      src={require("./icons/gh.svg")}
                      alt="Andrew Ellis Github"
                      width={45}
                      height={45}
                      className="icon-links"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/andrew-311is/"
                    target="_blank"
                    className="icon-links"
                  >
                    <Image
                      src={require("./icons/ln.svg")}
                      alt="Andrew Ellis Linkedin"
                      width={45}
                      height={45}
                      className="icon-links"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

About.propTypes = propTypes;
About.defaultProps = defaultProps;

export default About;
