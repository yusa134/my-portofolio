import skillSprintImage from '@/app/assets/img/projects/skillsprint.png';
import dnUdengImage from '@/app/assets/img/projects/dn-udeng-bali.png';
import infoligaImage from '@/app/assets/img/projects/infoliga.png';
import travelsiaImage from '@/app/assets/img/projects/travelsia.png';
import yusaisticImage from '@/app/assets/img/projects/yusaistic.png';
import toDoListImage from '@/app/assets/img/projects/to-do-list.png';
import btwEdutechImage from '@/app/assets/img/projects/btw-edutech.png';
import sekolahBeta from '@/app/assets/img/projects/sekolahbeta.png';
import pusatAsesmen from '@/app/assets/img/projects/pusat-asesmen.png';
import instagram from '@/app/assets/img/instagram.svg';
import linkedin from '@/app/assets/img/linkedin.svg';
import telegram from '@/app/assets/img/send.svg';
import email from '@/app/assets/img/mail.svg';

interface MenuType {
  name: string;
  url: string;
  items?: SomeItemType[] | false; // items bisa berupa array, undefined, atau false
}

interface SomeItemType {
  name: string;
  desc: string;
  url: string;
}

export const menu: MenuType[] = [
  // {
  //   name: 'Program Kami',
  //   items: [
  //     {
  //       name: 'Sekolah Kedinasan',
  //       // desc: 'Bimbingan belajar tatap muka Online & offline untuk PTN, PTK, CPNS , PPPK, dll.',
  //       url: '/program-bimbel',
  //       // icon: BimbelLogo,
  //       width_image: '135',
  //     },
  //     {
  //       name: 'PTN',
  //       // desc: 'Kuasai skill terbaru dan wujudkan karier impianmu di industri teknologi.',
  //       url: '/bootcamp',
  //       // icon: BootcampLogo,
  //       width_image: '58',
  //     },
  //     {
  //       name: 'ASN',
  //       // desc: 'Program Pelatihan talenta muda bali dibidang Hustler, Hipster & Hacker.',
  //       url: '/sekolah-beta',
  //       // icon: SekolahBetaLogo,
  //       width_image: '82',
  //     },
  //     {
  //       name: 'TNI & POLRI',
  //       // desc: 'Program bantuan pelatihan untuk meningkatkan kompetensi kerja ',
  //       url: '/pra-kerja',
  //       // icon: PrakerjaLogo,
  //       width_image: '112',
  //     },
  //   ],
  //   url: '',
  // },
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  // {
  //   name: 'Certification',
  //   url: '/certification',
  // },
  {
    name: 'Contact',
    url: '/contact',
  },
];

export const projects = [
  {
    image: sekolahBeta,
    title: 'Sekolah Beta',
    des: 'Contributed to the development of the Sekolah Beta website.',
    tools: [
      'html',
      'css',
      'javascript',
      'react JS',
      'next js',
      'tailwind css',
      'typescript',
    ],
    link: 'https://sekolahbeta.markasbali.id/',
  },
  {
    image: pusatAsesmen,
    title: 'Pusat Asesmen',
    des: 'Contributed to the development of the Pusat Asesmen website',
    tools: [
      'html',
      'css',
      'javascript',
      'react JS',
      'next js',
      'tailwind css',
      'typescript',
    ],
    link: 'https://www.btwedutech.com/',
  },
  {
    image: btwEdutechImage,
    title: 'BTW Edutech',
    des: 'Contributed to the development of the BTW Edutech website.',
    tools: [
      'html',
      'css',
      'javascript',
      'react JS',
      'next js',
      'tailwind css',
      'typescript',
    ],
    link: 'https://asesmen.btwedutech.com/',
  },
  {
    image: yusaisticImage,
    title: 'Yusaistic',
    des: 'Explore restaurants with dummy data.',
    tools: ['html', 'css', 'javascript', 'webpack'],
    link: 'https://main--yusaistic.netlify.app/',
  },
  {
    image: toDoListImage,
    title: 'Simple To-do List',
    des: 'A simple to-do list app built with React.',
    tools: ['html', 'css', 'javascript', 'react js'],
    link: 'https://to-dolist-ten.vercel.app/',
  },
  {
    image: dnUdengImage,
    title: 'DN Udeng Bali',
    des: 'A website for selling traditional Balinese headgears (udeng).',
    tools: ['html', 'css', 'javascript', 'jquery'],
    link: 'https://dnudengbali.netlify.app/',
  },
  {
    image: skillSprintImage,
    title: 'SkillSprint',
    des: 'SkillSprint is a site with interactive courses to enhance digital skills.',
    tools: ['html', 'css', 'javascript'],
    link: 'https://flourishing-alfajores-e3f2db.netlify.app/',
  },
  {
    image: travelsiaImage,
    title: 'Travelsia',
    des: 'Simple Website Travel',
    tools: ['html', 'css', 'javascript', 'jquery'],
    link: 'https://travelsia.netlify.app/',
  },
];

export const contacts = [
  {
    icon: instagram,
    title: 'Instagram',
    link: 'https://www.instagram.com/yusa_dmwan/',
  },
  {
    icon: linkedin,
    title: 'Linkedin',
    link: 'https://www.linkedin.com/in/yusadarmawan/',
  },
  {
    icon: telegram,
    title: 'Telegram',
    link: 'https://t.me/yuss22',
  },
  {
    icon: email,
    title: 'yusadarmawan5@gmail.com',
    link: 'mailto:yusadarmawan5@gmail.com',
  },
];
