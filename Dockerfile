FROM node:17

RUN npm i -g @nestjs/cli

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8000

CMD ["nest", "start"]