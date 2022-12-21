import React from 'react';
import ReactPaginate from "react-paginate";
import GridViewItem from "./GridViewItem";

import classes from "./gridView.module.scss";
import NoSearchResult from "../../UI/NoSearchResult";

const GridView = ({news, itemsPerPage, classPagination, classPaginationActive, newsContainer, refreshData, itemOffset, setItemOffset}) => {
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = news.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(news.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % news.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={newsContainer}>
      <div className={classes.gridContainer}>
        {
          news.length
            ?
          currentItems.length && currentItems.map(item => <GridViewItem
            id={item?.link}
            title={item?.title}
            preview={item?.description}
            link={item?.link}
            source={item.link}
            date={item?.published}
            key={item.link}
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

export default GridView;