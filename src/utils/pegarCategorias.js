const pegarCategorias = salvarState => {

  // Mock
  const _listaCategorias = [
    {
      'id': 1,
      'descricao': 'Montanha'
    },
    {
      'id': 2,
      'descricao': 'Planície'
    },
    {
      'id': 3,
      'descricao': 'Ilha'
    }
  ];

  salvarState(_listaCategorias);
};

export default pegarCategorias;
