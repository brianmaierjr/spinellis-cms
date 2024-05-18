// schemas/location.js
export default {
  name: 'location',
  type: 'document',
  title: 'Location',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'object',
      fields: [
        {name: 'street', type: 'string', title: 'Street name'},
        {name: 'streetNo', type: 'string', title: 'Street number'},
        {name: 'city', type: 'string', title: 'City'},
      ],
    },
    {
      name: 'directionsLink',
      type: 'string',
      title: 'Directions Link',
    },
    {
      name: 'menuLink',
      type: 'string',
      title: 'Menu Link',
    },
    {
      name: 'orderLink',
      type: 'string',
      title: 'Order Link',
    },
    {
      title: 'Hours',
      name: 'hours',
      type: 'object',
      fields: [
        {name: 'sunday', type: 'string', title: 'Sunday'},
        {name: 'monday', type: 'string', title: 'Monday'},
        {name: 'tuesday', type: 'string', title: 'Tuesday'},
        {name: 'wednesday', type: 'string', title: 'Wednesday'},
        {name: 'thursday', type: 'string', title: 'Thursday'},
        {name: 'friday', type: 'string', title: 'Friday'},
        {name: 'saturday', type: 'string', title: 'Saturday'},
      ],
    },
  ],
}
