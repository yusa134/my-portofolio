import Link from 'next/link';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface IButtonBasicLinkProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;

  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'icon' | 'text-only' | 'blue';

  replace?: boolean;
  linkTo: string;
  linkType?: 'internal' | 'external';

  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  isFullWidth?: boolean;
}

type ButtonStyle = Record<string, string[] | string>;

const ButtonBasicLink: FC<IButtonBasicLinkProps> = ({
  id,
  size = 'md',
  children,
  className,
  variant = 'primary',
  replace = false,
  linkTo,
  linkType = 'internal',
  isFullWidth,
  leftIcon,
  rightIcon,
}) => {
  const sizes: ButtonStyle = {
    xs: 'py-1 px-3 text-sm',
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-sm',
    lg: 'p-4 sm:p-5 text-base',
  };

  const variants: ButtonStyle = {
    primary: [
      'bg-primary text-white border-transparent',
      'hover:bg-primary/90',
      'disabled:bg-primary/60',
    ],
    secondary: [
      'bg-white text-main-grayscale-700 border-transparent',
      'hover:bg-white',
      'disabled:bg-white/60',
    ],
    outline: [
      'bg-transparent border-2 text-main-grayscale-700 border-gray-300',
      'hover:bg-main-grayscale-200',
      'disabled:opacity-50',
    ],
    icon: ['bg-transparent text-blue-600 border-transparent'],
    blue: [
      'bg-[#BDDEFF] border-2 text-[#3D5EE5] border-[#62B5FF]',
      'disabled:opacity-50',
    ],
    'text-only': ['p-0'],
  };

  const buttonClassName = twMerge(
    isFullWidth && 'w-full',
    sizes[size] || 'py-3 px-4',
    variants[variant] || 'bg-[#FD8B22] text-white border-transparent',
    'inline-flex items-center justify-center gap-x-2',
    'transition-all duration-300 font-semibold',
    'disabled:cursor-not-allowed rounded-full',
    className
  );

  switch (linkType) {
    case 'internal':
      return (
        <Link
          id={id}
          href={linkTo}
          className={buttonClassName}
          replace={replace}
        >
          {leftIcon && (
            <span className="inline-flex items-center">{leftIcon}</span>
          )}
          {children}
          {rightIcon && (
            <span className="inline-flex items-center">{rightIcon}</span>
          )}
        </Link>
      );
    case 'external':
      return (
        <a
          id={id}
          href={linkTo}
          className={buttonClassName}
          target="_blank"
          rel="noreferrer"
        >
          {leftIcon && (
            <span className="inline-flex items-center">{leftIcon}</span>
          )}
          {children}
          {rightIcon && (
            <span className="inline-flex items-center">{rightIcon}</span>
          )}
        </a>
      );
    default:
      throw new Error('Invalid linkType');
  }
};

export default ButtonBasicLink;
