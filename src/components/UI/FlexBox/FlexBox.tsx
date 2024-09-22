import cn from 'classnames';
import styles from './flexBox.module.scss';

interface IFlexBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const FlexBox = ({
  children,
  className,
}: IFlexBoxProps): JSX.Element => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};
