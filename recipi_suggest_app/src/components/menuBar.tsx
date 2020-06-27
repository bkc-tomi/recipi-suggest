import React, { FC } from 'react';
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => createStyles({
  backgroundTheme: {
    backgroundColor: "#ff6f00",
    width: "100%",
    height: "100%",
  }
}));
const MenuBar: FC = () => {
  const classes = useStyle();
  return (
    <div className={ classes.backgroundTheme }>
      メニューバー
    </div>
  );
}

export default MenuBar;