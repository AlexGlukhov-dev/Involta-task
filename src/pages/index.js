import React, {useState} from 'react'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {createFeedsData, sortFeedsData} from "../redux/slices/appData";
import {wrapper} from "../redux/store";
import { parse } from 'rss-to-json';
import Header from "../components/Header";
import FilterBlock from "../components/FilterBlock";
import GridView from "../components/GridView";
import ListView from "../components/ListView";
import cn from "classnames";
import classes from './homePage.module.scss'
const Index = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const {sortedData} = useSelector(state => state.data);

  const [value, setValue] = useState('');
  const [listView, setListView] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const refreshData = () => router.replace(router.asPath);
  const checkedNews = portal => dispatch(sortFeedsData(portal))
  return (
    <div className={classes.app}>
      <div className={cn(classes.container, classes.appContainer)}>
        <Header title="Список новостей"
                search={value}
                setSearch={setValue}
                refreshData={refreshData}
        />
        <FilterBlock
          setListView={setListView}
          listView={listView}
          getNews={checkedNews}
          setItemOffset={setItemOffset}
        />
        {
          listView
            ?
          <ListView
            news={sortedData}
            itemsPerPage={3}
            newsContainer={classes.newsContainer}
            classPagination={classes.pagination}
            classPaginationActive={classes.paginationActive}
            refreshData={refreshData}
            itemOffset={itemOffset}
            setItemOffset={setItemOffset}
          />
            :
          <GridView
            news={sortedData}
            itemsPerPage={4}
            newsContainer={classes.newsContainer}
            classPagination={classes.pagination}
            classPaginationActive={classes.paginationActive}
            refreshData={refreshData}
            itemOffset={itemOffset}
            setItemOffset={setItemOffset}
          />
        }
      </div>
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  store => async () => {
    const mosData = await parse('https://www.mos.ru/rss')
    const lentaData = await parse('https://lenta.ru/rss/news');
    const data = {
      mos: JSON.parse(JSON.stringify(mosData)),
      lenta: JSON.parse(JSON.stringify(lentaData)),
    }
    store.dispatch(createFeedsData([...data?.mos?.items, ...data?.lenta?.items]))
  }
)
export default Index;