function getComments(_, res) {
  return res.status(200).json({
    data: [
      {
        short_comment: 'Gran trabajo.',
        description: 'Muchas gracias por su excelente trabajo en la página web. ¡Estamos muy contentos con el resultado y apreciamos su dedicación y atención al detalle!',
        name: 'Josesito Mendez'
      },
      {
        short_comment: 'Muy bueno.',
        description: '¡Gracias por su excelente trabajo en marketing! Estamos muy contentos con los resultados y apreciamos su compromiso y creatividad en la implementación de nuestras estrategias.',
        name: 'La mole moli'
      },
      {
        short_comment: 'Recomendado.',
        description: '¡Muchas gracias por su arduo trabajo y dedicación! Valoramos su contribución y compromiso en hacer que nuestro proyecto sea un éxito.',
        name: '[Nombre Generico]'
      },
    ]
  })
}

module.exports = {
  getComments
}
