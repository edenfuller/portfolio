import React, { Component } from 'react';
import logo from './media/logo.svg';
import tabletPortrait from './media/tablet_portrait.png';
import tabletLandscape from './media/tablet_landscape.png';
import phonePortrait from './media/phone_portrait.png';
import phoneLandscape from './media/phone_landscape.png';
import empty from './media/empty.png';
import laptop from './media/laptop.png';
import headshot from './media/headshot.png';
import testThumb from './media/testThumb.png';


import headerMercedes from './media/mercedes/mercedes.gif';
import mercedesThumb from './media/mercedes/thumb.png';
import mercedes0 from './media/mercedes/0.png';
import mercedes1 from './media/mercedes/1.png';
import mercedes2 from './media/mercedes/2.png';

import moanaHeader from './media/moana/moana_header.mp4';
import moanaThumb from './media/moana/thumb.jpg';
import moana0 from './media/moana/0.png';
import moana1 from './media/moana/1.png';
import moana2 from './media/moana/2.png';

import headerTimeline from './media/timeline/publication-timeline.mp4'
import timelineThumb from './media/timeline/thumb.png';
import timeline0 from './media/timeline/0.png';

import wosHeader from './media/wos/header.jpg';
import wosThumb from './media/wos/thumb.png';
import wos0 from './media/wos/0.png';
import wos1 from './media/wos/1.png';
import wos2 from './media/wos/2.png';

import cedarHeader from './media/cedar/header.gif';
import cedarThumb from './media/cedar/thumb.jpg';
import cedar0 from './media/cedar/0.png';
import cedar1 from './media/cedar/1.png';
import cedar2 from './media/cedar/2.png';

import masnHeader from './media/masn/header.gif';
import masnThumb from './media/masn/thumb.jpg';
import masn0 from './media/masn/0.png';
import masn1 from './media/masn/1.png';

import illustrationHeader from './media/illustration/moonWitch.jpg';
import illustrationThumb from './media/illustration/thumb.jpg';
import illustration0 from './media/illustration/temple.png';

const about = <div>
    <p>
        I'm cofounder and chief marketing officer of <a href="http://brinkbit.com">Brinkbit</a>, a company I founded to make game development more accessible. I lead Brinkbit's integrations team, which provides game design and development services for enterprise clients using our API.
    </p>
    <p>
        At AOL and Millennial Media, I designed and developed interactive mobile ads for brands like PBS, Disney, Mercedes-Benz, Levi, and CitiBank.
    </p>
    <p>
        I've published two young adult novels: <em>Mutt</em> and <em>Stray.</em>
    </p>
</div>;
const contact = <div>
    <p>
        <a className="contact-link" href="mailto:evan@brinkbit.com">e-mail</a>
    </p>
    <p>
        <a className="contact-link" href="https://www.linkedin.com/in/evanfullerdesign/">LinkedIn</a>
    </p>
    <p>
        <a className="contact-link" href="https://github.com/equinoxfires">GitHub</a>
    </p>
