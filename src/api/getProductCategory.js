const baseUrl = "https://dummyjson.com";

export const getProductCategories = async () => {
  try {
    const response = await fetch(`${baseUrl}/products/categories`);

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};