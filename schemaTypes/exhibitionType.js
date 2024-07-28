import {CalendarIcon} from '@sanity/icons'

export default {
  name: 'exhibition',
  title: 'Exhibition',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule
        .required()
        .error(`Title required to publish page on website`),
    },
    {
      name: 'artist',
      title: 'Featured artist(s)',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'artist' } }],
      validation: (rule) => rule
        .required()
        .error(`Featured artist(s) required to publish page on website`),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule
        .required()
        .error(`Description required to publish page on website`),
    },
    {
      name: 'viewingDays',
      title: 'Viewing days',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Monday', value: 'monday' },
          { title: 'Tuesday', value: 'tuesday' },
          { title: 'Wednesday', value: 'wednesday' },
          { title: 'Thursday', value: 'thursday' },
          { title: 'Friday', value: 'friday' },
          { title: 'Saturday', value: 'saturday' },
          { title: 'Sunday', value: 'sunday' },
        ],
      },
      description: 'The weekday(s) exhbition is open for viewing',
      validation: (rule) => rule
        .required()
        .error(`Viewing days required to publish page on website`),
    },
    {
      name: 'viewingTime',
      title: 'Viewing times',
      type: 'string',
      description: 'Time range for exhibition viewing (e.g., 10:00AM - 5:00PM)',
      validation: (rule) => rule
        .required()
        .error(`Viewing times required to publish page on website`),
    },
    {
      name: 'openDate',
      title: 'Open Date',
      type: 'date',
      description: 'The starting date of the exhibition',
      validation: (rule) => rule
        .required()
        .error(`Open date required to publish page on website`),
    },
    {
      name: 'closeDate',
      title: 'Close Date',
      type: 'date',
      description: 'The closing date of the exhibition',
      validation: (rule) => rule
        .required()
        .error(`Close date required to publish page on website`),
    },
    {
      name: 'openingReceptionDate',
      title: 'Opening reception date',
      type: 'date',
      validation: (rule) => rule
        .required()
        .error(`Opening reception date required to publish page on website`),
    },
    {
      name: 'openingReceptionTime',
      title: 'Opening reception time',
      type: 'string',
      description: 'Time range for opening reception (e.g., 10:00AM - 5:00PM)',
      validation: (rule) => rule
        .required()
        .error(`Opening reception time required to publish page on website`),
    },
    {
      name: 'displayImage',
      title: 'Display Image',
      type: 'image',
      description: 'This is the image that will appear as a thumbnail too',
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Image caption',
        },
      ],
      validation: (rule) => rule
        .required()
        .error(`Display image required to publish page on website`),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // Adjust the maximum length as needed
      },
    },
  ],
};
