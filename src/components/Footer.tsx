import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MINIMAL</h3>
            <p className="text-sm text-muted-foreground">
              Магазин современной одежды с минималистичным дизайном
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>О магазине</li>
              <li>Доставка</li>
              <li>Оплата</li>
              <li>Возврат</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Помощь</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Контакты</li>
              <li>FAQ</li>
              <li>Отзывы</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <Icon name="Instagram" size={20} />
              <Icon name="Facebook" size={20} />
              <Icon name="Twitter" size={20} />
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          © 2024 MINIMAL. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
