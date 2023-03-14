function getEmployments(_, res) {
  return res.status(200).json({
    data: [
      {
        work_done: 'Página Web / Mantenimiento',
        company: 'Soluciones Agropecuarias',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        schedule: '2018 - Hoy'
      },
      {
        work_done: 'Marketing',
        company: 'Imágenes Médicas',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        schedule: '2016 - Hoy'
      }, 
      {
        work_done: 'Página Web',
        company: 'Acuplast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        schedule: '2019 - Hoy'
      }
    ]
  })
}

module.exports = {
  getEmployments
}
