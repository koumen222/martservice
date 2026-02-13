FROM node:18-alpine

WORKDIR /app

# Copier seulement les fichiers du backend
COPY backend/package*.json ./backend/
COPY backend/ ./backend/

WORKDIR /app/backend

RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]
