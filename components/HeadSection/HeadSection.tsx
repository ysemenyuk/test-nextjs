import cn from 'classnames';
import styles from './headSection.module.scss';

const pr = {
  h1: 'ПОЖАРНОЙ СИГНАЛИЗАЦИИ',
  h1span: 'проектирование, монтаж, обслуживание',
  span: 'в Москве и Московской области',
  description: `Бесплатный осмотр и расчет стоимости.
          Совместное прохождение проверки МЧС на объекте.`,
};

export const HeadSection = ({
  h1Top,
  h1Title,
  h1Buttom,
  description,
}: any): JSX.Element => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>
          <span>{h1Top}</span>
          <br />
          {h1Title}
        </h1>
        <span>{h1Buttom}</span>
        <hr />
        <div className={styles.description}>{description}</div>
      </div>
    </section>
  );
};
