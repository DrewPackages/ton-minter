FROM node:18 as build

ARG REACT_APP_JETTON_ADDRESS
ARG REACT_APP_NETWORK

WORKDIR /app
COPY package*.json .
RUN npm i
COPY . .

RUN npm run build

FROM nginx as runtime
COPY --from=build /app/build /usr/share/nginx/html