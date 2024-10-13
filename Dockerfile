FROM node:16-alpine

ARG CACHEBUST=1

ARG TOKEN_GITLAB

RUN mkdir -p /home/node/projects/node_modules && mkdir -p /home/node/projects/dist
RUN chmod -R 777 /home/node/projects
RUN chown -R node:node /home/node/projects

WORKDIR /home/node/projects

COPY package.json yarn.* ./

USER node

RUN yarn cache clean

RUN yarn install

RUN yarn autoclean --init

RUN yarn autoclean --force

COPY --chown=node:node . .

RUN yarn build

EXPOSE 8080

CMD ["sh","yarn", "server"]
