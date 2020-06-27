import React, { FC, useState, useEffect } from 'react';
import { TileData } from "./type/type";
import SideBar from "./components/sideBar";
import MenuBar from "./components/menuBar";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => createStyles({
  sidebar: {
    position: "relative",
    margin: "0",
    left: "0px",
    height: "calc(100vh - 50px)",
  },
  menubar: {
    width: "100%",
    height: "50px",
    margin: "0",
  },
}));

const TopPage: FC = () => {
  const [datas, setDatas] = useState<TileData[]>([]);
  const classes = useStyle();
  const getData = () => {
    const applicationId = "1094694527938014270";
    const url = `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&categoryType=small&applicationId=${ applicationId }`;
    const request = new XMLHttpRequest();
    const datas: Object[] = [];

    request.open("GET", url, true);
    request.onload = function () {
      const result = this.response;
      const resultJson = JSON.parse(result);
      console.log(resultJson);
      resultJson.result.small.map((data: TileData) => {
        datas.push(data);
      });
      setDatas(datas as TileData[]);
    }
    request.send();
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className={ classes.menubar }>
        <MenuBar />
      </div>
      <div className={ classes.sidebar }>
        <SideBar
          props={datas}
        />
      </div>
    </div>
  );
}

export default TopPage;