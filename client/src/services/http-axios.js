import axios from 'axios'

const orderUrl = 'https://gopuff-public.s3.amazonaws.com/dev-assignments/product/order.json'
const productUrl = 'https://prodcat.gopuff.com/api/products'

const getOrder = async () => {
  try {
    const response = await axios.get(orderUrl)
    return response.data
  } catch (err) {
    console.log('Caught Error: ', err)
  }
}

const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(productUrl, {
      params: {
        location_id: '-1', // -1 for testing
        product_id: productId
      }
    })

    if (response.status === 200) {
      return response.data
    } else {
      return response
    }
  } catch (err) {
    console.log(`Error fetching product id: ${productId}`)
  }
}

const fetchMultipleProductsById = async (productIds) => {
  try {
    // TODO: Check 'productIds' to ensure they are proper format

    const response = await axios.get(productUrl, {
      params: {
        location_id: '-1', // -1 for testing
        product_ids: productIds
      }
    })

    if (response.status === 200) {
      return response.data
    } else {
      return response
    }
  } catch (err) {
    console.log(`Error fetching product id: ${productId}`)
  }
}

const httpService = {
  getOrder,
  fetchProductById,
  fetchMultipleProductsById
}

export default httpService
