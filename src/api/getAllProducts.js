const baseUrl = 'https://dummyjson.com';
// const baseUrl = 'https://dummyjson.com/'

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${baseUrl}/products`);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};