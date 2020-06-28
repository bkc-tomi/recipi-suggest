import React, { FC } from 'react';
import Fab from '@material-ui/core/Fab';
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => createStyles({
  btn: {
    zIndex: 200,
    position: "absolute",
    bottom: "5px",
    right: "10px",
    fontSize: "16px",
  },
  
}));

const HowToUseBtn: FC<{ visible: boolean, setVisible: any, setKeyword: any }> = (props) => {
  const classes = useStyle();
  const changeVisible = () => {
    if (props.visible) {
      props.setVisible(false);
      props.setKeyword("");
    } else {
      props.setVisible(true);
      props.setKeyword("芋");
    }
  }
  return (
    <Fab
      className={ classes.btn }
      onClick={ changeVisible }
    >
      使い方
    </Fab>
  );
}

export default HowToUseBtn;