import React, { FC } from 'react';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import finger from "../assets/image/icon_finger.png";
import Paper from "@material-ui/core/Paper";

const useStyle = makeStyles(() => createStyles({
  cover: {
    position: "absolute",
    background: "#222",
    width: "100%",
    height: "100%",
    opacity: "0.8",
  },
  image1: {
    width: "50px",
    transform: "rotate(270deg)",
    position: "absolute",
    top: "5%",
    left: "calc(50% - 150px)",
  },
  paper1: {
    position: "absolute",
    width: "250px",
    height: "50px",
    top: "5%",
    left: "calc(50% - 100px)",
  },
  image2: {
    width: "50px",
    transform: "rotate(270deg)",
    position: "absolute",
    top: "27%",
    left: "20%",
  },
  paper2: {
    position: "absolute",
    width: "50%",
    top: "27%",
    left: "calc(20% + 50px)",
  },
  image3: {
    width: "50px",
    transform: "rotate(270deg)",
    position: "absolute",
    bottom: "70px",
    right: "10px",
  },
  paper3: {
    position: "absolute",
    width: "220px",
    height: "80px",
    bottom: "70px",
    right: "70px",
  },
}));

const HowToUsePage: FC = () => {
  const classes = useStyle();
  return (
    <div>
      <div className={ classes.cover }>
      </div>
      <div>
        <img
          src={ finger }
          alt="finger"
          className={ classes.image1 }
        />
        <Paper className={ classes.paper1 }>
          ここに食材などのキーワードを入れましょう！
        </Paper>
        <img
          src={ finger }
          alt="finger"
          className={ classes.image2 }
        />
        <Paper className={ classes.paper2 }>
          ここに関連した食材などの一覧が出てきます。クリック(タップ)すると楽天のレシピページに飛びます。お好みの料理を見つけましょう！
        </Paper>
        <img
          src={ finger }
          alt="finger"
          className={ classes.image3 }
        />
        <Paper className={ classes.paper3 }>
          このページを閉じる時はもう一度使い方をクリック(タップ)してください。
        </Paper>
      </div>
    </div>
  );
}

export default HowToUsePage;