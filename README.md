# Setup

## NextJs Setup

npx create-next-app --typescript

## Tailwind css Setup

npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install -D prettier prettier-plugin-tailwindcss

option set
tailwindcss.config.js
content : ["pages/**/*.{js,jsx,ts,tsx}" , "components/**/*.{js,jsx,ts,tsx}"]
globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

## prismaap-northeast

npm i -D prisma
npx prisma init

schema.prisma
사용하는 db 이름 적어주고,
model 작성을 한후
generator client {
provider = "prisma-client-js"
previewFeatures = ["referentialIntegrity"]
}

datasource db {
provider = "mysql"
url = env("DATABASE_URL")
referentialIntegrity = "prisma"
}
npx prisma db push

## planetscale

https://github.com/planetscale/cli#installation 을 따라 해서 다운후
pscale auth login
pscale region list -> region 이름을 콘솔환경에서 확인가능.
pscale database create <database name> --region <region name>
pscale connect <database name>
.env
DATABASE_URL=mysql://127.0.0.1:3306/<databas name>
