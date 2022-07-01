import media1 from './slideshow-thumb-1.jpg'
import media2 from './slideshow-thumb-2.jpg'
import media3 from './slideshow-thumb-3.jpg'
import media4 from './slideshow-thumb-4.jpg'
import media5 from './slideshow-thumb-5.jpg'
import media6 from './slideshow-thumb-6.jpg'

import theater1 from './sy-citypage-theater-01.jpg'
import theater2 from './sy-citypage-theater-02.jpg'
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
    id: 1,
    src: theater1,
    caption: 'Lincoln Center, New York',
  },
  {
    id: 2,
    src: theater2,
    caption: 'Kennedy Center, Washington, DC',
  },
  {
    id: 3,
    src: theater3,
    caption: 'Four Seasons Centre, Toronto, Canada',
  },
  {
    id: 4,
    src: theater4,
    caption: 'Palais des Congrès de Paris, Paris, France',
  },
  {
    id: 5,
    src: theater5,
    caption: 'Teatro dell’Opera, Rome, Italy',
  },
  {
    id: 6,
    src: theater6,
    caption: 'Sydney Lyric Theatre, Sydney, Australia',
  },
  {
    id: 7,
    src: theater7,
    caption: 'Dolby Theatre, Hollywood',
  },
  {
    id: 8,
    src: theater8,
    caption: 'Graz Opera, Graz, Austria',
  },
  {
    id: 9,
    src: theater9,
    caption: 'Bunkyo Civic Hall, Tokyo, Japan',
  },
]
export const theatersByIndex = index => theaters[index % theaters.length]
