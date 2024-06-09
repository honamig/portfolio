import React from "react";
import styles from "./Button.module.css";
import { clsx } from "clsx";
import Link from "next/link";

export const Button = ({ href, color, disabled, handleClick, children, customClasses, ...props }) => {
  const classes = clsx(
    styles.button,
    {
      [styles.buttonBlack]: color === "black",
      [styles.buttonWhite]: color === "white",

      [styles.buttonDisabled]: disabled,
    },

    customClasses
  );

  if (href) {
    return (
      <Link href={disabled ? "" : href} onClick={handleClick} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button disabled={disabled} onClick={handleClick} className={classes} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
  size: "lg",
  href: undefined,
  disabled: undefined,
  customClasses: undefined,
  handleClick: undefined,
  children: undefined,
};
