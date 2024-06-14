import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import { menu } from '@/app/config/main';
import { motion } from 'framer-motion';
import IconChevronDown from '@/app/assets/svg/IconChevronDown';
import ButtonBasicLink from '@/app/components/Button/ButtonBasicLink';
import ButtonBasic from '@/app/components/Button/ButtonBasic';
import { BottomBar } from '@/app/components/BottomBar/index';
import { useEffect, useState } from 'react';
// import LogoLKP from '@/assets/img/logo/logo-lkp-horizontal.png';
import MenuIcon from '@/app/assets/svg/MenuIcon';
import { removeBodyFixed, setBodyFixed } from '@/app/utils/helper';
// import btwAcademyLogo from '@/assets/img/logo/btw-academy-logo.png';
import CloseIcon from '@/app/assets/svg/CloseIcon';

const Header = () => {
  const [isMenuHovered, setIsMenuHovered] = useState<boolean>(false);
  const [isActiveBottomBar, setIsActiveBottomBar] = useState<boolean>(false);

  const handleBottomBar = () => {
    setIsActiveBottomBar((prev) => !prev);
  };

  // if (isActiveBottomBar) {
  //   setBodyFixed();
  // } else {
  //   removeBodyFixed();
  // }

  // useEffect(() => {
  //   return () => {
  //     removeBodyFixed();
  //   };
  // }, []);

  return (
    <header className={clsx('w-full')}>
      <div
        className={clsx(
          'max-w-[90%] mx-auto h-[80px]',
          'flex gap-x-10 justify-end items-center',
          'lg:h-[100px] lg:justify-center 2xl:max-w-7xl'
        )}
      >
        {/* <div>
          <div
            className={clsx(
              'max-w-64',
              'md:w-[250px] md:max-w-none',
              'lg:w-[300px]',
              'xl:w-[320px]',
              'min-[1400px]:w-[320px]'
            )}
          >
            <Link href={'/'}>
              <Image
                src={btwAcademyLogo}
                alt={'Logo LKP'}
                width={281}
                height={80}
                className={clsx('w-full')}
              />
            </Link>
          </div>
        </div> */}
        <nav
          className={clsx('gap-x-14 items-center hidden relative', 'lg:flex')}
        >
          <ul
            className={clsx('h-full', 'flex justify-end gap-x-12 items-center')}
          >
            {menu.map((data, index) => (
              <li
                key={index}
                className={clsx(
                  'rounded-[5px] group text-center group py-10 cursor-pointer',
                  'lg:rounded-[10px] flex gap-x-1'
                )}
                onMouseEnter={() => {
                  if (data.items) {
                    setIsMenuHovered(true);
                  }
                }}
                onMouseLeave={() => {
                  if (data.items) {
                    setIsMenuHovered(false);
                  }
                }}
              >
                {data.name !== 'Program Kami' ? (
                  <Link
                    href={data.url}
                    className={clsx(
                      'text-white text-sm transition-all font-st-bold hover:underline hover:decoration-1'
                    )}
                  >
                    {data.name}
                  </Link>
                ) : (
                  <span className={clsx('text-white text-sm font-st-bold')}>
                    {data.name}
                  </span>
                )}
                <IconChevronDown
                  className={clsx(
                    isMenuHovered ? '-rotate-180' : 'rotate-0',
                    data.name !== 'Program Kami' && 'hidden',
                    'duration-300 ease-in-out'
                  )}
                  color='#fff'
                  style={{ transitionProperty: 'transform' }}
                />
                {data.items && (
                  <motion.div
                    className={clsx(
                      'absolute top-[90px] pt-5 w-[750px] transition -left-[40%] opacity-0 invisible -z-10 duration-300 group-hover:opacity-100 group-hover:inline-block group-hover:translate-y-1 group-hover:visible group-hover:z-30'
                    )}
                  >
                    <div className={clsx('bg-white p-2 shadow  rounded ')}>
                      <div className={clsx('grid grid-cols-3 gap-2')}>
                        {data.items?.map((item, index) => (
                          <Link
                            key={index}
                            href={`/program-kami/${item.url}`}
                            className={clsx('hover:bg-[#FFEECC] p-5 rounded')}
                          >
                            {/* <p
                              className={clsx(
                                'text-sm font-medium mt-3 text-left'
                              )}
                            >
                              {item.desc}
                            </p> */}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>
          {/* <ButtonBasicLink
            className={clsx('py-4 px-7 text-base font-st-bold')}
            linkTo={'/'}
          >
            Konsultasi Sekarang
          </ButtonBasicLink> */}
        </nav>
        <div
          className={clsx('flex items-center relative gap-x-5', 'lg:hidden')}
        >
          <ButtonBasic
            variant="text-only"
            onClick={handleBottomBar}
            className={clsx('relative')}
          >
            <MenuIcon
              className={clsx(
                'cursor-pointer transition-[transform_opacity] duration-500',
                isActiveBottomBar
                  ? 'scale-0 invisible opacity-0 absolute'
                  : 'opacity-100 scale-100'
              )}
              color='#fff'
            />
            <CloseIcon
              className={clsx(
                'cursor-pointer transition-[transform_opacity] duration-500',
                isActiveBottomBar
                  ? 'scale-100 opacity-100'
                  : 'scale-0 invisible absolute opacity-0'
              )}
              color='#fff'
            />
          </ButtonBasic>
        </div>
      </div>
      {/* BottomBar */}
      <BottomBar
        isActiveBottomBar={isActiveBottomBar}
        // onClose={() => setIsActiveBottomBar((prev) => !prev)}
        className={clsx('lg:hidden')}
      />
      {/* End BottomBar */}
    </header>
  );
};

export default Header;
