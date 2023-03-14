function getPortfolioData(_, res) {
  return res.status(200).json({
    data: [
      {
        imageUrl: "assets/theme/images/portfolio/acuplast.png",
        link: "https://acuplast.com",
        title: "Acuplast Página Web"
      },
      {
        imageUrl: "assets/theme/images/portfolio/imagenes_medicas.png",
        link: "https://www.instagram.com/grupoimagenesmedicas/",
        title: "Imagenes Médicas marketing"
      },
      {
        imageUrl: "assets/theme/images/portfolio/soluciones_agropecuarias.png",
        link: "http://solucionesagropecuarias.com.ar/",
        title: "Soluciones Agropecuarias Página Web"
      },
    ]
  })
} 

module.exports = {
  getPortfolioData
}
