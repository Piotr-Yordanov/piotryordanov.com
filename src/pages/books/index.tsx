import type { NextPage } from 'next';
import Image from 'next/image';
import { HiArrowRight } from 'react-icons/hi2';

import ConvertkitSignupForm from '@/components/ConvertkitSignupForm';
import Hero from '@/components/Hero';
import LayoutWrapper from '@/components/LayoutWrapper';

const Books: NextPage = () => {
  return (
    <LayoutWrapper>
      <div className="">
        <Hero
          title="Books"
          subtitle="Ever since I was a kid, I had a passion for reading and writing. In 2015, I started writing heavily, but never got to properly publish. Until now!"
        >
          <div className="mt-20 text-center">
            <div className="">
              <div className="mb-4 text-xl font-bold">
                Notify me of new books.
              </div>
              <ConvertkitSignupForm />
            </div>
          </div>
        </Hero>
        <div className="background-grid topborder">
          <div className="mx-auto max-w-5xl p-4 pt-0 sm:p-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              <Image
                layout="responsive"
                src="/tinderland.jpg"
                alt="tinderland"
                height={100}
                width={100}
                className="scale-90 p-4 duration-150 ease-in hover:scale-100"
              />
              <div className="pt-8 font-inter">
                <div className="title mb-0 text-center font-inter">
                  Tinderland
                </div>
                <div className="mb-4 text-center font-mono text-xs text-primary">
                  (Coming soon!)
                </div>
                <div className="mt-4 indent-3">
                  I was born in Beirut, Lebanon, a country in the middle east
                  with a rich multi-cultrual and religious population. I was
                  young horny male, but lost my virginity at 23. I traveled the
                  world and went on a rampage using Tinder to get laid.
                </div>
                <div className="mt-4 indent-3">
                  From San Fransisco to Thailand, passing by Europe, Russia and
                  the Middle East. Every big city was a hunting ground for new
                  experiences. I left no stone unturned, and no female soul
                  untouched.
                </div>
                <div className="mt-4 indent-3">
                  But, my desire for revenge was rewarded with a bitter loss of
                  purpose. It was like trying to quench my thirst with salty
                  water. Darkness took over. Depression and loneliness became
                  familiar friends.
                </div>
                <div className="mt-4 indent-3">
                  It became hard to understand the gift of existance, when to
                  exist means to suffer. It was at that point, when all hope had
                  faded, that an unexpected teacher knocked at the door of my
                  life. A new unexpected path revealed itself, and then...
                  everything changed!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

export default Books;
