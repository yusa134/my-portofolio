'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import profileImage from '@/app/assets/img/profile-image.png';
import Element1 from '@/app/assets/img/element-1.svg';
import Element2 from '@/app/assets/img/element-2.svg';
import { motion } from 'framer-motion';
import ElementBG from '@/app/assets/img/elements-line.svg';
import Header from '../components/Header/Header';
import { projects } from '../config/main';
import Link from 'next/link';
import ButtonBasicLink from '../components/Button/ButtonBasicLink';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <main className={clsx('bg-black h-full min-h-screen bg-no-repeat')}>
      {/* HEADER */}
      <Header />

      <div className={clsx('text-white w-[90%] mx-auto mt-10', 'lg:max-w-7xl')}>
        <h1 className={clsx('text-center font-bold text-3xl')}>My Projects</h1>
        <p className={clsx('text-center mt-5 text-gray-300')}>
          Here Are Some Projects I&apos;ve Created
        </p>
        <div
          className={clsx(
            'grid gap-y-5 mt-10 mb-10',
            'md:grid-cols-2 md:gap-x-5',
            'lg:grid-cols-3'
          )}
        >
          {projects.map((data, index) => (
            <div
              key={index}
              className={clsx(
                'bg-[#262626] p-5 rounded-lg ease-in-out border-2 border-[#262626] duration-300 hover:scale-[1.01] hover:border-white'
              )}
            >
              <div className={clsx('rounded-lg overflow-hidden')}>
                <Image
                  src={data.image}
                  alt={`image-${data.title}`}
                  width={0}
                  height={0}
                  className={clsx(
                    'w-full transition-[transform] duration-500 ease-out hover:scale-110'
                  )}
                />
              </div>
              <h3 className={clsx('font-semibold mt-6')}>
                <Link target="_blank" href={data.link || ''}>
                  {data.title}
                </Link>
              </h3>
              <p className={clsx('text-gray-300 text-sm mt-2 mb-5')}>
                {data.des}
              </p>
              <p className={clsx('text-gray-200')}>
                <ButtonBasicLink
                  linkTo={data.link || ''}
                  variant="outline"
                  linkType="external"
                  className={clsx(
                    'py-1 duration-300 text-xs hover:bg-white hover:text-gray-800 hover:translate-y-1'
                  )}
                >
                  Visit Site <ArrowUpRight className={clsx('w-4')} />
                </ButtonBasicLink>
              </p>
              <div className={clsx('flex gap-x-3 gap-y-2 mt-8 flex-wrap')}>
                {data.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className={clsx(
                      'py-1 px-2 bg-gray-700 text-white rounded-lg text-[12px]'
                    )}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
