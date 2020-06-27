import React, { FC } from 'react';
import { TileData } from "../type/type";
import { Button } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyle = makeStyles(() => createStyles({
  list: {
    height: "100%",
  },
  btn: {
    background: "#eee",
    "&:hover": {
      background: "#aaa",
    },
    color: "#000",
    width: "98%",
    height: "95%",
    opacity: "0.8",
    fontSize: "16px",
    fontWeight: "bold",
  }
}));


const ResultList: FC<{ datas: TileData[], keyword: string }> = (props) => {
  const classes = useStyle();
  let filteredDatas: TileData[] = [];

  if (props.keyword !== "") {
    filteredDatas = props.datas.filter(data => data.categoryName.indexOf(props.keyword) > -1);
  }

  return (
    <GridList cellHeight={100} cols={3} className={ classes.list }>
      {filteredDatas.map( (data) => (
        <GridListTile key={ data.categoryId } cols={ 1 } >
            <Button
              href={ data.categoryUrl }
              className={ classes.btn }
            >
              { data.categoryName }
            </Button>
        </GridListTile>
      ))}
    </GridList>
  );
}

export default ResultList;