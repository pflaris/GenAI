FROM node:22-alpine AS build

WORKDIR /home/node/build
COPY package*.json ./
RUN npm install --omit-dev
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
ENV TZ="Etc/GMT+3"
RUN export TZ=Etc/GMT+3
WORKDIR /home/node/app
COPY --from=build /home/node/build .

USER node
CMD ["npm","run", "start"]