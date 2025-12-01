import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-light mb-12 text-center">Контакты</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-light mb-6">Свяжитесь с нами</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={20} className="mt-1" />
                      <div>
                        <p className="font-medium mb-1">Телефон</p>
                        <a href="tel:+74951234567" className="text-muted-foreground hover:text-foreground transition-colors">
                          +7 (495) 123-45-67
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={20} className="mt-1" />
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a href="mailto:info@minimal-shop.ru" className="text-muted-foreground hover:text-foreground transition-colors">
                          info@minimal-shop.ru
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={20} className="mt-1" />
                      <div>
                        <p className="font-medium mb-1">Адрес шоурума</p>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Примерная, д. 10<br />
                          Ежедневно с 10:00 до 21:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={20} className="mt-1" />
                      <div>
                        <p className="font-medium mb-1">Часы работы</p>
                        <p className="text-muted-foreground">
                          Понедельник - Воскресенье<br />
                          10:00 - 21:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Мы в социальных сетях</h3>
                  <div className="flex gap-4">
                    <a href="#" className="hover:text-muted-foreground transition-colors">
                      <Icon name="Instagram" size={24} />
                    </a>
                    <a href="#" className="hover:text-muted-foreground transition-colors">
                      <Icon name="Facebook" size={24} />
                    </a>
                    <a href="#" className="hover:text-muted-foreground transition-colors">
                      <Icon name="Twitter" size={24} />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-light mb-6">Напишите нам</h2>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-border focus:outline-none focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-border focus:outline-none focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border border-border focus:outline-none focus:border-primary resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>

            <div className="mt-12 aspect-[16/9] bg-secondary" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
