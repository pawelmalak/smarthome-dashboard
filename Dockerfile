FROM node:16 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p ./public \
    && cd ./client \
    && npm install

RUN npm run build \
    && mv ./client/build/* ./public

RUN rm -rf src/ client/ \
    && npm prune --production

FROM node:16-alpine

COPY --from=builder /app /app

WORKDIR /app

EXPOSE 5000

ENV NODE_ENV=production

CMD ["node", "build/server.js"]


