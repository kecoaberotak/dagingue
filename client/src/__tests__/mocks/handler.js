import { http, HttpResponse } from "msw";
const apiUrl = import.meta.env.VITE_DAGINGUE_API_URL;

export const handler = [
  // pas fetch ke api jsonplaceholder, responnya pake respon yg di mock ini
  http.get(apiUrl + "/api/about", () => {
    return HttpResponse.json({
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
    });
  }),
];
