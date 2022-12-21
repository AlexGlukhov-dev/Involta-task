import ListViewItem from "./ListViewItem"

import classes from "./listView.module.scss"
import ReactPaginate from "react-paginate";
import React, {useState} from "react";
import NoSearchResult from "../../UI/NoSearchResult";

const ListView = ({news, itemsPerPage, classPagination, classPaginationActive, newsContainer, refreshData,itemOffset, setItemOffset}) => {
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = news.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(news.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % news.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={newsContainer}>
      <div className={classes.listContainer}>
        {
          news.length
          ?
          currentItems.length && currentItems.map((item, i) => <ListViewItem
            imageLink={item.enclosures[0].url}
            id={item.link + i}
            title={item.title}
            preview={item.description}
            link={item.link}
            date={item.published}
            key={item.link + i}
          />)
          :
          <NoSearchResult refreshData={refreshData}/>
        }
      </div>
      {news.length > 3 ? <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        className={classPagination}
        activeClassName={classPaginationActive}
        nextLabel={false}
        previousLabel={false}
      /> : null
      }
    </div>

  )
}

export default ListView;