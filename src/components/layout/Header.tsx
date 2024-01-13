import Link from 'next/link';
import React, { ReactNode, Suspense } from 'react';

type HeaderProps = {
  siteTitle: ReactNode
  headerMenu?: ReactNode
}

export default function Header(props: HeaderProps) {
  return (
    <header className="text-gray-700 shadow-md">
      <div className='container md:w-9/12 mx-auto flex items-center p-2'>
        <Link href='/' className='flex items-center'>
          {props.siteTitle}
        </Link>
        <div className='grow' />
        {props.headerMenu}
      </div>
    </header>
  );
};
