import { getElement } from './utils/getElement.js';
import displayUser from './utils/displayUser.js';

const btn = getElement('.btn');
const nameInput = getElement('.name-input');
const jobTitleInput = getElement('.job-title-input');

// Data karyawan yang disimpan secara statis
const employees = [
  {
    name: "Ahmad Surya",
    phone: "+628123456789",
    email: "ahmad.surya@example.com",
    jobTitle: "Manajer Proyek",
    years: "5 Tahun",
    address: "Jl. Melati No. 23, Jakarta"
  },
  {
    name: "Rina Wijaya",
    phone: "+628134567890",
    email: "rina.wijaya@example.com",
    jobTitle: "Desainer Grafis",
    years: "3 Tahun",
    address: "Jl. Mawar No. 10, Bandung"
  },
  {
    name: "Budi Santoso",
    phone: "+628145678901",
    email: "budi.santoso@example.com",
    jobTitle: "Software Engineer",
    years: "2 Tahun",
    address: "Jl. Raya No. 7, Surabaya"
  },
  {
    name: "Siti Aisyah",
    phone: "+628156789012",
    email: "siti.aisyah@example.com",
    jobTitle: "HR Manager",
    years: "4 Tahun",
    address: "Jl. Kemenangan No. 5, Yogyakarta"
  },
  {
    name: "Tono Prasetyo",
    phone: "+628167890123",
    email: "tono.prasetyo@example.com",
    jobTitle: "Manajer IT",
    years: "6 Tahun",
    address: "Jl. Sudirman No. 15, Semarang"
  },
  {
    name: "Fani Ramadhani",
    phone: "+628178901234",
    email: "fani.ramadhani@example.com",
    jobTitle: "Marketing Executive",
    years: "1 Tahun",
    address: "Jl. Raya Timur No. 20, Bali"
  },
  {
    name: "Joko Sutrisno",
    phone: "+628189012345",
    email: "joko.sutrisno@example.com",
    jobTitle: "Accountant",
    years: "3 Tahun",
    address: "Jl. Merdeka No. 9, Jakarta"
  },
  {
    name: "Dewi Lestari",
    phone: "+628191234567",
    email: "dewi.lestari@example.com",
    jobTitle: "Project Manager",
    years: "7 Tahun",
    address: "Jl. Bunga No. 17, Makassar"
  },
  {
    name: "Eka Putra",
    phone: "+628202345678",
    email: "eka.putra@example.com",
    jobTitle: "Developer",
    years: "4 Tahun",
    address: "Jl. Kamboja No. 11, Surabaya"
  },
  {
    name: "Lisa Maulani",
    phone: "+628213456789",
    email: "lisa.maulani@example.com",
    jobTitle: "Graphic Designer",
    years: "2 Tahun",
    address: "Jl. Sumber No. 12, Medan"
  }
];

// Fungsi untuk mencari dan menampilkan data karyawan berdasarkan nama dan jabatan
const searchEmployee = () => {
  const nameInput = getElement("#name").value.toLowerCase();
  const jobTitleInput = getElement("#jobTitle").value.toLowerCase();

  // Filter data karyawan berdasarkan nama dan jabatan
  const result = employees.filter(employee =>
    employee.name.toLowerCase().includes(nameInput) &&
    employee.jobTitle.toLowerCase().includes(jobTitleInput)
  );

  // Tampilkan hasil pencarian

  document.querySelector('.user-display').style.display="block"
    displayUser(result);
};

document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", searchEmployee);
});
