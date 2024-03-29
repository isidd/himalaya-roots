FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
RUN yarn install
COPY ./ ./ 
RUN yarn run build

EXPOSE 3000

CMD ["yarn","run","dev"]