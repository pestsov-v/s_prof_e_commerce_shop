FROM node:14-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install
ADD . .
RUN npm run dev
RUN npm prune --production
CMD ["node", "./src/init.js"]