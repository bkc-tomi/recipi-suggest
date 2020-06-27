import React, { FC, useState, useEffect } from 'react';
import { TileData } from "./type/type";
import ResultList from "./components/resultList";
import SearchBox from "./components/search";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import bgImage from "./assets/image/background.jpg";
import Footer from "./components/footer";

const useStyle = makeStyles(() => createStyles({
  bg: {
    backgroundImage: `url(${ bgImage })`,
    height: "100vh",
    backgroundSize: "cover",
  },
  resultlist: {
    margin: "0 auto",
    padding: "0",
    position: "relative",
    top: "25%",
    height: "60%",
    width: "90%",
  },
  title: {
    margin: "0",
    textAlign: "center",
    color: "#fff",
    textShadow: "2px 2px 5px #000",
    position: "relative",
    top: "10%",
    fontSize: "26px",
  },
  footer: {
    position: "absolute",
    bottom: "0",
  }
}));

const TopPage: FC = () => {
  const [datas, setDatas] = useState<TileData[]>([]);
  const [keyword, setKeyword] = useState<string>("");

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
    <div className={ classes.bg }>
      <h1 className={ classes.title }>今日の献立何にしよ？</h1>
      <SearchBox
        setKeyword={ setKeyword }
        keyword={ keyword }
      />
      <div className={ classes.resultlist } >
        <ResultList
          datas={ datas }
          keyword={ keyword }
        />
      </div>
      <div className={ classes.footer }>
        <Footer />
      </div>
    </div>
  );
}

export default TopPage;