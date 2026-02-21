# === Етап 1: Збірка (Build Stage) ===
# Беремо офіційний образ Node.js (версія alpine - найлегша)
FROM node:18-alpine AS build

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо файли конфігурації залежностей
COPY package*.json ./

# Встановлюємо всі залежності (те, що в node_modules)
RUN npm install

# Копіюємо весь інший вихідний код проєкту
COPY . .

# Запускаємо процес збірки (створюємо оптимізовану версію сайту)
RUN npm run build


# === Етап 2: Продакшен сервер (Production Stage) ===
# Беремо легкий веб-сервер Nginx
FROM nginx:alpine

# Копіюємо зібрані файли з першого етапу в папку, з якої Nginx роздає сайти
# ВАЖЛИВО: Якщо твій фреймворк збирає файли не в папку "build" (наприклад, Vite/Vue роблять це в "dist"), заміни /app/build на /app/dist
COPY --from=build /app/build /usr/share/nginx/html

# Відкриваємо 80-й порт
EXPOSE 80

# Запускаємо Nginx
CMD ["nginx", "-g", "daemon off;"]