import clsx from 'clsx';
import { FC } from 'react';

interface Props extends React.HTMLAttributes<HTMLInputElement> {}

const IconChevronDown: FC<Props> = ({ color, className }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M15 8.5L10.97 14.5L7 8.5H15Z" fill={color ?? '#03264D'} />
    </svg>
  );
};

export default IconChevronDown;
