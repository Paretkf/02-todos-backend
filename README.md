# 02-todos-backend

> Todos Application
ในโปรเจคนี้มีการใช้งานและได้ติดตั้ง Library พื้นฐานเหล่านี้มาไว้ให้แล้ว และอาจจะต้องมี Library อื่นๆ เพิ่มเติมภายหลัง สามารถคลิกเข้าไปศึกษาเพิ่มเติมได้เลย
* [Express](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [Mongoose](http://mongoosejs.com/) is a MongoDB object modeling tool designed to work in an asynchronous environment.
* [body-parser](https://github.com/expressjs/body-parser) is a Node.js body parsing middleware.
* [dotenv](https://github.com/motdotla/dotenv) is a zero-dependency module that loads environment variables from a .env file into process.env. 

## Example file .env
>ตัวอย่างไฟล์ .env เพื่อตั้งค่า Environment สำหรับใช้กับโปรเจคนี้ เพื่อเป็นความปลอดภัยที่จะไม่ให้ Username Password ต่างหลุดออกไปภายนอก

```bash
MONGO_USER=<YOUR_MONGO_USER>
MONGO_PASSWORD=<YOUR_MONGO_USER>
MONGO_HOST=<YOUR_MONGO_HOST>
PORT=<YOUR_PORT_SERVER>
```

## Build Setup
```bash
# install dependencies
npm install

# start server at localhost:9999
node server.js
```

## Challenge / Tasks

เนื่องจากโปรแกรมนี้ยังทำงานได้ไม่สมบูรณ์ จึงอยากให้มาช่วยกันแก้ไขและเพิ่ม Features ตาม [issues](https://github.com/AdvWebDevelopment/02-todos-backend/issues) ต่อไปนี้ให้สมบูรณ์ โดยการ Fork โปรเจคนี้ไปเป็นของตัวเอง และทำการแก้ไขตาม [issues](https://github.com/AdvWebDevelopment/02-todos-backend/issues) ที่มีให้เรียบร้อย ซึ่งถ้ามองว่ายังมีจุดไหนที่ยังสามารถปรับปรุงได้อีก ให้มาเปิด issue ใหม่เพิ่มได้เลย

และหลังจากที่ทำ Issue ไหนเสร็จแล้วให้มากแก้ที่ ไฟล์นี้ ด้วย(README.md) 

* [x] ตัวอย่าง ที่ทำเสร็จแล้ว
* [x] Challenge 1
* [x] Challenge 2
* [ ] Challenge 3
* [ ] Challenge 4

ถ้ามีข้อสงสัยหรือติดปัญหาสามารถเปิด Issue ขึ้นมาใหม่ได้เลย
