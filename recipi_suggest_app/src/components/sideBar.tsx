import React, { FC } from 'react';
import { TileData } from "../type/type";
import { Button, ButtonGroup } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => createStyles({
  bgTheme: {
    backgroundColor: "#ff6f00",
    height: "100vh",
    overflowY: "scroll",
  },
  btn: {
    fontSize: "16px",
    color: "#fff8e1",
  }
}));
const SideBar: FC<{props: TileData[]}> = ({ props }) => {
  const classes = useStyle();
  return (
    <ButtonGroup
      orientation="vertical"
      className={classes.bgTheme}
    >
      {props.map((data) => (
        <Button
          href={ data.categoryUrl }
          className={classes.btn}
        >
          { data.categoryName }
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default SideBar;