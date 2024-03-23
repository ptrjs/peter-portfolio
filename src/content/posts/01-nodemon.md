---
title: "Nodemon — Menjalankan File Pada Program Secara Otomatis"
publishedAt: 2023-09-19
description: "Cara menggunakan package Nodemon"
slug: "npm-package-nodemon"
isPublish: true
---

## Nodemon (https://www.npmjs.com/package/nodemon)

Nodemon berfungsi untuk melakukan eksekusi file secara otomatis ketika disave.
Seringkali saya merasa kesal apabila harus menuliskan perintah di bawah ini terus menerus apabila melakukan perubahan pada file.
`node namafile`
Namun, keresahan itu akhirnya teratasi oleh Nodemon.

## Cara Install

pertama harus terinstall nodejs terlebih dahulu (https://nodejs.org/en)
Kemudian jalankan perintah berikut pada cmd
`npm install nodemon -g`

## Jalankan Nodemon

Cara menggunakannya adalah menggunakan perintah berikut
`nodemon --exec node namafile`

## Selesai