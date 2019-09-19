import axios from 'axios'

const orderUrl = 'https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json'

const getOrder = async () => {
  try {
    const response = await axios.get(orderUrl)
    return response.data
  } catch (err) {
    console.log('Caught Error: ', err)
  }
}

const httpService = {
  getOrder
}

export default httpService
