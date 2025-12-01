import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Delivery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-light mb-12 text-center">Доставка и оплата</h1>

            <div className="space-y-12">
              <section className="space-y-6">
                <h2 className="text-2xl font-light">Способы доставки</h2>
                
                <div className="space-y-6">
                  <div className="border border-border p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Truck" size={24} className="mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Курьерская доставка</h3>
                        <p className="text-muted-foreground mb-3">
                          Доставка по Москве в течение 1-2 дней. По России — 3-5 дней.
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Стоимость:</span> 300 ₽ по Москве, 
                          500 ₽ по России. Бесплатно при заказе от 5000 ₽
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Пункты выдачи</h3>
                        <p className="text-muted-foreground mb-3">
                          Доставка в пункты выдачи СДЭК и Boxberry по всей России за 2-4 дня.
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Стоимость:</span> от 200 ₽, 
                          зависит от региона
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-border p-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Store" size={24} className="mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">Самовывоз</h3>
                        <p className="text-muted-foreground mb-3">
                          Заберите заказ из нашего шоурума в Москве. Готово к выдаче в день заказа.
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Стоимость:</span> Бесплатно
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-light">Способы оплаты</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 border border-border">
                    <Icon name="CreditCard" size={20} />
                    <span>Банковские карты (Visa, MasterCard, МИР)</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 border border-border">
                    <Icon name="Smartphone" size={20} />
                    <span>Apple Pay, Google Pay, Samsung Pay</span>
                  </div>
                  
                  <div className="flex items-center gap-3 p-4 border border-border">
                    <Icon name="Banknote" size={20} />
                    <span>Наличными курьеру (только для Москвы)</span>
                  </div>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-light">Возврат товара</h2>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Вы можете вернуть товар надлежащего качества в течение 14 дней с момента 
                    получения заказа.
                  </p>
                  
                  <p>
                    Для оформления возврата свяжитесь с нами по телефону или электронной почте. 
                    Мы организуем бесплатный вывоз товара курьером.
                  </p>
                  
                  <p>
                    Возврат денежных средств осуществляется в течение 10 рабочих дней после 
                    получения товара на наш склад.
                  </p>
                </div>
              </section>

              <div className="bg-secondary p-8 text-center">
                <h3 className="text-xl font-light mb-2">Остались вопросы?</h3>
                <p className="text-muted-foreground mb-4">
                  Свяжитесь с нами удобным способом
                </p>
                <div className="flex gap-4 justify-center">
                  <button className="bg-primary text-primary-foreground px-6 py-3 hover:opacity-90 transition-opacity">
                    Задать вопрос
                  </button>
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

export default Delivery;
