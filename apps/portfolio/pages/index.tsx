import styled from 'styled-components';
import Image from 'next/image';
import * as React from 'react';
import maxMillieImage from '../public/max_millie.jpeg';
import max from '../public/max.jpeg';
import millie from '../public/millie.jpeg';

const StyledPage = styled.div`
  .page {
  }
`;

const calculateAge = (birthday: Date): number => {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
type SquarePhotoProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
};
const SquarePhoto = (props: SquarePhotoProps) => {
  return (
    <div className="m-0 box-content h-[200px] rounded-full bg-clip-border p-0 shadow-xl">
      <Image
        className={`${props.className} scale-105`}
        src={props.src}
        width={200}
        height={200}
        alt={props.alt}
      />
    </div>
  );
};

/* --------------------------- Kids Birthday Info --------------------------- */
const MAX_BIRTHDAY = new Date(2017, 10, 12);
const MILLIE_BIRTHDAY = new Date(2019, 11, 9);
const MAX_AGE = calculateAge(MAX_BIRTHDAY);
const MILLIE_AGE = calculateAge(MILLIE_BIRTHDAY);

const YEARS_AS_DEVELOPER = new Date().getFullYear() - 2016;

export function Index() {
  const [photoHovered, setPhotoHovered] = React.useState<
    'millie' | 'max' | undefined
  >();

  return (
    <StyledPage>
      <div className="relative min-h-screen p-8">
        <svg
          className="absolute  left-4 top-8 h-[600px] w-[600px] fill-sky-100 dark:fill-sky-800"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M66.5,-47.9C82.4,-33.1,88.9,-5.7,80.5,13.2C72.1,32.1,48.7,42.5,26.1,52.8C3.5,63.2,-18.5,73.5,-32,66.9C-45.6,60.2,-50.8,36.5,-52.1,16.1C-53.4,-4.3,-50.8,-21.4,-41.5,-34.6C-32.1,-47.9,-16.1,-57.3,4.6,-61C25.3,-64.7,50.6,-62.6,66.5,-47.9Z"
            transform="translate(100 100)"
          />
        </svg>
        <svg
          className="invisible absolute right-1 top-28 -z-0 h-[600px] w-[600px] fill-teal-100 dark:fill-teal-700 md:visible"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.5,-40.5C47.5,-25.5,42,-8.6,37.5,7.5C33,23.6,29.5,38.9,16.8,51.3C4.1,63.7,-17.9,73.2,-33.7,66.8C-49.6,60.4,-59.3,38.1,-61.6,17.2C-63.9,-3.8,-58.8,-23.3,-47.3,-39.5C-35.8,-55.7,-17.9,-68.7,-0.1,-68.6C17.7,-68.5,35.4,-55.4,41.5,-40.5Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="hover:animate-wiggle invisible absolute -left-20 top-[800px] -z-10  h-[600px] w-[600px] fill-pink-100 dark:fill-pink-500 md:visible"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3,-16.3C23,-13.3,37.7,-15.2,52.1,-8.1C66.5,-1.1,80.6,14.8,80.5,29.6C80.4,44.3,66.1,57.8,50.3,60.6C34.6,63.4,17.3,55.4,7.3,45.4C-2.8,35.5,-5.5,23.4,-16,18.9C-26.5,14.4,-44.7,17.4,-52.4,12.6C-60.2,7.7,-57.5,-5.1,-55.1,-19.6C-52.7,-34.1,-50.6,-50.5,-41.5,-53.4C-32.4,-56.3,-16.2,-45.8,-6.7,-36.5C2.8,-27.3,5.5,-19.3,14.3,-16.3Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* <header className="mb-4 flex">
          <div className="flex-1 ">
            <p className="text-sm font-bold">Home</p>
          </div>
        </header> */}

        <main className="z-20 flex flex-col items-center justify-center">
          <section>
            <h1 className="text-xs text-gray-100 ">Mike Rudge Portfolio</h1>
            <h2>
              Hey there!{' '}
              <span className="motion-safe:animate-wiggle inline-block text-xl">
                🖐️
              </span>
            </h2>
            <p>
              Thanks for visiting my portfolio. My name is Mike Rudge, I am a
              javascript developer from{' '}
              <span className="font-semibold underline decoration-teal-500 decoration-2 underline-offset-2 ">
                South Wales, UK
              </span>{' '}
              I have a passion for creating and building apps that delight users
              and have a great DX. I have been professionally working as a
              developer for {YEARS_AS_DEVELOPER}+ years, previously run my own
              software consultancy business and worked as a Creative Trainer for
              Apple.
            </p>
          </section>

          <section>
            <h2>About me</h2>
            <p>
              I love to code, solving UX problems and developing processes that
              make life easier. I love keeping up to date with the latest
              technology and have a particular love of (most things) Apple.
            </p>
            <p>
              I have two kids,{' '}
              <span
                className={`underline decoration-sky-500 decoration-2 underline-offset-4 transition-colors duration-200
                ${photoHovered === 'max' ? 'text-sky-500 ' : ''}`}
                onMouseLeave={() => setPhotoHovered(undefined)}
                onMouseEnter={() => setPhotoHovered('max')}
              >
                Max
              </span>{' '}
              ({MAX_AGE}) and{' '}
              <span
                className={`underline decoration-pink-500 decoration-2 underline-offset-4 transition-colors duration-200                ${
                  photoHovered === 'millie' ? 'text-pink-500' : ''
                }`}
                onMouseLeave={() => setPhotoHovered(undefined)}
                onMouseEnter={() => setPhotoHovered('millie')}
              >
                Millie
              </span>{' '}
              ({MILLIE_AGE})
            </p>
            <div
              className="flex w-full items-center justify-around divide-x-2 py-12"
              id="pictures-of-family mt-16"
            >
              <SquarePhoto
                className={`transition-all duration-500 ${
                  photoHovered !== undefined ? 'brightness-50' : ''
                }`}
                src={maxMillieImage}
                alt="Millie and Max enjoying good out"
              />

              <SquarePhoto
                className={`transition-all duration-500 ${
                  photoHovered === 'millie' ? 'brightness-50 grayscale' : ''
                }`}
                src={max}
                alt="Max in autumn"
              />
              <SquarePhoto
                className={`transition-all duration-500 ${
                  photoHovered === 'max' ? 'brightness-50 grayscale' : ''
                }`}
                src={millie}
                alt="Millie at a bbq"
              />
            </div>
            <h2>My Stack</h2>
            <h2>Personal Projects</h2>
            <h2>Projects I have been a part of</h2>
          </section>
        </main>
      </div>
    </StyledPage>
  );
}

export default Index;
