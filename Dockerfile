FROM node:alpine

WORKDIR /usr/src/game

COPY ./package.json ./

#install apk
RUN apk update
RUN apk add

#get python dependencies (required for bcrypt)
RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
  && pip install virtualenv \
  && rm -rf /var/cache/apk/*

#node-gyp required for bcrypt
RUN npm install -g node-gyp

#install server
RUN npm install

ADD . .

#concurrent run for back-and-front end
CMD ["npm", "run", "start"]

EXPOSE 3007



