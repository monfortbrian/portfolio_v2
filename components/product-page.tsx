import React from 'react';

interface Product {
  title: string;
  description: string;
  image: string;
  websiteLink: string;
  dribbbleLink: string;
  githubLink: string;
}

// Example product data (replace with your actual product information)
const product: Product = {
  title: 'Your Amazing Product',
  description: 'A detailed description of your product',
  image: '/images/product.jpg',
  websiteLink: 'https://your-product-website.com',
  dribbbleLink: 'https://dribbble.com/your-dribbble-username',
  githubLink: 'https://github.com/your-github-username/your-repo',
};

function ProductPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
        </div>
        <div className="col-span-6 md:pr-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="mb-4">{product.description}</p>
          <div className="flex items-center">
            <a href={product.websiteLink} className="text-blue-500 hover:underline">
              Visit Website
            </a>
            <span className="mx-4">|</span>
            <a href={product.dribbbleLink} className="text-blue-500 hover:underline">
              See Product Design on Dribbble
            </a>
            <span className="mx-4">|</span>
            <a href={product.githubLink} className="text-blue-500 hover:underline">
              Explore Web Development on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
