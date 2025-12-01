import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Белая футболка',
    price: 2990,
    category: 'Футболки',
    images: [
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/1a743555-8c10-4810-aa29-7005434a90e6.jpg',
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/1a743555-8c10-4810-aa29-7005434a90e6.jpg'
    ]
  },
  {
    id: 2,
    name: 'Чёрные брюки',
    price: 5990,
    category: 'Брюки',
    images: [
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/34c300f0-567f-400d-a5da-fb63ddf29c91.jpg',
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/34c300f0-567f-400d-a5da-fb63ddf29c91.jpg'
    ]
  },
  {
    id: 3,
    name: 'Бежевый пиджак',
    price: 8990,
    category: 'Верхняя одежда',
    images: [
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/5c43eb87-31bb-4ec8-adb8-154959202fbe.jpg',
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/5c43eb87-31bb-4ec8-adb8-154959202fbe.jpg'
    ]
  },
  {
    id: 4,
    name: 'Классическая рубашка',
    price: 3990,
    category: 'Рубашки',
    images: [
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/1a743555-8c10-4810-aa29-7005434a90e6.jpg',
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/1a743555-8c10-4810-aa29-7005434a90e6.jpg'
    ]
  },
  {
    id: 5,
    name: 'Джинсы slim-fit',
    price: 4990,
    category: 'Джинсы',
    images: [
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/34c300f0-567f-400d-a5da-fb63ddf29c91.jpg',
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/34c300f0-567f-400d-a5da-fb63ddf29c91.jpg'
    ]
  },
  {
    id: 6,
    name: 'Кашемировый свитер',
    price: 7990,
    category: 'Свитера',
    images: [
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/5c43eb87-31bb-4ec8-adb8-154959202fbe.jpg',
      'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/5c43eb87-31bb-4ec8-adb8-154959202fbe.jpg'
    ]
  }
];

