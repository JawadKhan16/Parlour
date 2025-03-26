'use client'

import Hero from '@/components/pages/home/Hero'
import HomeService from '@/components/pages/home/HomeService'
import Whyus from '@/components/pages/home/Whyus'
export default function Home() {
  return (
    <div>
      <Hero/>
      <HomeService/>
      <Whyus/>
    </div>
    
  );
}
