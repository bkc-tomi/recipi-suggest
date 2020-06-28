import React, { FC } from 'react';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import IconButton from "@material-ui/core/IconButton";

const useStyle = makeStyles(() => createStyles({
  paper: {
    position: "absolute",
    width: "300px",
    left: "calc(50% - 150px)",
    top: "15%",
    opacity: "0.8",
    boxShadow: "5px 5px 20px #555",
  },
  textbox: {
    width: "85%",
    lineHeight: "100%",
    margin: "5px",
  },
  icon: {
    position: "absolute",
    bottom: "8px",
    margin: "0",
    padding: "0",
  }
}));

const SearchBox: FC<{ setKeyword: any, keyword: string }>= (props) => {
  const classes = useStyle();
  const changeKeyword = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setKeyword(event.target.value);
  }
  return (
      <Paper 
        className={ classes.paper }
      >
        <TextField
          id="standard-basic"
          label="検索"
          className={ classes.textbox }
          onChange={ changeKeyword }
          value={ props.keyword }
        />
        <IconButton
          className={ classes.icon }
        >
          <SearchIcon />
        </IconButton>
      </Paper>
  );
}

export default SearchBox;