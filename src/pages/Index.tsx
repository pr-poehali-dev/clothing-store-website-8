import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Белая футболка',
      price: '2 990 ₽',
      image: 'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/7bf21bb7-2c1c-4d0d-8d3b-f765f961e814.jpg'
    },
    {
      id: 2,
      name: 'Черные джинсы',
      price: '5 990 ₽',
      image: 'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/5d52a480-d03b-4bcb-85a3-be469d6073f2.jpg'
    },
    {
      id: 3,
      name: 'Бежевое пальто',
      price: '12 990 ₽',
      image: 'https://cdn.poehali.dev/projects/0e5ebbce-56a4-4b34-8a22-db6239f21fcc/files/8f1196da-6d22-47e0-b34b-165afcdc7bbd.jpg'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <section className="relative h-[600px] flex items-center justify-center bg-secondary">
          <div className="text-center space-y-6 px-6">
            <h1 className="text-6xl font-light tracking-tight">
              Минимализм<br />в каждой детали
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Современная одежда для тех, кто ценит качество и стиль
            </p>
            <Link 
              to="/catalog" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 hover:opacity-90 transition-opacity"
            >
              Смотреть каталог
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-light">Популярные товары</h2>
            <Link to="/catalog" className="text-sm flex items-center gap-2 hover:text-muted-foreground transition-colors">
              Все товары
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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
                <h3 className="font-medium mb-1">{product.name}</h3>
                <p className="text-muted-foreground">{product.price}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="bg-secondary py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <Icon name="Truck" size={32} />
                </div>
                <h3 className="font-semibold">Быстрая доставка</h3>
                <p className="text-sm text-muted-foreground">
                  Доставим заказ в течение 1-3 дней
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-center">
                  <Icon name="Shield" size={32} />
                </div>
                <h3 className="font-semibold">Гарантия качества</h3>
                <p className="text-sm text-muted-foreground">
                  Все товары проходят строгий контроль
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-center">
                  <Icon name="RotateCcw" size={32} />
                </div>
                <h3 className="font-semibold">Легкий возврат</h3>
                <p className="text-sm text-muted-foreground">
                  Возврат в течение 14 дней без вопросов
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
