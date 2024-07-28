import {UserIcon} from '@sanity/icons'

export default {
  name: 'artist', // Required: This is the unique identifier for the schema in Sanity
  title: 'Artist', // The human-readable title
  type: 'document', // The type of the schema
  icon: UserIcon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    }
  ],
};
