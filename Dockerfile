# Minimal runtime image
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev || npm i
COPY . .
CMD ["npm", "start"]