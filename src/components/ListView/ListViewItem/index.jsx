import LinesEllipsis from 'react-lines-ellipsis'
import Link from 'next/link'
import {getDate, getPortal} from "../../../utils";
import classes from "./listViewItem.module.scss"

const ListViewItem = ({title, preview, link, date, imageLink}) => {
  return (
    <article className={classes.newArticle}>
      <div className={classes.newInfo}>
        <div className={classes.imageBlock}>
          <img className={classes.newImage} src={imageLink} alt={title}/>
        </div>
        <div  className={classes.textBlock}>
          <Link href={link} target='_blank'>
            <LinesEllipsis
              className={classes.newArticleTitle}
              text={title}
              maxLine='3'
              ellipsis='...'
              trimRight
              basedOn='letters'
            />
          </Link>
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
        </div>
      </div>
      <div className={classes.newFooter}>
        <span className={classes.newArticleSource}><Link href={`https://${getPortal(link)}`} target='_blank'>{getPortal(link)}</Link></span>
        <span className={classes.newArticleDate}>{getDate(date)}</span>
      </div>
    </article>
  )
}

export default ListViewItem;