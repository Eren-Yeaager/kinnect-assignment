
FROM mcr.microsoft.com/playwright:v1.57.0-jammy
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV HEADLESS=true
ENV CI=true


CMD ["npm", "run", "test:headless"]
