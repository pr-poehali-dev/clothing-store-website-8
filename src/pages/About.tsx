import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-light">О магазине</h1>
              <p className="text-xl text-muted-foreground">
                Минимализм в каждой детали
              </p>
            </div>

            <div className="aspect-[16/9] bg-secondary" />

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                MINIMAL — это магазин современной одежды для тех, кто ценит качество, стиль и минимализм. 
                Мы создали пространство, где каждая вещь тщательно отобрана и соответствует нашим высоким стандартам.
              </p>
              
              <p>
                Наша философия проста: меньше значит больше. Мы верим, что гардероб должен состоять из вещей, 
                которые вы действительно любите и носите. Каждый предмет в нашем ассортименте — это инвестиция 
                в стиль и комфорт.
              </p>
              
              <p>
                Мы работаем только с проверенными производителями, которые разделяют наши ценности качества 
                и устойчивого развития. Все материалы тщательно отобраны, а производство соответствует 
                экологическим стандартам.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-3">
                  <Icon name="Award" size={32} />
                </div>
                <h3 className="font-semibold">Качество</h3>
                <p className="text-sm text-muted-foreground">
                  Только премиальные материалы и производители
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-3">
                  <Icon name="Leaf" size={32} />
                </div>
                <h3 className="font-semibold">Экология</h3>
                <p className="text-sm text-muted-foreground">
                  Ответственный подход к производству
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="flex justify-center mb-3">
                  <Icon name="Heart" size={32} />
                </div>
                <h3 className="font-semibold">Стиль</h3>
                <p className="text-sm text-muted-foreground">
                  Вневременной дизайн для каждого
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
