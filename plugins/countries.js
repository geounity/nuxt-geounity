import apiGeounity from './api'

const countryService = {}

countryService.getByContinent = (continent) => {
  console.log('EE:' + continent)
  return apiGeounity.get(`/rest/v2/region/${continent}`).then(res => res.data)
}

countryService.search = () => {
  return apiGeounity.get('/rest/v2/all').then(res => res.data)
}

export default countryService
