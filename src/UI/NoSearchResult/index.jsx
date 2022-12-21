import React from 'react';
import cn from 'classnames';

import classes from './noSearchResult.module.scss';

const NoSearchResult = ({refreshData}) => {
  return (
    <div className={classes.noSearch}>
      <h3>Поиск не дал результатов!</h3>
      <button className={cn(classes.noSearchBtn, 'btn-reset')} onClick={refreshData}>вернуться</button>
    </div>
  );
};

export default NoSearchResult;