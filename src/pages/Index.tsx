import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Puppy {
  id: number;
  name: string;
  breed: string;
  age: string;
  price: string;
  image: string;
  description: string;
}

const puppies: Puppy[] = [
  {
    id: 1,
    name: "Макс",
    breed: "Золотистый ретривер",
    age: "2 месяца",
    price: "45 000 ₽",
    image: "/img/46bdced4-0448-4deb-9dfb-8ac5eee1abcd.jpg",
    description: "Игривый щенок с золотистой шерстью"
  },
  {
    id: 2,
    name: "Луна",
    breed: "Хаски",
    age: "3 месяца",
    price: "55 000 ₽",
    image: "/img/b84a6219-d285-4bc8-b2cc-036ecffca498.jpg",
    description: "Красивые голубые глаза и активный характер"
  },
  {
    id: 3,
    name: "Рекс",
    breed: "Лабрадор",
    age: "2.5 месяца",
    price: "40 000 ₽",
    image: "/img/7e1834fb-1939-4ade-a054-333056251649.jpg",
    description: "Дружелюбный и умный компаньон"
  },
  {
    id: 4,
    name: "Белла",
    breed: "Золотистый ретривер",
    age: "2 месяца",
    price: "45 000 ₽",
    image: "/img/46bdced4-0448-4deb-9dfb-8ac5eee1abcd.jpg",
    description: "Нежная и ласковая малышка"
  },
  {
    id: 5,
    name: "Арчи",
    breed: "Лабрадор",
    age: "3 месяца",
    price: "42 000 ₽",
    image: "/img/7e1834fb-1939-4ade-a054-333056251649.jpg",
    description: "Энергичный и любознательный щенок"
  },
  {
    id: 6,
    name: "Снежка",
    breed: "Хаски",
    age: "2.5 месяца",
    price: "57 000 ₽",
    image: "/img/b84a6219-d285-4bc8-b2cc-036ecffca498.jpg",
    description: "Белоснежная красотка с пронзительными глазами"
  }
];

const reviews = [
  {
    name: "Мария Петрова",
    rating: 5,
    text: "Прекрасный питомник! Взяли щенка лабрадора - здоровый, привитый, с отличной родословной. Очень довольны!",
    date: "2 недели назад"
  },
  {
    name: "Александр Иванов",
    rating: 5,
    text: "Профессиональный подход, чистота в питомнике, здоровые щенки. Рекомендую всем!",
    date: "1 месяц назад"
  },
  {
    name: "Елена Сидорова",
    rating: 5,
    text: "Наша хаски Луна уже полгода с нами. Отличное здоровье, прекрасный характер. Спасибо!",
    date: "6 месяцев назад"
  }
];

