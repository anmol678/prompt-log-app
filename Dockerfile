#syntax=docker/dockerfile:1.4
FROM node:18-alpine

WORKDIR /test

# Install dependencies
COPY package*.json /test
RUN npm ci

COPY . /test

# Environment variables must be present at build time
# https://github.com/vercel/next.js/discussions/14030
# ARG ENV_VARIABLE
# ENV ENV_VARIABLE=${ENV_VARIABLE}
# ARG NEXT_PUBLIC_ENV_VARIABLE
# ENV NEXT_PUBLIC_ENV_VARIABLE=${NEXT_PUBLIC_ENV_VARIABLE}

# Next.js collects completely anonymous telemetry data about general usage. Learn more here: https://nextjs.org/telemetry
# Uncomment the following line to disable telemetry at build time
# ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js
RUN npm run build

# Note: Don't expose ports here, Docker Compose will handle that

# Start Next.js
CMD npm start