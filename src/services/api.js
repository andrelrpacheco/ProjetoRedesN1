export function loadLists() {
  return [
    {
      title: 'Link Down',
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Loja GB006',
          labels: ['#0000ff'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 2,
          content: 'Loja GB034',
          labels: ['#0000ff'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 3,
          content: 'Loja GB020',
          labels: ['#0000ff'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 4,
          content: 'Loja  PZ731',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 5,
          content: 'LOja BT557',
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
          content: 'Loja GB004',
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
          content: 'Loja GB014',
          labels: ['#0000ff'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 8,
          content: 'Loja GB118',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
        },
        {
          id: 9,
          content: 'Loja GB090',
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
          content: 'Loja GB031',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Loja GB035',
          labels: ['#0000ff'],
        }
      ]
    },
  ];
}
