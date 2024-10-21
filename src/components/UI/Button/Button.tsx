import cn from 'classnames';
import styles from './button.module.scss';

export const Button = ({
  children,
  primary,
  rounded,
  link,
  className,
  ...props
}: any): JSX.Element => {
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.primary]: primary,
          [styles.rounded]: rounded,
          [styles.link]: link,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
