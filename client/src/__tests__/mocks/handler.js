import { http, HttpResponse } from "msw";
const apiUrl = import.meta.env.VITE_DAGINGUE_API_URL;

const dataAbout = {
  data: [
    {
      _id: "64e431aa9f97ccafba2b9ef9",
      content:
        "<h2><strong>Menyediakan Beef Slice Terbaik&nbsp;</strong></h2><h2><strong>Untuk Anda</strong></h2><p><br></p><p><strong>Dagingue menjual Beef Slice dengan beragam</strong></p><p><strong>bumbu marinasi, seperti Teriyaki, BBQ dan Bulgogi.</strong></p><p><strong>Ada dua jenis potong daging yang kami sediakan,</strong></p><p><strong>Potongan tipis ala korean barberque dan potongan</strong></p><p><strong>dadu yang tebal.</strong></p><p><strong>Berlokasi di Bogor, Jawa Barat.</strong></p><p><br></p><p><strong>Varian bumbu marinasi :</strong></p><ul><li>&nbsp;Spicy Korean</li><li>&nbsp;Bulgogi</li><li>&nbsp;Lada Hitam</li><li>&nbsp;Teriyaki Garlic</li><li>&nbsp;Barbeque</li></ul><h2><br></h2>",
      file1:
        "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/about%2Fabout-us.jpg?alt=media&token=1dde0094-7e2e-40e5-a843-24e99623dc35",
      file2:
        "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/about%2Fbulgogi.jpg?alt=media&token=bb184693-d403-4863-993e-654a3e835925",
      createdAt: "2023-08-22T03:55:22.512Z",
      updatedAt: "2024-01-25T14:14:19.896Z",
      __v: 0,
    },
  ],
  message: "Get About",
};

const dataPotong = {
  data: [
    {
      _id: "64e36d2af626ba024e0184b8",
      title: "Slice Dadu",
      desc: "500 gram",
      file: "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/potong%2Fslice-dadu.jpg?alt=media&token=12ac67cd-dec4-464c-baac-2dcc6a5aa080",
      createdAt: "2023-08-21T13:56:58.790Z",
      updatedAt: "2023-08-21T13:56:58.790Z",
      __v: 0,
    },
    {
      _id: "64e36d39f626ba024e0184bb",
      title: "Slice Tipis",
      desc: "500 gram",
      file: "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/potong%2Fslice-tipis.jpg?alt=media&token=d8b8cd45-73a7-4022-b28f-a980420ce523",
      createdAt: "2023-08-21T13:57:13.112Z",
      updatedAt: "2023-08-21T13:57:13.112Z",
      __v: 0,
    },
    {
      _id: "657fef3e9b49dcb188ffad8c",
      title: "Slice Test Lagi ea",
      desc: "500 gram",
      file: "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/potong%2Fslice-tipis.jpg?alt=media&token=f178ff06-9d69-4393-90f1-0086f34499c9",
      createdAt: "2023-12-18T07:05:34.657Z",
      updatedAt: "2024-01-21T07:11:34.234Z",
      __v: 0,
    },
  ],
  message: "Get Potong",
};

const dataPotong2Products = {
  data: [
    {
      _id: "64e36d2af626ba024e0184b8",
      title: "Slice Dadu",
      desc: "500 gram",
      file: "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/potong%2Fslice-dadu.jpg?alt=media&token=12ac67cd-dec4-464c-baac-2dcc6a5aa080",
      createdAt: "2023-08-21T13:56:58.790Z",
      updatedAt: "2023-08-21T13:56:58.790Z",
      __v: 0,
    },
    {
      _id: "64e36d39f626ba024e0184bb",
      title: "Slice Tipis",
      desc: "500 gram",
      file: "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/potong%2Fslice-tipis.jpg?alt=media&token=d8b8cd45-73a7-4022-b28f-a980420ce523",
      createdAt: "2023-08-21T13:57:13.112Z",
      updatedAt: "2023-08-21T13:57:13.112Z",
      __v: 0,
    },
  ],
  message: "Get Potong",
};

const dataPotong1Product = {
  data: [
    {
      _id: "64e36d2af626ba024e0184b8",
      title: "Slice Dadu",
      desc: "500 gram",
      file: "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/potong%2Fslice-dadu.jpg?alt=media&token=12ac67cd-dec4-464c-baac-2dcc6a5aa080",
      createdAt: "2023-08-21T13:56:58.790Z",
      updatedAt: "2023-08-21T13:56:58.790Z",
      __v: 0,
    },
  ],
  message: "Get Potong",
};

