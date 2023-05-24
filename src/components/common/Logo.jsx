import React from "react";
import classNames from "classnames";

function Logo(props) {
  const boxClassNames = classNames(props.boxClassNames);
  const imgClassNames = classNames(props.imgClassNames);

  return (
    <picture className={boxClassNames}>
      <source
        className={imgClassNames}
        srcSet={props.srcSetSm}
        media="(max-width: 37.5rem)"
      />
      <img
        className={imgClassNames}
        srcSet={props.srcSetLg}
        src={props.src}
        alt={props.alt}
      />
    </picture>
  );
}

export default Logo;
