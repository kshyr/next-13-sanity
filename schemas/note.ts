import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'note',
  title: 'Note',
  type: 'document',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      "title": "content"
    },
  },
})
