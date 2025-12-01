import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

interface ProductData {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
  images: string[];
  sizes: string[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');

  const products: Record<string, ProductData> = {
    '1': {
      id: 1,
      name: 'Белая футболка',
      price: '2 990 ₽',
      category: 'Футболки',
      description: 'Классическая белая футболка из премиального хлопка. Идеально подходит для повседневной носки. Минималистичный дизайн, отличная посадка.',
      images: [
        'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/7bf21bb7-2c1c-4d0d-8d3b-f765f961e814.jpg',
        'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/7bf21bb7-2c1c-4d0d-8d3b-f765f961e814.jpg',
        'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/7bf21bb7-2c1c-4d0d-8d3b-f765f961e814.jpg'
      ],
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    '2': {
      id: 2,
      name: 'Черные джинсы',
      price: '5 990 ₽',
      category: 'Брюки',
      description: 'Стильные черные джинсы прямого кроя. Изготовлены из качественного денима с добавлением эластана для комфорта. Универсальная модель для любого случая.',
      images: [
        'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/5d52a480-d03b-4bcb-85a3-be469d6073f2.jpg',
        'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/5d52a480-d03b-4bcb-85a3-be469d6073f2.jpg',
        'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/5d52a480-d03b-4bcb-85a3-be469d6073f2.jpg'
      ],
      sizes: ['28', '30', '32', '34', '36']
    },
    '3': {
      id: 3,
      name: 'Бежевое пальто',
      price: '12 990 ₽',
      category: 'Верхняя одежда',
      description: 'Элегантное бежевое пальто прямого силуэта. Изготовлено из качественной шерсти с кашемиром. Идеально для межсезонья и прохладной погоды.',
      images: [
        'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/8f1196da-6d22-47e0-b34b-165afcdc7bbd.jpg',
        'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/8f1196da-6d22-47e0-b34b-165afcdc7bbd.jpg',
        'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/8f1196da-6d22-47e0-b34b-165afcdc7bbd.jpg'
      ],
      sizes: ['XS', 'S', 'M', 'L']
    }
  };

  const product = products[id || '1'];

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          <Link to="/catalog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
            <Icon name="ArrowLeft" size={16} />
            Назад к каталогу
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-secondary overflow-hidden cursor-zoom-in">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-[3/4] bg-secondary overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} - вид ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h1 className="text-4xl font-light mb-4">{product.name}</h1>
                <p className="text-3xl">{product.price}</p>
              </div>

              <div className="border-t border-b border-border py-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">Выберите размер</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 border transition-all ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-foreground'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full"
                disabled={!selectedSize}
              >
                Добавить в корзину
              </Button>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Icon name="Truck" size={20} className="mt-0.5" />
                  <div>
                    <p className="font-medium">Бесплатная доставка</p>
                    <p className="text-muted-foreground">При заказе от 5000 ₽</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="RotateCcw" size={20} className="mt-0.5" />
                  <div>
                    <p className="font-medium">Легкий возврат</p>
                    <p className="text-muted-foreground">В течение 14 дней</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Shield" size={20} className="mt-0.5" />
                  <div>
                    <p className="font-medium">Гарантия качества</p>
                    <p className="text-muted-foreground">Оригинальные товары</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
