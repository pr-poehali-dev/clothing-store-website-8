import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  product: string;
}

const Reviews = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      date: '15 ноября 2024',
      text: 'Заказала белую футболку — качество превзошло ожидания! Ткань очень приятная, посадка идеальная. Доставка быстрая, упаковка аккуратная.',
      product: 'Белая футболка'
    },
    {
      id: 2,
      name: 'Дмитрий Иванов',
      rating: 5,
      date: '12 ноября 2024',
      text: 'Отличный магазин! Купил черные джинсы — сидят как влитые. Качество на высоте, буду заказывать еще.',
      product: 'Черные джинсы'
    },
    {
      id: 3,
      name: 'Мария Козлова',
      rating: 4,
      date: '08 ноября 2024',
      text: 'Пальто шикарное, но размер оказался немного велик. Воспользовалась возвратом — все прошло быстро и без проблем. Заказала размер поменьше.',
      product: 'Бежевое пальто'
    },
    {
      id: 4,
      name: 'Алексей Смирнов',
      rating: 5,
      date: '05 ноября 2024',
      text: 'Очень доволен покупкой. Минималистичный стиль — это то, что я искал. Качество материалов отличное, рекомендую!',
      product: 'Белая футболка'
    },
    {
      id: 5,
      name: 'Екатерина Волкова',
      rating: 5,
      date: '01 ноября 2024',
      text: 'Заказываю уже третий раз — всегда довольна! Отличный ассортимент, быстрая доставка, качественные вещи. Спасибо!',
      product: 'Черные джинсы'
    }
  ];

  const averageRating = (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-light mb-4">Отзывы покупателей</h1>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon 
                      key={star} 
                      name="Star" 
                      size={20}
                      className={star <= parseFloat(averageRating) ? 'fill-current' : ''}
                    />
                  ))}
                </div>
                <span className="text-lg font-medium">{averageRating}</span>
              </div>
              <p className="text-muted-foreground">На основе {reviews.length} отзывов</p>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border border-border p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon 
                          key={star} 
                          name="Star" 
                          size={16}
                          className={star <= review.rating ? 'fill-current' : ''}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {review.text}
                  </p>
                  
                  <p className="text-sm">
                    <span className="text-muted-foreground">Товар:</span> {review.product}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-secondary p-8 text-center">
              <h3 className="text-xl font-light mb-2">Оставьте свой отзыв</h3>
              <p className="text-muted-foreground mb-4">
                Ваше мнение важно для нас
              </p>
              <button className="bg-primary text-primary-foreground px-6 py-3 hover:opacity-90 transition-opacity">
                Написать отзыв
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
