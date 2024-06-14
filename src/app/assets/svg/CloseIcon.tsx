import clsx from 'clsx';
import { FC } from 'react';

interface Props extends React.HTMLAttributes<HTMLInputElement> {}

const CloseIcon: FC<Props> = ({ color, className }) => {
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
        d="M6.4 19.5L5 18.1L10.6 12.5L5 6.9L6.4 5.5L12 11.1L17.6 5.5L19 6.9L13.4 12.5L19 18.1L17.6 19.5L12 13.9L6.4 19.5Z"
        fill={color ?? "#03264D"}
      />
    </svg>
  );
};

export default CloseIcon;
