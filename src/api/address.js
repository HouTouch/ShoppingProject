import request from '@/utils/request'
export const addAddress = (form) => {
  console.log(form)
  request.post('/address/add', {
    form
  })
}
