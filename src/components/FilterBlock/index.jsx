import classes from "./filterBlock.module.scss"
import {useState} from "react";
import cn from "classnames";
const FilterBlock = ({getNews, setListView, listView, setItemOffset}) => {
  const [active, setActive] = useState('all')
  const switchHandler = news => {
    getNews(news)
    setItemOffset(0)
    setActive(news)
  }
  console.log(active)
  return (
    <div className={classes.filterBlock}>
      <div>
        <button onClick={() => switchHandler('all')} className={cn(classes.newsSourcesBtn, active === 'all' && classes.activeLink)}>Все</button>
        <button onClick={() => switchHandler('lenta.ru')} className={cn(classes.newsSourcesBtn, active === 'lenta.ru' && classes.activeLink)}>Lenta.ru</button>
        <button onClick={() => switchHandler('mos.ru')} className={cn(classes.newsSourcesBtn, active === 'mos.ru' && classes.activeLink)}>Mos.ru</button>
      </div>
      <div>
        <button onClick={() => setListView(true)} className={classes.listView}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18" height="8" fill={`${listView ? "#0029ff" : "#C4C4C4"}`}/>
            <rect y="10" width="18" height="8" fill={`${listView ? "#0029ff" : "#C4C4C4"}`}/>
          </svg>
        </button>
        <button onClick={() => setListView(false)} className={classes.blockView}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="8" height="8" fill={`${!listView ? "#0029ff" : "#C4C4C4"}`}/>
            <rect y="10" width="8" height="8" fill={`${!listView ? "#0029ff" : "#C4C4C4"}`}/>
            <rect x="10" width="8" height="8" fill={`${!listView ? "#0029ff" : "#C4C4C4"}`}/>
            <rect x="10" y="10" width="8" height="8" fill={`${!listView ? "#0029ff" : "#C4C4C4"}`}/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default FilterBlock;