import { BaseProps } from '@/app/types';
import clsx from 'clsx';
import { FC, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { menu } from '@/app/config/main';
import ButtonBasicLink from '../Button/ButtonBasicLink';
import IconChevronDown from '@/app/assets/svg/IconChevronDown';

interface Props extends BaseProps {
  isActiveBottomBar: boolean;
  onClose?: () => void;
}

export const BottomBar: FC<Props> = ({ isActiveBottomBar, onClose }) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState<boolean>(false);
  const sidebarElement = useRef<HTMLDivElement>(null);

  const handleDropDown = () => {
    setIsOpenDropDown(!isOpenDropDown);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarElement.current &&
        !sidebarElement.current.contains(event.target as Node)
      ) {
        // onClose(); // Menutup sidebar
      }
    };

    if (isActiveBottomBar) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isActiveBottomBar, onClose]);
  return (
    <div
      className={clsx(
        'bg-black text-primary mt-[10px] right-0 mb-20 top-[60px] z-50 w-full absolute transition-[max-height_opacity_padding] h-full ease-in-out px-5 overflow-hidden',
        !isActiveBottomBar
          ? 'max-h-0 duration-1000'
          : ' max-h-[1000px] duration-[1500ms]'
      )}
      ref={sidebarElement}
    >
      <div>
        {/* <div className={clsx('flex w-full items-center gap-x-5 py-5 h-[65px]')}>
          <div className={clsx('flex items-center justify-between w-full')}>
            <Link href={'/'}>
              <Image
                src={btwAcademyLogo}
                alt={'Logo LKP'}
                width={250}
                height={41}
                className={clsx('min-w-[150px] w-full max-w-[200px]')}
              />
            </Link>
          </div>
        </div> */}
        {/* Menu */}
        <ul className={clsx('')}>
          {menu.map((data, index) =>
            data.items ? (
              <div key={index}>
                <button
                  key={index}
                  className={clsx('w-full text-left flex')}
                  onClick={handleDropDown}
                >
                  <Link
                    href={data.url}
                    className={clsx('text-sm text-white font-st-bold')}
                  >
                    {data.name}
                  </Link>
                  <IconChevronDown
                    className={clsx(
                      isOpenDropDown ? '-rotate-180' : 'rotate-0',
                      'ml-1 transition-transform ease-in-out duration-300'
                    )}
                  />
                </button>
                <ul
                  className={clsx(
                    isOpenDropDown
                      ? 'opacity-100 max-h-[500px] overflow-visible duration-1000'
                      : 'opacity-0 max-h-0 overflow-hidden duration-500',
                    'pl-3 pr-5 transition-[opacity_height]'
                  )}
                >
                  {data.items.map((submenu, indexSub) => (
                    <li key={indexSub} className={clsx('py-3')}>
                      <Link
                        href={`/program-kami/${submenu.url}`}
                        className={clsx('text-sm text-white font-st-medium')}
                      >
                        <p className={clsx('mt-[10px] text-xs text-white')}>
                          {submenu.name}{' '}
                          {submenu.name === 'TNI & POLRI' && (
                            <span
                              className={clsx(
                                'bg-[#EB3863] rounded-[3px] p-1 font-cg-extrabold text-white ml-2'
                              )}
                            >
                              Baru!
                            </span>
                          )}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <li
                key={index}
                className={clsx('py-3', data.name === 'Alumni' && 'pt-6')}
              >
                <Link
                  href={data.url}
                  className={clsx('text-sm text-white font-st-bold')}
                >
                  {data.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      {/* CopyRight */}
      {/* <ButtonBasicLink className={clsx('w-full mt-3 mb-4')} linkTo={'/'}>
        Konsultasi Sekarang
      </ButtonBasicLink> */}
    </div>
  );
};
