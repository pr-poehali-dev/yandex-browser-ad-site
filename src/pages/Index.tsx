import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Я</span>
              </div>
              <span className="text-xl font-bold text-gray-900">
                Яндекс Браузер
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Возможности
              </a>
              <a
                href="#advantages"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Преимущества
              </a>
              <a
                href="#security"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Безопасность
              </a>
              <a
                href="#comparison"
                className="text-gray-600 hover:text-gray-900 transition"
              >
                Сравнение
              </a>
            </nav>
            <Button className="bg-red-500 hover:bg-red-600 text-white">
              Скачать браузер
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                Новое в 2025
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Браузер для
                <span className="text-red-500"> российского </span>
                интернета
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Умная строка с нейро-поиском находит информацию мгновенно.
                Обновленный турбо-режим ускоряет загрузку в 3 раза. Полная
                интеграция с экосистемой Яндекса и оптимизация для российских
                сайтов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  <Icon name="Download" className="w-5 h-5 mr-2" />
                  Скачать бесплатно
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50"
                >
                  <Icon name="Play" className="w-5 h-5 mr-2" />
                  Смотреть обзор
                </Button>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover-scale">
              <img
                src="/img/0614017f-f2ea-40b5-9406-db7501ddd701.jpg"
                alt="Яндекс Браузер интерфейс"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Скорость загрузки</span>
                  <span className="text-sm text-green-600">+300%</span>
                </div>
                <Progress value={85} className="h-2" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Экономия трафика</span>
                  <span className="text-sm text-blue-600">до 50%</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Возможности браузера
            </h2>
            <p className="text-xl text-gray-600">
              Все инструменты экосистемы Яндекса в одном месте
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mic" className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Алиса</CardTitle>
                <CardDescription>
                  Голосовой помощник, интегрированный прямо в браузер
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gray-200 hover:shadow-lg transition">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cloud" className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Яндекс.Диск</CardTitle>
                <CardDescription>
                  Облачное хранилище с синхронизацией браузера
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gray-200 hover:shadow-lg transition">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Music" className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Музыка и Видео</CardTitle>
                <CardDescription>
                  Быстрый доступ к Яндекс.Музыке и Яндекс.Видео
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-gray-200 hover:shadow-lg transition">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Brain" className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Нейро-поиск</CardTitle>
                <CardDescription>
                  ИИ находит нужную информацию за секунды. Умная строка понимает
                  контекст и естественный язык
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Search Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
                Нейро-технологии
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Поиск нового поколения
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Умная строка с искусственным интеллектом понимает ваши запросы
                на естественном языке. Находит точную информацию за секунды,
                анализирует контекст и предлагает релевантные результаты.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Brain" className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Понимание контекста
                    </h3>
                    <p className="text-gray-600">
                      ИИ анализирует ваш запрос и находит именно то, что вы
                      искали
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Мгновенные результаты
                    </h3>
                    <p className="text-gray-600">
                      Получайте ответы за считанные секунды благодаря
                      нейро-алгоритмам
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name="MessageCircle"
                      className="w-4 h-4 text-orange-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Естественный язык
                    </h3>
                    <p className="text-gray-600">
                      Задавайте вопросы так, как говорите в обычной жизни
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <img
                src="/img/6267eb7d-43bb-4265-8681-97d558ccd577.jpg"
                alt="Нейро-поиск в действии"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Преимущества
            </h2>
            <p className="text-xl text-gray-600">
              Почему миллионы россиян выбирают Яндекс Браузер
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Zap" className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">Турбо-режим 2025</CardTitle>
                <CardDescription className="text-base">
                  Обновленный алгоритм сжатия данных ускоряет загрузку страниц в
                  3 раза даже при медленном интернете
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Globe" className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Оптимизация для РФ</CardTitle>
                <CardDescription className="text-base">
                  Специальная оптимизация для российских сайтов и сервисов.
                  Быстрая загрузка отечественного контента
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white border-gray-200">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cpu" className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">Экономия ресурсов</CardTitle>
                <CardDescription className="text-base">
                  Оптимизация для устройств с небольшим объемом памяти.
                  Использует на 40% меньше RAM
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Безопасность превыше всего
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Защита от вредоносных сайтов, блокировка рекламы и безопасные
                платежи с технологией Protect
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Shield" className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Защита от фишинга и мошенничества
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Lock" className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Шифрование данных по стандарту TLS
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Eye" className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Блокировка назойливой рекламы
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  99.9% защита
                </h3>
                <p className="text-gray-600">От вредоносных сайтов и атак</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Сравнение с конкурентами
            </h2>
            <p className="text-xl text-gray-600">
              Почему Яндекс Браузер лучше других решений
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                      Функция
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-red-600">
                      Яндекс Браузер
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                      Chrome
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">
                      Firefox
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Турбо-режим
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Icon
                        name="Check"
                        className="w-5 h-5 text-green-500 mx-auto"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Icon name="X" className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Icon name="X" className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Голосовой помощник
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Icon
                        name="Check"
                        className="w-5 h-5 text-green-500 mx-auto"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Icon name="X" className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Icon name="X" className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Оптимизация для РФ
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Icon
                        name="Check"
                        className="w-5 h-5 text-green-500 mx-auto"
                      />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Icon name="X" className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Icon name="X" className="w-5 h-5 text-red-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      Экономия RAM
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-green-600 font-medium">-40%</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">Стандартно</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">Стандартно</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Готовы попробовать?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Скачайте Яндекс Браузер бесплатно и почувствуйте разницу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100"
            >
              <Icon name="Download" className="w-5 h-5 mr-2" />
              Скачать для Windows
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600"
            >
              <Icon name="Smartphone" className="w-5 h-5 mr-2" />
              Скачать для Android
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Я</span>
                </div>
                <span className="text-xl font-bold">Яндекс Браузер</span>
              </div>
              <p className="text-gray-400">
                Быстрый и безопасный браузер для российского интернета
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Безопасность
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Скачать
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Форум
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Обратная связь
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Новости
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Карьера
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Яндекс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
