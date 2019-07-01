import apiGeounity from './api'

const staticService = {}

staticService.search = function (q) {
  const type = 'static'

  return apiGeounity.get('/search', {
    params: { q, type }
  }).then(res => res.data)
}

export default staticService
