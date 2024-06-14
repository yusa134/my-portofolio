import type { FC } from 'react'

import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

interface IButtonBasicProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode

  size?: 'xs' | 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'outline' | 'icon' | 'text-only'

  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
  isDisabled?: boolean
  isLoading?: boolean
  isFullWidth?: boolean
}

type ButtonStyle = Record<string, string[] | string>

const ButtonBasic: FC<IButtonBasicProps> = ({
  size = 'md',
  type = 'button',
  children,
  className,
  onClick,
  variant = 'primary',
  isLoading = false,
  isDisabled = false,
  isFullWidth,
  leftIcon,
  rightIcon,
}) => {
  const sizes: ButtonStyle = {
    xs: 'py-1 px-3 text-sm',
    sm: 'py-2 px-3 text-sm',
    md: 'py-3 px-4 text-sm',
    lg: 'p-4 sm:p-5 text-base',
  }

  const variants: ButtonStyle = {
    primary: [
      'bg-primary text-white border-transparent',
      'hover:bg-primary/80',
      'disabled:bg-primary/60',
    ],
    secondary: [
      'bg-white text-main-grayscale-700 border-2 border-gray-300',
      'hover:bg-white',
      'disabled:bg-white/60',
    ],
    outline: [
      'bg-transparent border-2 text-main-grayscale-700 border-gray-300',
      'hover:bg-main-grayscale-200',
      'disabled:opacity-50',
    ],
    icon: ['bg-transparent text-blue-600 border-transparent'],
    'text-only': ['p-0'],
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={twMerge(
        isFullWidth && 'w-full',
        sizes[size] || 'py-3 px-4',
        variants[variant] || 'bg-primary text-white border-transparent',
        'inline-flex items-center justify-center gap-x-2',
        'transition-all duration-300 font-semibold',
        'disabled:cursor-not-allowed',
        className
      )}
    >
      {isLoading && (
        <span
          className={clsx(
            'animate-spin inline-block w-4 h-4',
            'border-2 border-current border-t-transparent rounded-full',
            variant === 'primary' && 'text-white',
            variant === 'outline' && 'text-main-grayscale-700'
          )}
          role="status"
          aria-label="loading"
        />
      )}
      {leftIcon && <span className="inline-flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && (
        <span className="inline-flex items-center">{rightIcon}</span>
      )}
    </button>
  )
}

export default ButtonBasic
