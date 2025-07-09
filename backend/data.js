// backend/data.js

const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika'
  },
  {
    id: 2,
    period: '2016 - 2019',
    institution: 'SMK Negeri 1 Lembo Raya',
    major: 'Teknik Komputer dan Jaringan'
  }
];

const skills = [
  { name: 'HTML', level: 'Mahir' },
  { name: 'CSS', level: 'Mahir' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'PHP', level: 'Intermediate' }, 
  { name: 'Vue.js', level: 'Intermediate' },
  { name: 'Laravel', level: 'Intermediate' },
  { name: 'CodeIgniter', level: 'Intermediate' },
  { name: 'MySQL', level: 'Intermediate' }
];

const projects = [
  {
    title: 'Website Sewa Kendaraan',
    description: 'Platform daring yang memungkinkan pengguna untuk menyewa mobil atau kendaraan lain untuk jangka waktu tertentu.',
    link: 'https://contohportfolio.com',
    image: 'http://localhost:5173/images/WebSewaKendaraan.jpg',
    tech: ['Vue.js', 'Ci3', 'MySQL']
  }


];

module.exports = { educationHistory, skills, projects };
