import React, { FC } from 'react';
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => createStyles({
  text: {
    color: "#000",
    margin: "0",
    width: "100%",
    textAlign: "center",
  },
  area: {
    background: "#aaa",
    width: "100vw",
    opacity: "0.8",
  }
}))

const Footer: FC = () => {
  const classes = useStyle();
  return (
    <div className={ classes.area }>
      <h3 className={ classes.text }>Footerだよ。</h3>
    </div>
  );
}

export default Footer;