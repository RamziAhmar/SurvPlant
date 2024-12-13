# SurvPlant: Edible Plants Detection

**SurvPlant** adalah aplikasi berbasis machine learning yang dapat mendeteksi tanaman yang dapat dimakan dengan menggunakan model deep learning. Proyek ini memanfaatkan teknologi TensorFlow dan transfer learning untuk membangun model klasifikasi tanaman yang akurat, serta dapat diintegrasikan dengan aplikasi mobile atau web.

## Fitur Utama
- **Deteksi Tanaman yang Dapat Dimakan**: Mendeteksi apakah tanaman yang diunggah adalah tanaman yang dapat dimakan.
- **Informasi Nutrisi**: Memberikan informasi mengenai kandungan nutrisi dari tanaman yang dapat dimakan.
- **Integrasi Aplikasi Mobile**: Model dapat dijalankan di perangkat mobile dengan TensorFlow.js.
- **Dapat digunakan di hutan atau lokasi alam bebas**: Memungkinkan pengguna untuk menggunakan aplikasi di lapangan.

## Tujuan dan Alasan
Proyek ini bertujuan untuk memberikan solusi yang berguna bagi individu yang berada dalam situasi darurat atau bagi mereka yang tertarik dengan tanaman liar yang dapat dimakan. Dengan menggunakan machine learning, proyek ini dapat membantu dalam identifikasi tanaman secara real-time dan memberikan informasi terkait nilai gizi tanaman tersebut.

## REST API Contract

### POST /predict
----
Lakukan prediksi
* **URL Params:**
  None
* **Headers:**
  Content-Type: application/json
* **Body:**
  ```bash
  {
     image: value
  }
  ```
* **Response**
  Content:
----
## Prasyaratan

### Software/Tools:
- Code editor (VScode direkomendasikan)
- Node.js
- WSL (Terminal Linux untuk OS Windows)
- Git (untuk version control)

## Instalasi

1. **Clone Repository**:
   Untuk memulai, clone repository ini ke mesin lokal Anda:

   ```bash
   git clone -b backend-api https://github.com/ramziahmar/survplant.git
   ```
   Lalu masuk ke directory /survplant
   ```bash
   cd survplant
   ```
2. **Install NPM dan jalankan local server**
   ```bash
   npm i
   ```
   Jalankan local server
   ```bash
   npm run start
   ```
