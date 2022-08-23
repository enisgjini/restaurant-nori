// async function getUsers() {
//   fetch("http://fakestoreapi.com/products")
//     .then((response) => response.json())
//     .then(
//       (response) =>
//         (document.getElementById("id").innerHTML = response[2].title)
//     )
//     .catch((err) => console.error(err));
// }

// getUsers();

const response = {
  employees: [
    {
      id: 1,
      emri_i_ushqimit: "Fileto pule me kërpudha",
      perberesit: [
        {
          id: 1.1,
          elementi_1: "700 gr kërpudha Shampinjon",
        },
        {
          id: 1.2,
          elementi_2: "200 ml pana",
        },
        {
          id: 1.3,
          elementi_3: "2 lugë vaj ulliri",
        },
        {
          id: 1.4,
          elementi_4: "2 thelpinj hudhër",
        },
        {
          id: 1.5,
          elementi_5: "Majdanoz (të grirë imët)",
        },
        {
          id: 1.6,
          elementi_6: "1 lugë gjelle gjalpë",
        },
        {
          id: 1.7,
          elementi_7: "Kripë",
        },
        {
          id: 1.8,
          elementi_8: "Piper",
        },
      ],
      pergatitja: [
        {
          instruksioni: 1,
          pershkrimi_i_instruksionit:
            "Në një tigan me vaj ulliri skuqni hudhrat. Shtoni kërpudhat e prera dhe i lini rreth 10 minuta derisa të vyshken.",
        },
        {
          instruksioni: 2,
          pershkrimi_i_instruksionit:
            "Shtoni panën, majdanozin dhe trazojini mirë.",
        },
        {
          instruksioni: 3,
          pershkrimi_i_instruksionit:
            "Në një tigan tjetër skuqni filetot e pulës me pak gjalpë. Marinojini sipas dëshirës me kripë dhe piper.",
        },
        {
          instruksioni: 4,
          pershkrimi_i_instruksionit:
            "Pasi të jenë gati i servirni në pjatë dhe sipër i shtoni kërpudhat me pana. Vendosni edhe një gjethe borzilok. Ju bëftë mirë!",
        },
      ],
    },
    {
      id: 2,
      first_name: "Steve",
      last_name: "Palmer",
      email: "steve@codingthesmartway.com",
    },
    {
      id: 3,
      first_name: "Ann",
      last_name: "Smith",
      email: "ann@codingthesmartway.com",
    },
  ],
};

console.log(response);
console.log(response.employees[0].id);

document.getElementById("elementi_1").innerHTML =
  response.employees[0].perberesit[0].elementi_1;
document.getElementById("elementi_2").innerHTML =
  response.employees[0].perberesit[1].elementi_2;
document.getElementById("elementi_3").innerHTML =
  response.employees[0].perberesit[2].elementi_3;
document.getElementById("elementi_4").innerHTML =
  response.employees[0].perberesit[3].elementi_4;
document.getElementById("elementi_5").innerHTML =
  response.employees[0].perberesit[4].elementi_5;
document.getElementById("elementi_6").innerHTML =
  response.employees[0].perberesit[5].elementi_6;
document.getElementById("elementi_7").innerHTML =
  response.employees[0].perberesit[6].elementi_7;
document.getElementById("elementi_8").innerHTML =
  response.employees[0].perberesit[7].elementi_8;

document.getElementById("instruksioni_1").innerHTML =
  response.employees[0].pergatitja[0].instruksioni;
document.getElementById("pershkrimi_i_instruksionit_1").innerHTML =
  response.employees[0].pergatitja[0].pershkrimi_i_instruksionit;

document.getElementById("instruksioni_2").innerHTML =
  response.employees[0].pergatitja[1].instruksioni;
document.getElementById("pershkrimi_i_instruksionit_2").innerHTML =
  response.employees[0].pergatitja[1].pershkrimi_i_instruksionit;
document.getElementById("instruksioni_3").innerHTML =
  response.employees[0].pergatitja[2].instruksioni;
document.getElementById("pershkrimi_i_instruksionit_3").innerHTML =
  response.employees[0].pergatitja[2].pershkrimi_i_instruksionit;
document.getElementById("instruksioni_4").innerHTML =
  response.employees[0].pergatitja[3].instruksioni;
document.getElementById("pershkrimi_i_instruksionit_4").innerHTML =
  response.employees[0].pergatitja[3].pershkrimi_i_instruksionit;
