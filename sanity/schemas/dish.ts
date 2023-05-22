import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Dish',
  name: 'dish',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      title: 'Price of the dish in GBP',
      name: 'price',
      type: 'number',
    }),
    defineField({
      title: 'Image of the Dish',
      name: 'image',
      type: 'image',
    }),
  ],
})
