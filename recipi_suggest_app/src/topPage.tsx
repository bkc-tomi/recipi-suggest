import React, { FC, useState, useEffect } from 'react';
import { TileData } from "./type/type";
import SideBar from "./components/sideBar";

const TopPage: FC = () => {
  const [datas, setDatas] = useState<TileData[]>([]);
  const getData = () => {
    const applicationId = "1094694527938014270";
    const url = `https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&categoryType=medium&applicationId=${ applicationId }`;
    const request = new XMLHttpRequest();
    const datas: Object[] = [];

    request.open("GET", url, true);
    request.onload = function () {
      const result = this.response;
      const resultJson = JSON.parse(result);
      resultJson.result.medium.map((data: TileData) => {
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
    <SideBar
      props={datas}
    />
  );
}

export default TopPage;