export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da031d5356bb480c988ef43',
                  title: 'Sanity Studio',
                  name: 'review-it-studio',
                  apiId: '1288db76-2af3-4e76-82b4-3a8b10390d99'
                },
                {
                  buildHookId: '5da031d5e552687d2432e8fc',
                  title: 'Blog Website',
                  name: 'review-it',
                  apiId: 'babf08b9-cad7-4ef5-be1a-e9305ae9536b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/durgesh-priyaranjan/review-it',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://review-it.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
