import clsx from 'clsx';
import { FC } from 'react';

interface Props extends React.HTMLAttributes<HTMLInputElement> {}

const MenuIcon: FC<Props> = ({ color, className }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 18.5H21V16.5H3V18.5ZM3 13.5H21V11.5H3V13.5ZM3 6.5V8.5H21V6.5H3Z"
        fill={color ?? "#03264D"}
      />
    </svg>
  );
};

export default MenuIcon;
