import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import rightArrow from '../../images/right-arrow.png'

const GameItem = ({item}) => {
  const { title, shortDescription, thumbnail, id } = item

  return (
    <div className={styles.item}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <div className={styles.content}>
        <img className={styles.image} src={`https://api.dev.cloud.barbooksaustralia.com/code-challenge${thumbnail}`} alt={title} />
        <div className={styles.description}>
          <div className={styles.description__text}>
            {shortDescription}
          </div>
        </div>
      </div>
      <Link className={styles.link} to={`/${id}`}>View More <img className={styles.icon} src={rightArrow} alt="Right Arrow" /></Link>
    </div>
  )
}

export default GameItem