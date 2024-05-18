// schemas/location.js
export default {
  name: 'events',
  type: 'document',
  title: 'Events',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'eventDate',
      type: 'date',
      title: 'Date of Event',
    },
    {
      name: 'eventTime',
      type: 'string',
      title: 'Time of Event',
      description: 'i.e. 9pm',
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Image',
    },
    {
      title: 'Details of Event',
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      date: 'eventDate',
      time: 'eventTime',
      media: 'mainImage',
    },
    prepare(selection: any) {
      const {title, date, time, media} = selection
      return {
        title: title,
        subtitle: new Date(date).toDateString(),
        media: media,
      }
    },
  },
}
