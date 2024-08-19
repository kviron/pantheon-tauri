FROM node:20.16-alpine
# Установка рабочей директории
WORKDIR /app
# Копируем package.json и package-lock.json
COPY package*.json ./
# Установка зависимостей
RUN yarn install --production
# Копируем остальные файлы приложения
COPY . .

RUN npx prisma generate

# Команда для запуска приложения
CMD [ "yarn", "run", "start:dev" ]