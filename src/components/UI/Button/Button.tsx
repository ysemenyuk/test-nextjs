import cn from 'classnames';
import styles from './button.module.scss';

export const Button = ({ children, className, ...props }: any): JSX.Element => {
  return (
    <button className={cn(styles.button, className)} {...props}>
      {children}
    </button>
  );
};
