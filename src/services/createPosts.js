import axios from 'axios'
const ENDPOINT = 'http://localhost:3001'

export default function createPosts(payload) {
  return axios
    .post(`${ENDPOINT}/posts`, payload)
    .then((res) => {
      if (res.status !== 201) {
        return new Error('Ocurrió un error al crear el post')
      }
      const { data } = res
      return data
    })
    .catch((error) => console.log(error))
}
