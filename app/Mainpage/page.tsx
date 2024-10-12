import CenterD2 from '@/components/CenterD2';
import Herod2 from '@/components/Herod2';
import SCenterD2 from '@/components/SCenterD2';
import SNavbar from '@/components/SNavbar';
import React from 'react'

const page = () => {
  return (
    <div className="relative z-[0] w-[100%] bg-black">
      <SNavbar />
      <Herod2 />
      <SCenterD2 />
      <CenterD2 />
    </div>
  );
}

export default page
