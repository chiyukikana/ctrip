import _axios from 'axios'

export const axios = _axios.create({
  baseURL: 'http://123.56.149.216:8080/api',
  headers: {
    'x-icode': '318C1F90944E81E1',
  },
})
