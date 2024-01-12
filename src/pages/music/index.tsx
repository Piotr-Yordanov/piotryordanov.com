import type { NextPage } from 'next';

import Hero from '@/components/Hero';

const Music: NextPage = () => {
  return (
    <div className="">
      <Hero
        title="Music"
        subtitle="My grand mother taught me the piano at the age of 3. I have a perfect pitch. Combined with over a decade of practice and theory classes, it makes me fluent on the keyboard. There is a certain pleasure that comes from just playing."
      ></Hero>
      <div className="background-grid topborder">
        <div className="mx-auto max-w-5xl p-4 pt-0 sm:p-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div className="">
              <iframe
                width="100%"
                height="450"
                src="https://www.youtube.com/embed/videoseries?si=l03z38ZZM4Uyvk9Y&amp;list=PLcq6MfI_5J69msAjQ1hZ_ozBi_yIxgZhn"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            <div className="">
              <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1754035467&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>

            <div className="">
              <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/42672943&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
            <div className="">
              <iframe
                width="100%"
                height="450"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/42672874&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
