FROM node:22-alpine AS base
FROM base AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json ./

RUN npm update && npm install

# If you want yarn update and  install uncomment the bellow script

RUN yarn install && yarn upgrade

FROM base AS avbg
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
ENV PORT=3000

VOLUME [ "/public/pics" ]

CMD ["sh", "build.sh"]