import React from "react";
import "../Ads/AdsStyle.scss";
export function Ads() {
  return (
    <section>
      <div className="ad">
        <article>
          <h1 className="title">Enjoy on your TV</h1>
          <p className="subTitle">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </article>
        <section
          className="image"
          // style={{
          //   backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png")`,
          // }}
        >
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
            srcset=""
          />
          <div className="video-main">
            <video autoPlay={true} muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
      </div>

      <div className="ad">
        <div className="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
        </div>
        <article>
          <h1 className="title">Download your shows to watch offline</h1>
          <p className="subTitle">
            Save your favourites easily and always havee something to watch.
          </p>
        </article>
      </div>

      <div className="ad">
        <article>
          <h1 className="title">Watch everywhere.</h1>
          <p className="subTitle">
            Stream unlimited movies and TV shows on your phone,tablet,laptop,and
            TV.
          </p>
        </article>
        <section className="image">
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" />{" "}
          <div className="video-main">
            <video autoPlay={true} muted loop>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
      </div>

      <div className="ad">
        <div className="image">
          <img src="https://occ-0-2087-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420" />{" "}
        </div>
        <article>
          <h1 className="title">Create profiles for children</h1>
          <p className="subTitle">
            Send children on adventures with their favourite characters in a
            space made just for the-free with you membership .
          </p>
        </article>
      </div>
    </section>
  );
}
