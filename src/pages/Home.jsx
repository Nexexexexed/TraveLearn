import styles from './Home.module.css'
import classNames from 'classnames'
import hand from '../shared/assets/images/hand.png'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first_block}>
        <div className={styles.decor_f_block}>
          <div>
            <p className={styles.text_f_block}>Запечатли места которые ты видел</p>
          </div>
          <div>
            <p className={classNames(styles.text_f_block, styles.cursive)}><b>И проложи путь в новые приключения</b></p>
          </div>
          <div>
            <img src={hand} className={styles.hand}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
