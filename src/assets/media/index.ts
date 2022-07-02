import media1 from './slideshow-thumb-1.jpg'
import media2 from './slideshow-thumb-2.jpg'
import media3 from './slideshow-thumb-3.jpg'
import media4 from './slideshow-thumb-4.jpg'
import media5 from './slideshow-thumb-5.jpg'
import media6 from './slideshow-thumb-6.jpg'

import img0 from './9c.jpg'
import theater1 from './wn.jpg'
import theater2 from './ourStory.jpg'
import theater3 from './sy-citypage-theater-03.jpg'
import theater4 from './sy-citypage-theater-04.jpg'
import theater5 from './sy-citypage-theater-05.jpg'
import theater6 from './sy-citypage-theater-06.jpg'
import theater7 from './sy-citypage-theater-07.jpg'
import theater8 from './sy-citypage-theater-08.jpg'
import theater9 from './sy-citypage-theater-09.jpg'

export const media = [media1, media2, media3, media4, media5, media6]
export const mediaByIndex = index => media[index % media.length]

export const theaters = [
  {
    id: '0',
    src: img0,
    caption: 'Shen Yun 9 Characteristics Page',
    url: 'https://www.shenyun.org/classical-chinese-dance-music-costumes-singers-and-more',
    description: 'Webpack, Gulp, jQuery, Sass',
    videoEmbed:
      '<div style="padding:65.34% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/726310516?h=59cc4dabeb&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Screen Recording of Nine Characteristics"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
  {
    id: '1',
    src: theater1,
    caption: 'Shen Yun Whats New Page',
    url: 'https://www.shenyun.org/news-reviews',
  },
  {
    id: '2',
    src: theater2,
    caption: 'Shen Yun Our Story Page',
    url: 'https://www.shenyun.org/our-story',
  },
  {
    id: '3',
    src: theater3,
    caption: 'Four Seasons Centre, Toronto, Canada',
  },
  {
    id: '4',
    src: theater4,
    caption: 'Palais des Congrès de Paris, Paris, France',
  },
  {
    id: '5',
    src: theater5,
    caption: 'Teatro dell’Opera, Rome, Italy',
  },
  {
    id: '6',
    src: theater6,
    caption: 'Sydney Lyric Theatre, Sydney, Australia',
  },
  {
    id: '7',
    src: theater7,
    caption: 'Dolby Theatre, Hollywood',
  },
  {
    id: '8',
    src: theater8,
    caption: 'Graz Opera, Graz, Austria',
  },
  {
    id: '9',
    src: theater9,
    caption: 'Bunkyo Civic Hall, Tokyo, Japan',
  },
]
export const theatersByIndex = index => theaters[index % theaters.length]
