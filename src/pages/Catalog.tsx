import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  const products: Product[] = [
    {
      id: 1,
      name: 'Белая футболка',
      price: '2 990 ₽',
      category: 'Футболки',
      image: 'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/7bf21bb7-2c1c-4d0d-8d3b-f765f961e814.jpg'
    },
    {
      id: 2,
      name: 'Черные джинсы',
      price: '5 990 ₽',
      category: 'Брюки',
      image: 'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/5d52a480-d03b-4bcb-85a3-be469d6073f2.jpg'
    },
    {
      id: 3,
      name: 'Бежевое пальто',
      price: '12 990 ₽',
      category: 'Верхняя одежда',
      image: 'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/8f1196da-6d22-47e0-b34b-165afcdc7bbd.jpg'
    },
    {
      id: 4,
      name: 'Серая футболка',
      price: '2 490 ₽',
      category: 'Футболки',
      image: 'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/7bf21bb7-2c1c-4d0d-8d3b-f765f961e814.jpg'
    },
    {
      id: 5,
      name: 'Синие джинсы',
      price: '5 490 ₽',
      category: 'Брюки',
      image: 'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/5d52a480-d03b-4bcb-85a3-be469d6073f2.jpg'
    },
    {
      id: 6,
      name: 'Черное пальто',
      price: '14 990 ₽',
      category: 'Верхняя одежда',
      image: 'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/8f1196da-6d22-47e0-b34b-165afcdc7bbd.jpg'
    }
  ];

  const categories = ['Все', 'Футболки', 'Брюки', 'Верхняя одежда'];

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-light mb-8">Каталог</h1>
          
          <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id}
                to={`/product/${product.id}`}
                className="group"
              >
                <div className="aspect-[3/4] bg-secondary mb-4 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <p className="text-foreground">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
