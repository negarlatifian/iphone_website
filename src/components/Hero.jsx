import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useState } from 'react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    };
  }, []);
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 });
  }, []);

  useGSAP(() => {
    gsap.to('#cta', { opacity: 1, duration: 1.5 });
  }, []);
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex flex-center flex-col'>
        <p id='hero' className='hero-title'>
          iPhone 15 Pro
        </p>
        <div className='md:w-10/12 w-9/12 contents '>
          <video
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
            className='pointer-events-none'
          >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center translate-y-20'>
        <a href='#highlights' className='btn opacity-0'>
          Buy
        </a>

        <p className='font-normal text-xl opacity-0'>From $199/month or 999$</p>
      </div>
    </section>
  );
};

export default Hero;