</div>
export const config = {
    logo: logo,
    categories: [
        'design',
        'develop',
        'illustrate',
    ],
    about: {
        headshot,
        title: 'Hello! I\'m Evan Fuller.',
        description: about,
    },
    contact: {
        title: 'Let\'s connect.',
        description: contact,
    },
    entries: [
         {
            color: 'blue',
            thumbnail: mercedesThumb,
            title: "Mercedes E-Class Gallery",
            role: "Designer, Developer",
            tags: [
                'design',
                'develop',
            ],
            project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
            date: 2016,
            headerType: 'image',
            headerSrc: headerMercedes,
            headerClass: 'header-tablet-portrait',
            headerFrame: tabletPortrait,
            gallery: [
                {
                    src: mercedes0,
                    type: 'image',
                },
                {
                    src: mercedes1,
                },
                {
                    src: mercedes2,
                },
            ],
        },
        {
           color: 'blue',

           thumbnail: timelineThumb,
           title: "publication-timeline",
           role: "Designer",
           tags: [
               'develop',
           ],
           project: `publication-timeline is an interactive CV for use by professionals in the sciences, medicine, and academia. The app allows a user to browse a large number of the author's published works in chronological order and filter publications by type and category.

The app uses a simple config object stored in config.js to set the author name and details, as well as a list of publication types and categories. The config pulls a publication list from data.js, which is structured to receive data from a simple spreadsheet processed through one of the many CSV-to-JSON converters available online.`,
           date: 2018,
           headerType: 'video',
           headerSrc: headerTimeline,
           headerClass: 'header-laptop',
           headerFrame: laptop,
           github: 'https://github.com/equinoxfires/publication-timeline',
           demo: 'https://equinoxfires.github.io/publication-timeline/',
           gallery: [
               {
                   src: timeline0,
               },
           ],
       },
       {
          color: 'green',
          thumbnail: wosThumb,
          title: "E-Learning Game",
          role: "Product Manager, Front-end Developer, Art Director, Prop Artist, Animator",
          tags: [
              'design',
              'develop',
              'illustrate',
          ],
          project: "This responsive web and mobile game was created for one of our enterprise clients. This is a forthcoming project and release is just around the corner; more info soon!",
          date: 2017,
          headerType: 'image',
          headerSrc: wosHeader,
          headerClass: 'header-tablet-portrait',
          headerFrame: tabletPortrait,
          gallery: [
              {
                  src: wos0,
                  description: 'a few of my prop illustrations for the game',
              },
              {
                  src: wos1,
              },
              {
                  src: wos2,
              },
          ],
      },
      {
         color: 'purple',
         thumbnail: moanaThumb,
         title: "Disney's Moana: Explore Oceania",
         role: "Designer",
         tags: [
             'design',
         ],
         project: "I contributed this presale design to a winning bid for a campaign to promote the theatrical release of Disney's Moana. The design taps several of Millennial Media's rich-media features, including an expandable banner, gyroscope/accelorometer control, and nested galleries.",
         date: 2016,
         headerType: 'video',
         headerSrc: moanaHeader,
         headerClass: 'header-phone-landscape',
         headerFrame: phoneLandscape,
         gallery: [
             {
                 src: moana0,
             },
             {
                 src: moana1,
             },
             {
                 src: moana2,
             },
         ],
      },
      {
        color: 'purple',

        thumbnail: cedarThumb,
        title: "Cedar Fair Photoshoot",
        role: "Designer/Developer",
        tags: [
            'design',
            'develop',
        ],
        project: "I designed and developed photoshoot ad units for Cedar Fair's family of theme parks for the 2016 Halloween season. The ad lets the user take a photo, apply one of three filters (zombie, witch, or buried alive), and then share the creation to social media.",
        date: 2016,
        headerType: 'image',
        headerSrc: cedarHeader,
        headerClass: 'header-phone-portrait',
        headerFrame: phonePortrait,
        gallery: [
            {
                src: cedar0,
            },
            {
                src: cedar1,
            },
            {
                src: cedar2,
            },
        ],
      },
      {
       color: 'blue',
       thumbnail: masnThumb,
       title: "MASN XML Ad",
       role: "Designer/Developer",
       tags: [
           'design',
           'develop',
       ],
       project: "I designed and developed a series of Orioles and Nationals ads for MASN. The ads pull a hashtag, away team logo, and game time from an XML feed, allowing the campaign to run throughout the season with no further updates after launch.",
       date: 2016,
       headerType: 'image',
       headerSrc: masnHeader,
       headerClass: 'header-tablet-portrait',
       headerFrame: tabletPortrait,
       gallery: [
           {
               src: masn0,
           },
           {
               src: masn1,
           },
       ],
      },
      {
         color: 'green',
         thumbnail: illustrationThumb,
         title: "Illustrations",
         role: "Illustrator",
         tags: [
             'illustrate',
         ],
         project: "Various illustrations from Brinkbit and personal projects.",
         date: 2016,
         headerType: 'image',
         headerSrc: illustrationHeader,
         headerClass: 'header-square',
         headerFrame: empty,
         gallery: [
             {
                 src: illustration0,
                 type: 'image',
             },
             {
                 src: illustrationHeader,
             },
         ],
     },
    ]
}