const dataBumbu = {
  data: [
    {
      _id: "64e42aba0285ca3fbfe0781d",
      title: "Teriyaki Garlic",
      desc: "<p>Memiliki rasa manis dan asin.</p><p>Dengan tambahan aroma khas</p><p>bawang putih, yang menambah</p><p>kenikmatan daging.</p>",
      file: "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/bumbu%2Fteriyaki-garlic.jpg?alt=media&token=cf938dc3-e64f-442f-a4d1-4e41c3bf4f4f",
      createdAt: "2023-08-22T03:25:46.359Z",
      updatedAt: "2024-01-26T07:03:03.018Z",
      __v: 0,
    },
    {
      _id: "64e42ba10285ca3fbfe07836",
      title: "Spicy Korean",
      desc: "<p>Menggunakan gochujang, bumbu khas&nbsp;</p><p>korea yang memiliki cita rasa manis,&nbsp;</p><p>asam dan pedas.</p>",
      file: "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/bumbu%2Fspicy-korean.jpg?alt=media&token=a43197c1-e67c-4c30-a01e-3f6315a65025",
      createdAt: "2023-08-22T03:29:37.008Z",
      updatedAt: "2023-08-22T03:29:37.008Z",
      __v: 0,
    },
    {
      _id: "64e42bc80285ca3fbfe07843",
      title: "Bulgogi",
      desc: "<p>Saus hitam dengan cita rasa manis</p><p>dan pedas. Cocok untuk dinikmati</p><p>segala usia.</p>",
      file: "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/bumbu%2Fbulgogi.jpg?alt=media&token=34f6034f-c2fe-434f-8782-45f3e83f79e8",
      createdAt: "2023-08-22T03:30:16.382Z",
      updatedAt: "2024-01-21T07:10:40.498Z",
      __v: 0,
    },
  ],
  message: "Get Bumbu",
};

const detailDataBumbu = {
  data: {
    _id: "64e42aba0285ca3fbfe0781d",
    title: "Teriyaki Garlic",
    desc: "<p>Memiliki rasa manis dan asin.</p><p>Dengan tambahan aroma khas</p><p>bawang putih, yang menambah</p><p>kenikmatan daging.</p>",
    file: "https://firebasestorage.googleapis.com/v0/b/dagingue-dc5c9.appspot.com/o/bumbu%2Fteriyaki-garlic.jpg?alt=media&token=cf938dc3-e64f-442f-a4d1-4e41c3bf4f4f",
    createdAt: "2023-08-22T03:25:46.359Z",
    updatedAt: "2024-01-26T07:03:03.018Z",
    __v: 0,
  },
  message: "Get Detail Bumbu",
};

const token = {
  username: "daging",
  id: "64c507aa0b8b845fa26c388d",
  iat: 1711887263,
};

export const handler = [
  // get About
  http.get(apiUrl + "/api/about", () => {
    return HttpResponse.json(dataAbout);
  }),
  // edit about
  http.put(apiUrl + "/api/about/:id", async ({ request }) => {
    const data = await request.formData();

    for (const value of data.values()) {
      if (value.includes("file1") && value.includes("file2")) {
        return HttpResponse.json(
          { message: "update success" },
          { status: 200 }
        );
      } else if (value.includes("file2")) {
        return HttpResponse.json(
          { message: "update success" },
          { status: 200 }
        );
      }
    }
  }),
  // get potong
  http.get(apiUrl + "/api/potong", () => {
    return HttpResponse.json(dataPotong);
  }),
  // add bumbu
  http.post(apiUrl + "/api/bumbu", () => {
    return HttpResponse.json(
      { message: "success add new data" },
      { status: 200 }
    );
  }),
  // get bumbu
  http.get(apiUrl + "/api/bumbu", () => {
    return HttpResponse.json(dataBumbu);
  }),
  // get detail bumbu
  http.get(apiUrl + "/api/bumbu/:id", () => {
    return HttpResponse.json(detailDataBumbu);
  }),
  // edit bumbu
  http.put(apiUrl + "/api/bumbu/:id", async () => {
    return HttpResponse.json({ message: "update success" }, { status: 200 });
  }),
  // delete bumbu
  http.delete(apiUrl + "/api/bumbu/:id", () => {
    return HttpResponse.json({ message: "Data Deleted" }, { status: 200 });
  }),
  //  login
  http.post(apiUrl + "/auth/login", async ({ request }) => {
    const data = await request.json();

    if (data.username === "admin" && data.password === "123") {
      return HttpResponse.json({ message: "login success" }, { status: 200 });
    } else {
      return HttpResponse.json({ message: "login failed" }, { status: 400 });
    }
  }),
  // token
  http.get(apiUrl + "/auth/login", () => {
    return HttpResponse.json(token);
  }),
];

export const errorHandler = [
  // edit about
  http.put(apiUrl + "/api/about/:id", async () => {
    return HttpResponse.json({ message: "update failed" }, { status: 400 });
  }),

  // add bumbu
  http.post(apiUrl + "/api/bumbu", async () => {
    return HttpResponse.json({ message: "failed add data" }, { status: 400 });
  }),

  // edit bumbu
  http.put(apiUrl + "/api/bumbu/:id", async () => {
    return HttpResponse.json(
      { message: "failed edit success" },
      { status: 400 }
    );
  }),
];

// Buat kondisi kalo data potong cuman ada 2
export const ProductPotong2Products = [
  http.get(apiUrl + "/api/potong", () => {
    return HttpResponse.json(dataPotong2Products);
  }),
];

// Buat kondisi kalo data potong cuman ada 1
export const ProductPotong1Product = [
  http.get(apiUrl + "/api/potong", () => {
    return HttpResponse.json(dataPotong1Product);
  }),
];
