# PDKI API

`PDKI API` adalah API unofficial untuk pencarian nama merek yang terdaftar secara resmi.

## Prerequisites

Sebelum memulai, pastikan Anda memiliki Docker dan Docker Compose terinstal di sistem Anda.

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Instalasi

Ikuti langkah-langkah berikut untuk membangun dan menjalankan aplikasi menggunakan Docker dan Docker Compose.

### 1. Clone Repository

Clone repository `pdki_api` ke mesin lokal Anda:

```bash
git clone https://github.com/paul-lestyo/PDKI-API
cd PDKI-API
```

### 2. Bangun Docker Image

Bangun Docker image untuk aplikasi dengan perintah:

```bash
docker build -t pdki_api:latest .
```

### 3. Jalankan Aplikasi dengan Docker Compose

Jalankan Docker Compose untuk membuat dan menjalankan container:

```bash
docker-compose up
```

### 4. Akses Aplikasi

Setelah container berjalan, aplikasi akan dapat diakses di http://localhost pada port yang ditentukan (80).