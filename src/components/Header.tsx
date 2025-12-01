import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-border z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold tracking-tight">
            MINIMAL
          </Link>
          
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link to="/" className="text-sm hover:text-muted-foreground transition-colors">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="text-sm hover:text-muted-foreground transition-colors">
                Каталог
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm hover:text-muted-foreground transition-colors">
                О магазине
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="text-sm hover:text-muted-foreground transition-colors">
                Отзывы
              </Link>
            </li>
            <li>
              <Link to="/delivery" className="text-sm hover:text-muted-foreground transition-colors">
                Доставка
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-sm hover:text-muted-foreground transition-colors">
                Контакты
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="hover:text-muted-foreground transition-colors">
              <Icon name="Search" size={20} />
            </button>
            <button className="hover:text-muted-foreground transition-colors">
              <Icon name="ShoppingBag" size={20} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
