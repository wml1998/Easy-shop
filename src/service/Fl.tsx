import request from '../utils/request'

export let getCategory=()=>{
    return request.get('/catalog/index')
}