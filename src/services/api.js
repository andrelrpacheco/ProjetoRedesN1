export function loadLists() {
  return [
    {
      title: 'Link Down',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Teste',
          labels: ['#0000ff'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 2,
          content: 'Teste',
          labels: ['#0000ff'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 3,
          content: 'Teste',
          labels: ['#0000ff'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 4,
          content: 'Teste',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 5,
          content: 'Teste',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
      ]
    },
    {
      title: 'Link em Análise',
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Teste',
          labels: [],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        }
      ]
    },
    {
      title: 'Link Intermitente',
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Teste',
          labels: ['#0000ff'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 8,
          content: 'Teste',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 9,
          content: 'Teste',
          labels: [],
        }
      ]
    },
    {
      title: 'Link Concluído',
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Teste',
          labels: [],
        },
        {
          id: 12,
          content: 'Teste',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Teste',
          labels: ['#0000ff'],
        }
      ]
    },
  ];
}