export default function Index() {
  const [selectedBreed, setSelectedBreed] = useState<string>('Все');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const breeds = ['Все', 'Золотистый ретривер', 'Хаски', 'Лабрадор'];
  
  const filteredPuppies = selectedBreed === 'Все' 
    ? puppies 
    : puppies.filter(puppy => puppy.breed === selectedBreed);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-softpink/20 to-turquoise/10">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-coral/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-coral" size={32} />
              <h1 className="text-2xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat' }}>
                Питомник "Добрые Лапки"
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-coral transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('puppies')} className="text-gray-700 hover:text-coral transition-colors">
                Щенки
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-coral transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-coral transition-colors">
                Контакты
              </button>
              <Button className="bg-coral hover:bg-coral/90 text-white">
                Связаться с нами
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-coral/20">
              <nav className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-coral transition-colors">
                  Главная
                </button>
                <button onClick={() => scrollToSection('puppies')} className="text-left text-gray-700 hover:text-coral transition-colors">
                  Щенки
                </button>
                <button onClick={() => scrollToSection('reviews')} className="text-left text-gray-700 hover:text-coral transition-colors">
                  Отзывы
                </button>
                <button onClick={() => scrollToSection('contacts')} className="text-left text-gray-700 hover:text-coral transition-colors">
                  Контакты
                </button>
                <Button className="bg-coral hover:bg-coral/90 text-white w-full">
                  Связаться с нами
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight" style={{ fontFamily: 'Montserrat' }}>
              Найдите своего
              <span className="text-coral"> верного друга</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans' }}>
              Профессиональный питомник с 15-летним опытом разведения здоровых и счастливых щенков
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-coral hover:bg-coral/90 text-white px-8 py-6 text-lg"
                onClick={() => scrollToSection('puppies')}
              >
                <Icon name="Heart" className="mr-2" size={20} />
                Посмотреть щенков
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white px-8 py-6 text-lg"
                onClick={() => scrollToSection('contacts')}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Puppies Section */}
      <section id="puppies" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Montserrat' }}>
              Наши щенки
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans' }}>
              Здоровые, привитые щенки с документами от проверенных родителей
            </p>
          </div>

          {/* Breed Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {breeds.map((breed) => (
              <Button
                key={breed}
                variant={selectedBreed === breed ? "default" : "outline"}
                onClick={() => setSelectedBreed(breed)}
                className={selectedBreed === breed 
                  ? "bg-turquoise hover:bg-turquoise/90 text-white" 
                  : "border-turquoise text-turquoise hover:bg-turquoise hover:text-white"
                }
              >
                {breed}
              </Button>
            ))}
          </div>

          {/* Puppies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPuppies.map((puppy) => (
              <Card key={puppy.id} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={puppy.image} 
                    alt={puppy.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-800" style={{ fontFamily: 'Montserrat' }}>
                        {puppy.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {puppy.breed}
                      </CardDescription>
                    </div>
                    <Badge className="bg-coral text-white">
                      {puppy.age}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: 'Open Sans' }}>
                    {puppy.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-coral" style={{ fontFamily: 'Montserrat' }}>
                      {puppy.price}
                    </span>
                    <Button className="bg-skyblue hover:bg-skyblue/90 text-white">
                      Узнать больше
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Montserrat' }}>
              Отзывы наших клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans' }}>
              Более 500 счастливых семей уже нашли своих питомцев у нас
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <CardTitle className="text-lg text-gray-800" style={{ fontFamily: 'Montserrat' }}>
                    {review.name}
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    {review.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600" style={{ fontFamily: 'Open Sans' }}>
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800" style={{ fontFamily: 'Montserrat' }}>
              Контакты
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Open Sans' }}>
              Свяжитесь с нами для консультации и выбора щенка
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Montserrat' }}>
                Как нас найти
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" className="text-coral" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Адрес:</p>
                    <p className="text-gray-600">г. Москва, ул. Солнечная, 15</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Phone" className="text-turquoise" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Телефон:</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Mail" className="text-skyblue" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Email:</p>
                    <p className="text-gray-600">info@dobryelapki.ru</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Clock" className="text-coral" size={24} />
                  <div>
                    <p className="font-semibold text-gray-800">Время работы:</p>
                    <p className="text-gray-600">Пн-Вс: 9:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800" style={{ fontFamily: 'Montserrat' }}>
                Напишите нам
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-coral focus:outline-none"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-coral focus:outline-none"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:border-coral focus:outline-none"
                    placeholder="Расскажите о желаемом щенке..."
                  />
                </div>
                <Button className="w-full bg-coral hover:bg-coral/90 text-white py-3">
                  Отправить сообщение
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Heart" className="text-coral" size={32} />
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat' }}>
                Питомник "Добрые Лапки"
              </h3>
            </div>
            <p className="text-gray-400 mb-6" style={{ fontFamily: 'Open Sans' }}>
              Любовь и забота в каждом щенке с 2008 года
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" className="border-coral text-coral hover:bg-coral hover:text-white">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" className="border-turquoise text-turquoise hover:bg-turquoise hover:text-white">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="outline" className="border-skyblue text-skyblue hover:bg-skyblue hover:text-white">
                <Icon name="Phone" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}