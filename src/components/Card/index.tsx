import React, { FC, MouseEventHandler, PropsWithChildren } from "react";
import classes from "./Card.module.scss";

type CardProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const Card: FC<PropsWithChildren<CardProps>> = ({
  onClick,
  children,
  disabled = false,
}) => (
  <button
    type="button"
    className={classes.card}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

Card.defaultProps = {
  onClick: undefined,
  disabled: false,
};

export default Card;
