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
import { contacts, projects } from '../config/main';
import Link from 'next/link';
import ButtonBasicLink from '../components/Button/ButtonBasicLink';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <main className={clsx('bg-black h-full min-h-screen bg-no-repeat')}>
      {/* HEADER */}
      <Header />

      <div
        className={clsx(
          'text-white w-[90%] mx-auto mt-10 h-[90vh]',
          'lg:max-w-7xl'
        )}
      >
        <h1 className={clsx('text-center font-bold text-3xl')}>Contact</h1>
        <p className={clsx('text-center mt-5 text-gray-300')}>
          If you have any questions or would like to work together, feel free to
          reach out.
        </p>
        <div
          className={clsx(
            'grid gap-y-5 mt-10 mb-10',
            'md:grid-cols-2 md:gap-x-5',
            'lg:grid-cols-4'
          )}
        >
          {contacts.map((data, index) => (
            <Link
              key={index}
              href={data.link}
              target="_blank"
              className={clsx(
                'bg-[#262626] p-3 rounded-lg flex gap-x-4 items-center ease-in-out border-2 border-[#262626] duration-300 hover:scale-[1.01] hover:border-white group'
              )}
            >
              <div
                className={clsx(
                  'rounded-lg overflow-hidden p-2 duration-300 transition-[background-color] ease-in-out bg-gray-300 group-hover:bg-white '
                )}
              >
                <Image
                  src={data.icon}
                  alt={`image-${data.title}`}
                  width={0}
                  height={0}
                  className={clsx(
                    'w-full transition-[transform] duration-500 ease-out hover:scale-110'
                  )}
                />
              </div>
              <p className={clsx('text-gray-200 text-sm')}>{data.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
