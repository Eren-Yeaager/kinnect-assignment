
FROM mcr.microsoft.com/playwright:v1.40.0-noble
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV HEADLESS=true
ENV CI=true


CMD ["npm", "run", "test:headless"]
