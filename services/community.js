import apiGeounity from './api'

const communityService = {}

communityService.getAllByContinent = (continent) => {
  return apiGeounity.get(`/${continent}/countries`).then(res => res.data)
}

communityService.getAllByCountry = (country) => {
  return [
    {
      name: 'Buenos Aires'
    },
    {
      name: 'Entre Rios'
    },
    {
      name: 'Cordoba'
    },
    {
      name: 'Mendoza'
    },
    {
      name: 'San Luis'
    },
    {
      name: 'Tierra del fuego'
    }
  ]
}

communityService.getAllByProvince = (province) => {
  return [
    {
      name: 'Ituzaingo'
    },
    {
      name: 'Brandsen'
    },
    {
      name: 'La Plata'
    },
    {
      name: 'Belgrano'
    },
    {
      name: 'Tigre'
    },
    {
      name: 'Mar del Plata'
    }
  ]
}

communityService.search = () => {
  return apiGeounity.get('/rest/v2/all').then(res => res.data)
}

export default communityService
