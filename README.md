1. Установите все зависимости (фронтенд + бэкенд):
npm run install:all

2. Запустите оба приложения в режиме разработки:
npm run dev

После запуска приложения будут доступны:

Frontend: http://localhost:4200
Backend API: http://localhost:3000

API Endpoints
Бэкенд предоставляет 2 основных эндпоинта:

GET /api/movies - получить все фильмы
GET /api/movies/:id - получить фильм по ID