const ProductGallery = ({ product }: { product: Product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="space-y-6">
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex gap-3 justify-center">
        {product.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-20 h-20 border-2 transition-all ${
              currentImageIndex === index ? 'border-primary' : 'border-border'
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
      
      <div className="space-y-4">
        <h2 className="text-3xl font-light">{product.name}</h2>
        <p className="text-2xl">{product.price.toLocaleString('ru-RU')} ₽</p>
        <p className="text-muted-foreground">{product.category}</p>
        <Button className="w-full" size="lg">
          Добавить в корзину
        </Button>
      </div>
    </div>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = useState('catalog');

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light tracking-wider">ATELIER</h1>
            
            <nav className="hidden md:flex gap-8">
              <button
                onClick={() => setActiveSection('catalog')}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === 'catalog' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Каталог
              </button>
              <button
                onClick={() => setActiveSection('about')}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === 'about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                О магазине
              </button>
              <button
                onClick={() => setActiveSection('delivery')}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === 'delivery' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Доставка
              </button>
              <button
                onClick={() => setActiveSection('reviews')}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === 'reviews' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Отзывы
              </button>
              <button
                onClick={() => setActiveSection('contacts')}
                className={`text-sm tracking-wide transition-colors ${
                  activeSection === 'contacts' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Контакты
              </button>
            </nav>
            
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="ShoppingBag" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {activeSection === 'catalog' && (
          <section className="animate-fade-in">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-light mb-4">Новая коллекция</h2>
              <p className="text-muted-foreground text-lg">Минимализм и элегантность в каждой детали</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product) => (
                <Dialog key={product.id}>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer overflow-hidden border-0 shadow-none transition-all hover:shadow-lg">
                      <div className="aspect-square bg-secondary overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 space-y-2">
                        <h3 className="text-xl font-light">{product.name}</h3>
                        <p className="text-muted-foreground text-sm">{product.category}</p>
                        <p className="text-lg">{product.price.toLocaleString('ru-RU')} ₽</p>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <ProductGallery product={product} />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="animate-fade-in max-w-3xl mx-auto">
            <h2 className="text-4xl font-light mb-8">О магазине</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                ATELIER — это пространство, где встречаются минимализм и качество. Мы создаём одежду для тех,
                кто ценит чистые линии, благородные материалы и вневременной стиль.
              </p>
              <p>
                Каждая вещь в нашей коллекции тщательно отобрана и создана с вниманием к деталям.
                Мы верим, что настоящая элегантность заключается в простоте.
              </p>
              <p>
                Наша философия — качество превыше количества. Мы предлагаем базовые вещи,
                которые станут основой вашего гардероба на долгие годы.
              </p>
            </div>
          </section>
        )}

        {activeSection === 'delivery' && (
          <section className="animate-fade-in max-w-3xl mx-auto">
            <h2 className="text-4xl font-light mb-8">Доставка</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-light mb-4">Способы доставки</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Icon name="Truck" className="mt-1 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Курьерская доставка</p>
                      <p className="text-muted-foreground">По Москве — 1-2 дня, 500 ₽. Бесплатно от 5000 ₽</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon name="Package" className="mt-1 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Почта России</p>
                      <p className="text-muted-foreground">По всей России — 5-10 дней, от 350 ₽</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Icon name="Store" className="mt-1 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Самовывоз</p>
                      <p className="text-muted-foreground">Из нашего шоурума в Москве — бесплатно</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-2xl font-light mb-4">Оплата</h3>
                <p className="text-muted-foreground">
                  Принимаем оплату картами, Apple Pay, Google Pay и наличными при получении.
                </p>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'reviews' && (
          <section className="animate-fade-in max-w-4xl mx-auto">
            <h2 className="text-4xl font-light mb-12">Отзывы</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  name: 'Анна К.',
                  text: 'Великолепное качество! Футболка идеально сидит, ткань приятная к телу. Минималистичный дизайн — это именно то, что я искала.',
                  rating: 5
                },
                {
                  name: 'Дмитрий М.',
                  text: 'Заказал брюки и пиджак — всё пришло быстро, упаковка стильная. Качество на высоте, буду заказывать ещё.',
                  rating: 5
                },
                {
                  name: 'Елена В.',
                  text: 'Очень довольна покупкой! Свитер мягкий, тёплый, но не жаркий. Нейтральный цвет сочетается со всем.',
                  rating: 5
                },
                {
                  name: 'Игорь С.',
                  text: 'Отличный магазин для тех, кто ценит качество и стиль. Цены адекватные, учитывая уровень вещей.',
                  rating: 5
                }
              ].map((review, index) => (
                <Card key={index} className="p-6 border-0 shadow-sm">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <p className="font-medium">{review.name}</p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="animate-fade-in max-w-3xl mx-auto">
            <h2 className="text-4xl font-light mb-8">Контакты</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <Icon name="MapPin" className="mt-1 text-muted-foreground" />
                <div>
                  <p className="font-medium mb-1">Адрес шоурума</p>
                  <p className="text-muted-foreground">Москва, ул. Примерная, д. 1</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="Phone" className="mt-1 text-muted-foreground" />
                <div>
                  <p className="font-medium mb-1">Телефон</p>
                  <p className="text-muted-foreground">+7 (900) 123-45-67</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="Mail" className="mt-1 text-muted-foreground" />
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <p className="text-muted-foreground">hello@atelier-store.ru</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Icon name="Clock" className="mt-1 text-muted-foreground" />
                <div>
                  <p className="font-medium mb-1">Режим работы</p>
                  <p className="text-muted-foreground">Пн-Вс: 10:00 — 21:00</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-medium mb-4">О нас</h3>
              <p className="text-muted-foreground text-sm">
                Минималистичная одежда высокого качества для современных людей
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-4">Покупателям</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Доставка и оплата</li>
                <li>Возврат товара</li>
                <li>Размерная сетка</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (900) 123-45-67</li>
                <li>hello@atelier-store.ru</li>
              </ul>
            </div>
          </div>
          <Separator className="mb-8" />
          <div className="text-center text-sm text-muted-foreground">
            © 2024 ATELIER. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
