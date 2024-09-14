export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title'
      }
    },
    {
      name: 'readingTime',
      title: 'Reading Time',
      type: 'string',
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'date',
      options: {
        dateFormat: 'MM-DD-YYYY',
        calenderTodayLabel: 'Today'
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        }
      ]
    },
  ]
}