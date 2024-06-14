'use client';

import Image from 'next/image';
import clsx from 'clsx';
import Header from './components/Header/Header';
import ButtonBasic from './components/Button/ButtonBasic';
import { ArrowUpRight } from 'lucide-react';
import profileImage from '@/app/assets/img/profile-image.png';
import Element1 from '@/app/assets/img/element-1.svg';
import Element2 from '@/app/assets/img/element-2.svg';
import { motion } from 'framer-motion';
import ElementBG from '@/app/assets/img/elements-line.svg';
import ButtonBasicLink from './components/Button/ButtonBasicLink';
import Footer from './components/Footer/Footer';

export default function Home() {
  const variants1 = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const variants2 = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const variants3 = {
    animate: {
      y: [0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <main className={clsx('bg-black h-full min-h-screen bg-no-repeat')}>
      {/* HEADER */}
      <Header />

      {/* Banner */}
      <div
        className={clsx(
          'w-[90%] mx-auto relative flex flex-col',
          'lg:grid lg:grid-cols-2 lg:h-[90vh] lg:items-center',
          '2xl:max-w-7xl'
        )}
      >
        <div className={clsx('order-1 mt-[105%]', 'lg:order-first lg:mt-0')}>
          <p className={clsx('text-white font-light', 'lg:text-xl')}>
            Hi there!{' '}
            <span
              className={clsx(
                'bg-white h-[1px] w-16 mb-1 ml-2 text-white inline-block'
              )}
            ></span>
          </p>
          <h1
            className={clsx(
              'text-white font-bold text-3xl mt-4',
              'lg:text-5xl'
            )}
          >
            I&lsquo;m Yusa Darmawan
          </h1>
          <p
            className={clsx(
              'text-white text-2xl font-light mt-4',
              'lg:text-3xl'
            )}
          >
            A Front-End Developer
          </p>
          <ButtonBasicLink
            className={clsx('rounded-xl mt-5', 'lg:mt-8')}
            linkTo={'/projects'}
          >
            Explore My Project <ArrowUpRight />
          </ButtonBasicLink>
        </div>
        <div
          className={clsx(
            'relative h-full flex items-center',
            'lg:justify-center'
          )}
        >
          <div className={clsx('hidden absolute w-full', 'lg:flex')}>
            <Image src={ElementBG} alt={''} className={clsx('w-full')} />
          </div>
          <div className={clsx('w-[85%] relative mt-7', 'lg:w-[50%] lg:h-96')}>
            <motion.div
              variants={variants1}
              initial="initial"
              animate="animate"
              className={clsx('delay-0')}
            >
              <Image
                src={Element1}
                alt={''}
                className={clsx('absolute w-full')}
              />
            </motion.div>
            <motion.div
              variants={variants2}
              initial="initial"
              animate="animate"
              className={clsx('delay-0')}
            >
              <Image
                src={Element2}
                alt={''}
                className={clsx('absolute  top-5 -right-5 w-full')}
              />
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              animate="animate"
              className={clsx('delay-0')}
            >
              <Image
                src={profileImage}
                alt={'Profile Image'}
                className={clsx('absolute top-10 -right-10 w-full')}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
