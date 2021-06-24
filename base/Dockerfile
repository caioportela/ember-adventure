FROM node:14.17.1
WORKDIR /base
COPY . .
RUN yarn global add ember-cli@3.26.1
RUN yarn install
EXPOSE 4200
CMD ["ember", "serve"]
