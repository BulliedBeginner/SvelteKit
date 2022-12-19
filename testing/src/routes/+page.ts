export const load = async () => {
	const response = await fetch('https://dummyjson.com/products/search?q=phone');
	const data = await response.json();
	const products = data.products;
	
	return {
		products : products
	}
}