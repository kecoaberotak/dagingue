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

export const handler = [
  // pas fetch ke api jsonplaceholder, responnya pake respon yg di mock ini
  http.get(apiUrl + "/api/about", () => {
    return HttpResponse.json(dataAbout);
  }),
  http.get(apiUrl + "/api/potong", () => {
    return HttpResponse.json(dataPotong);
  }),
];
