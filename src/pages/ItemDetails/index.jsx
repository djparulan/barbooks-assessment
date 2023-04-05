import { Link } from 'react-router-dom'

import useData from '../../hooks/useData'
import styles from './index.module.scss'
import leftArrow from '../../images/left-arrow.png'

const ItemDetails = () => {
  const { gameDetails } = useData()
  
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Find & track the best free-to-play games!</h1>
      <h4 className={styles.subtitle}>Search for what to play next!</h4>
      {
        !!gameDetails &&
        <div className={styles.container}>
          <div className={styles.content}>
            <div>
              {
                !!gameDetails?.thumbnail &&
                <img className={styles.image} src={`https://api.dev.cloud.barbooksaustralia.com/code-challenge${gameDetails?.thumbnail}`} alt={gameDetails?.title} />
              }
            </div>
            <div className={styles.details}>
              <div>
                <h2 className={styles.details__title}>Requirements</h2>
                <div className={styles.details__item}>
                  <div>
                    <strong>Graphics</strong>
                  </div>
                  {gameDetails?.graphics}
                </div>
                <div className={styles.details__item}>
                  <div>
                    <strong>RAM</strong>
                  </div>
                  {gameDetails?.memory}
                </div>
                <div className={styles.details__item}>
                  <div>
                    <strong>Operating System</strong>
                  </div>
                  {gameDetails?.os}
                </div>
                <div className={styles.details__item}>
                  <div>
                    <strong>Processor</strong>
                  </div>
                  {gameDetails?.processor}
                </div>
                <div className={styles.details__item}>
                  <div>
                    <strong>Storage</strong>
                  </div>
                  {gameDetails?.storage}
                </div>
              </div>
              <div>
                <h2 className={styles.details__title}>{gameDetails?.title}</h2>
                <p className={styles.details__item}><strong>Genre:</strong> {gameDetails?.genre}</p>
                <p className={styles.details__item}><strong>Developed by:</strong> {gameDetails?.developer}</p>
                <p className={styles.details__item}><strong>Published by:</strong> {gameDetails?.publisher}</p>
                <p className={styles.details__item}><strong>Released:</strong> {gameDetails?.releaseDate}</p>
                <p className={styles.details__item}>{gameDetails?.description}</p>
              </div>
              <Link className={styles.backButton} to={'/'}><img className={styles.icon} src={leftArrow} alt='left arrow' /> Back</Link>
            </div>
          </div>
          <div className={styles.screenshots}>
            {
              gameDetails?.screenshots.map((item) => (
                <img key={item.id} className={styles.image} src={`https://api.dev.cloud.barbooksaustralia.com/code-challenge${item.image}`} alt={`${gameDetails?.title} Screenshot`} />
              ))
            }
          </div>
        </div>
      }
    </div>
  )
}

export default ItemDetails