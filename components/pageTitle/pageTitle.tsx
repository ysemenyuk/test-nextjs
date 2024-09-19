import cn from 'classnames';
import styles from './pageTitle.module.scss';

export const PageTitle = ({ className }: any): JSX.Element => {
  return (
    <div className={styles.title}>
      <div className={styles.title_container}>
        <h1>
          <span>проектирование, монтаж, обслуживание</span>
          <br />
          ПОЖАРНОЙ СИГНАЛИЗАЦИИ
        </h1>
        <span>в Москве и Московской области</span>
        <hr />
        <div className={styles.description}>
          Бесплатный осмотр и расчет стоимости. <br />
          Совместное прохождение проверки МЧС на объекте.
        </div>
      </div>
    </div>
  );
};
