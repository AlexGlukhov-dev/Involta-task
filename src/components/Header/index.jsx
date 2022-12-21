import React from "react";
import RefreshBtn from "../../UI/RefreshBtn";
import SearchField from "../../UI/SearchField";


import classes from "./header.module.scss";
import {useRouter} from "next/router";

const  Header = ({title, search, setSearch, refreshData}) => {

  return (
    <header className={classes.header}>
      <div className={classes.titleBlock}>
        <h1>{title}</h1>
        <RefreshBtn onClick={refreshData}/>
      </div>
      <div className={classes.search}>
        <SearchField searchValue={search} setSearchValue={setSearch}/>
      </div>
    </header>
  )
}

export default Header;