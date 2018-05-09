FROM node:7.10

ADD . .
RUN ["yarn", "install"]
RUN ["yarn", "run", "build"]

ENTRYPOINT [ "node", "server-lib/server.js" ]

