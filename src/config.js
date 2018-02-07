import React, { Component } from 'react';
import logo from './media/logo.svg';
import tabletPortrait from './media/tablet_portrait.png';
import tabletLandscape from './media/tablet_landscape.png';
import headerMercedes from './media/mercedes/mercedes.gif';
import mercedesThumb from './media/mercedes/thumb.png';
import headshot from './media/headshot.png';
import testThumb from './media/testThumb.png';
import mercedes0 from './media/mercedes/0.png';
import mercedes1 from './media/mercedes/1.png';
import mercedes2 from './media/mercedes/2.png';
import headerMoana from './media/moana/moana_mock.mp4';
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
            color: 'purple',
            thumbnail: testThumb,
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
            headerClass: 'header-tablet-landscape',
            headerFrame: tabletPortrait,
            github: 'https://github.com',
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

           thumbnail: mercedesThumb,
           title: "publication-timeline",
           role: "Designer",
           tags: [
               'design',
           ],
           project: `publication-timeline is an interactive CV for use by professionals in the sciences, medicine, and academia. The app allows a user to browse a large number of the author's published works in chronological order and filter publications by type and category.

The app uses a simple config object stored in config.js to set the author name and details, as well as a list of publication types and categories. The config pulls a publication list from data.js, which is structured to receive data from a simple spreadsheet processed through one of the many CSV-to-JSON converters available online.`,
           date: 2016,
           headerType: 'image',
           headerSrc: headerMercedes,
           headerClass: 'header-tablet-landscape',
           headerFrame: tabletPortrait,
           github: 'https://github.com',
           demo: 'https://google.com',
           gallery: [
               {
                   src: headerMoana,
                   type: 'video',
                   description: 'this is a description',
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
          color: 'green',
          thumbnail: testThumb,
          title: "Mercedes E-Class (Entry 3)",
          role: "Developer, Illustrator",
          tags: [
              'design',
              'develop',
              'illustrate',
          ],
          project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
          date: 2016,
          headerType: 'image',
          headerSrc: headerMercedes,
          headerClass: 'header-tablet-landscape',
          headerFrame: tabletPortrait,
          github: 'https://github.com',
          demo: 'https://google.com',
          gallery: [
              {
                  src: headerMoana,
                  type: 'video',
                  description: 'this is a description',
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
         thumbnail: mercedesThumb,
         title: "Mercedes E-Class (Entry 4)",
         role: "Designer",
         tags: [
             'design',
         ],
         project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
         date: 2016,
         headerType: 'image',
         headerSrc: headerMercedes,
         headerClass: 'header-tablet-landscape',
         headerFrame: tabletPortrait,
         github: 'https://github.com',
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
        color: 'green',

        thumbnail: mercedesThumb,
        title: "Mercedes E-Class (Entry 5)",
        role: "Developer",
        tags: [
            'develop',
        ],
        project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
        date: 2016,
        headerType: 'image',
        headerSrc: headerMercedes,
        headerClass: 'header-tablet-landscape',
        headerFrame: tabletPortrait,
        github: 'https://github.com',
        demo: 'https://google.com',
        gallery: [
            {
                src: headerMoana,
                type: 'video',
                description: 'this is a description',
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
       thumbnail: mercedesThumb,
       title: "Mercedes E-Class (Entry 6)",
       role: "Art Director, Prop Artist",
       tags: [
           'design',
           'illustrate',
       ],
       project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
       date: 2016,
       headerType: 'image',
       headerSrc: headerMercedes,
       headerClass: 'header-tablet-landscape',
       headerFrame: tabletPortrait,
       github: 'https://github.com',
       demo: 'https://google.com',
       gallery: [
           {
               src: headerMoana,
               type: 'video',
               description: 'this is a description',
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
         color: 'purple',
         thumbnail: mercedesThumb,
         title: "Mercedes E-Class (Entry 7)",
         role: "Developer",
         tags: [
             'develop',
         ],
         project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
         date: 2016,
         headerType: 'image',
         headerSrc: headerMercedes,
         headerClass: 'header-tablet-landscape',
         headerFrame: tabletPortrait,
         github: 'https://github.com',
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

      thumbnail: mercedesThumb,
      title: "Mercedes E-Class (Entry 8)",
      role: "Illustrator",
      tags: [
          'illustrate',
      ],
      project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
      date: 2016,
      headerType: 'image',
      headerSrc: headerMercedes,
      headerClass: 'header-tablet-landscape',
      headerFrame: tabletPortrait,
      github: 'https://github.com',
      demo: 'https://google.com',
      gallery: [
          {
              src: headerMoana,
              type: 'video',
              description: 'this is a description',
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
        color: 'purple',
        thumbnail: mercedesThumb,
        title: "Mercedes E-Class (Entry 9)",
        role: "Developer",
        tags: [
            'develop',
        ],
        project: "Mobile rebuild of a desktop rich media advertisement rendered in a 3D environment. The 3D library exceeded the file weight limit of 300KB initial load and 1MB maximum load for all images and code. I worked with the client to develop a mobile advertisement that recreated the look and feel of the original using only web elements.",
        date: 2016,
        headerType: 'image',
        headerSrc: headerMercedes,
        headerClass: 'header-tablet-landscape',
        headerFrame: tabletPortrait,
        github: 'https://github.com',
        demo: 'https://github.com',
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
    ]
}
