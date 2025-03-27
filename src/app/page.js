'use client'

import Hero from '@/components/pages/home/Hero'
import HomeService from '@/components/pages/home/HomeService'
import Whyus from '@/components/pages/home/Whyus'
import HomeGallery from '@/components/pages/home/HomeGallery'
import Reviews from '@/components/pages/home/reviews'
export default function Home() {
  return (
    <div>
      
      <Hero/>
      <HomeService/>
      <Whyus/>
      <HomeGallery/>
      <Reviews/>
    </div>
    
  );
}
