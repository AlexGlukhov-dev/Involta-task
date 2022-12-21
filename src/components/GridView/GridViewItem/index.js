import LinesEllipsis from 'react-lines-ellipsis'
import Link from 'next/link'
import {getDate, getPortal} from "../../../utils";

import classes from "./gridViewItem.module.scss"

const GridViewItem = ({title, preview, link, date}) => {
  return (
    <article className={classes.newArticle}>
      <LinesEllipsis
        className={classes.newArticleTitle}
        text={title}
        maxLine='3'
        ellipsis='...'
        trimRight
        basedOn='letters'
      />
      <div>
        <LinesEllipsis
          className={classes.newArticlePreview}
          text={preview}
          maxLine='2'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
        <Link className={classes.newArticleLink} href={link} target='_blank'>Подробнее</Link>
      </div>
      <div className={classes.newFooter}>
        <span className={classes.newArticleSource}><Link href={`https://${getPortal(link)}`} target='_blank'>{getPortal(link)}</Link></span>
        <span className={classes.newArticleDate}>{getDate(date)}</span>
      </div>
    </article>
  )
}

export default GridViewItem;