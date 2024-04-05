const tableData = [
  ["Veličina parcele ", "Cena"],
  ["Row 2, Col 1", "Row 2, Col 2"],
  ["Row 3, Col 1", "Row 3, Col 2"],
  ["Row 4, Col 1", "Row 4, Col 2"],
  ["Row 5, Col 1", "Row 5, Col 2"],
  ["Row 6, Col 1", "Row 6, Col 2"],
];

const dataUsluge = [
  {
    id: "prskanje-dronom",
    title: "PRSKANJE DRONOM",
    description: `Naša firma ponosno sarađuje sa vodećim stručnjacima u oblasti prskanja dronom, kompanijom "DRON AGRI". Naš tim se posvećuje pružanju visokokvalitetnih usluga prskanja useva dronom kako bismo unapredili efikasnost i produktivnost poljoprivredne proizvodnje.
    Važno je napomenuti da su cene za naše usluge okvirne i podložne promenama u zavisnosti od sezonskih uslova i zahteva klijenata. Ova fleksibilnost nam omogućava da prilagodimo naše tretmane specifičnim potrebama svakog polja i useva.
    Koristimo najsavremeniju tehnologiju za prskanje dronom, pri čemu se ističe DJI Agras T30 dron. Ova inovativna oprema obezbeđuje precizno i ravnomerno raspoređivanje sredstava za tretmane, smanjujući gubitke i optimizirajući upotrebu resursa.
    Proces saradnje je jednostavan. Nakon prijave za uslugu putem ostavljanja vaših podataka, naš tim će vas kontaktirati kako bismo se dogovorili o ceni i vremenu prskanja. Naš cilj je da vam pružimo personalizovanu podršku i osiguramo da svaka usluga prskanja bude prilagođena vašim specifičnim potrebama.
    Uz našu uslugu prskanja dronom, možete računati na vrhunski nivo preciznosti i efikasnosti, čime ćete postići bolje rezultate u poljoprivredi. Obratite nam se sa poverenjem i zajedno ćemo raditi na optimizaciji vaše poljoprivredne proizvodnje.
    `,

    cenaKursa: (
      <table>
        <tbody>
          {tableData.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {rowData.map((cellData, cellIndex) => (
                <td key={cellIndex}>{cellData}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    ),
  },
  {
    id: "procena-štete-i-stanja-useva",
    title: "PROCENA STANJA USEVA ILI NASTALE ŠTETE",
    description: `Nakon prijave, naš stručni tim sa Poljoprivrednog fakulteta u Novom Sadu reaguje brzo i precizno procenjuje štetu na svim vrstama poljoprivrednih useva uzrokovanih vremenskim nepogodama poput grada, poplava i olujnih vetrova.
    Primena najsavremenije tehnologije, uključujući DJI Phantom P4 dron i multispektralne indekse, omogućava nam tačno mapiranje terena. 
    Nakon analize, dobijate personalizovan izveštaj s preciznim kalkulacijama štete na vašem posedu. Ovaj izveštaj osigurava da razumete trenutno stanje vaših useva, olakšava brze i informisane odluke o oporavku i omogućava efikasnu raspodelu resursa za maksimiziranje prinosa.
    
    `,

    cenaKursa: "55.000 rsd",
  },
  {
    id: "izrada-mapa-za-varijabilne-tratmane",
    title: "IZRADA MAPA ZA VARIJABILNE TRATMANE",
    description: `Prikupljanje podataka o različitim informacijama kao što su informacije o tipu zemljišta, topografiji, primenjenoj agrotehnici u prošlosti, varijabilnostima parcele (snimci dronom, satelitski snimci, EC zemljišta) i ostalim dostupnim resursima (voda, hraniva, itd.). Nakon prikupljanja podataka, vrši se prostorna analiza, te nadgledana i nenadgledana klasifikacija u cilju pravilnog zoniranja. Svakoj zoni određuje se preporučena norma setve, đubrenja ili zaštite u skladu sa agronomskim principima. Korisnik dobija geotif koji je sadrži mrežu polja (piksela) odgovarajuće veličine u skladu sa specifikacijom mašine za distribuciju sredstva. 

    `,

    cenaKursa: "55.000 rsd",
  },
  {
    id: "predviđanje-prinosa-pšenice",
    title: "PREDVIĐANJE PRINOSA PŠENICE",

    description: `Nakon prijave i ličnog kontakta, naš tim stručnjaka sa Poljoprivrednog fakulteta iz Novog Sada dolazi na vašu parcelu kako bi obavili procenu prinosa pšenice. Koristeći najsavremeniju tehnologiju i DJI Phantom P4 dron, mapiramo celu parcelu. U dogovorenom roku, pružamo vam detaljan izveštaj koji sadrži precizne kalkulacije i procenu očekivanog prinosa pšenice. Naša usluga vam omogućava da bolje planirate resurse i upravljate svojim usevima, pružajući vam pouzdane informacije o stanju vaših poljoprivrednih površina.
    `,

    cenaKursa: "55.000 rsd",
  },
  {
    id: "procena-potreba-biljaka-za-azotom-bez-laboratorijskih-analiza",
    title: "SENZORSKA DETEKCIJA AZOTA U BILJKAMA (BLISKA ILI/I DALJINSKA)",
    description: `Procena sadržaja azota u biljkama može se sprovesti korišćenjem ručnih senzora tipa GreenSeeker ili PlantOmeter, odnosno korišćenjem multispektralnih snimaka sa drona ili satelita. U zavisnosti o situacije i preferencijala naručioca, moguće je koristiti jednu od pomenutih ili kombinovanu metodu kako bi se došlo do informacije o deficitu u azotu u biljkama te na osnovu toga dale adekvatne preporuke. Metode su neinvanzivne i brze što u kombinaciji sa proverenim algoritmima za izračunavanje potrebne količine azota značajno olakšava proces donošenja odluke uz smanjenje nepotrebnih troškova na analize zemlje ili biljnog tkiva. 
    `,

    cenaKursa: "55.000 rsd",
  },
  {
    id: "procena-kvaliteta-setve",
    title: "PROCENA KVALITETA SETVE",

    description: `Sklop biljaka je presudan za ostvarivanje ciljanog prinosa. Proređivanje biljaka može biti posledica više biotičkih i abiotičkih faktora. Jedini način da se preduprede sistemske greške u setvi i pripremi zemljišta jeste utvrđivanje sklopa. Procena kvaliteta setve na celokupnoj populaciji biljaka na parceli se izvodi kombinacijom metode snimanja iz vazduha i automatizovanom obradom snimaka korišćenjem prilagođenih modela mašinskog učenja. Na ovaj način, moguće je sa preko 95% sigurnosti utvrditi sklop biljaka i devijaciju u razmacima unutar reda.
    `,

    cenaKursa: "55.000 rsd",
  },
  {
    id: "menadžment-podacima",
    title: "MENADŽMENT PODACIMA",

    description: `U poljoprivredi podaci dolaze sa različitih senzorskih platformi koje poljoprivrednici koriste. Nove mašine su opremljene različitim snimačima podataka koji mogu biti od velike koristi u budućem odlučivanju. Moguće je ukrštanje podataka sa bespilotnih sistema, monitora prinosa, rasipača min. đubriva za potrebe pravljenja baze geoprostornih podataka. Za potrebe iznalaženja složenih interakcija među podacima primenjujemo napredne tehnike učenja iz podataka tzv. mašinsko učenje i geoprostorna analitika. 
    `,

    cenaKursa:
      "Cena naših usluga varira u zavisnosti od obima projekta i vrste angažmana. Detalje ćemo razmotriti nakon što nam ostavite vaše podatke i opišete specifične zahteve vašeg projekta. Naš cilj je pružiti vam najbolje moguće rešenje uz konkurentske cene.",
  },
  {
    id: "podešavanje-poljoprivrednih-mašina",
    title: "PODEŠAVANJE POLJOPRIVREDNIH MAŠINA - IZRADA KALIBRACIONIH KARTI",
    description: `Mašine za površinsku distribuciju su neizostavne u procesu poljoprivredne proizvodnje. Kvalitet rada tih mašina zavisi od podešenosti od stane korisnika. Da bi se pravilno podesila prskalica, rasipač min. đubriva ili sejalica, važno je znati kakva je karakteristika dozirnog mehanizma kako bi se pravilno odabrali radni parametri (brzina, širina zahvata). Ovo je posebno bitno kad se radi sa mašinama za rad sa granulisanim materijalima (sejalice, rasipači) jer su fizičke karakteristike ulaznog materijala nestandardne te se mora pristupiti kalibraciji. Izrada kalibracionih karti podrazumeva da se za pojedinačnu mašinu odredi karakteristika dozatora kroz seriju testiranja, na osnovu čega se kreira jedinstveni matematički model tj. dijagram iz čega se mogu isčitavati potrebni parametri za podešavanje mašine. 

    `,

    cenaKursa: "23600 rsd/po mašini",
  },
  {
    id: "uravnoteženje-rotora",
    title: "URAVNOTEŽENJE ROTORA",

    description: `Neravnoteža rotora može biti rezultat geometrijskih poremećaja ili neravnoteža u rasporedu mase rotora ukoliko je pravilna geometrija. Takođe to može biti posledica nepravilnosti u proizvodnom procesu ili trošenja delova tokom korišćenja (šine bubnja kombajna, noževi roto sitnilice ili mlina), loša montaža ili oštećenja na rotoru tokom eksploatacije.
    Uravnoteženje rotora bez demontaže sa ležišta mašine obično se naziva i in-situ balansiranje ili dinamičko balansiranje na terenu. Ovaj postupak se radi kada je demontaža rotora teška ili skupa, ili kada se rotor ne može ukloniti iz svog radnog okruženja iz nekog drugog razloga. Da bi se rešio problem neravnoteže rotora, prvo se debalans mora identifikovati. To se obično sprovodi korišćenjem tehnika dinamičkog balansiranja kao što je vibraciona analiza. Nakon što se identifikuje uzrok neravnoteže, mogu se preduzeti određeni koraci za rešavanje problema. To uključuje dodavanje ili uklanjanje mase na određenim mestima rotora kako bi se postigla ravnoteža. Mi posedujemo znanja i opremu za merenje i lociranje debalansa na vratilima poljoprivrednih mašina kao što su rotosečke, tarupi, bubnjevi, zamajci i ostli rotirajući elementi. 
    
    `,

    cenaKursa: "40000 rsd/po mašini",
  },
  {
    id: "izrada-tehničke-dokumentacije",
    title: "IZRADA TEHNIČKE DOKUMENTACIJE",
    description: `Naša usluga "Izrada tehničke dokumentacije" predstavlja savremeni pristup preciznom i inovativnom projektovanju u industriji. Naš tim stručnjaka, zaposlenih na Poljoprivrednom fakultetu u Novom Sadu, Departman za Poljoprivrednu tehniku, donosi bogato iskustvo i stručnost u oblasti tehničkog crtanja i dizajna. Za izradu koristimo najsavremenije CAD dizajn softvere, garantujući visok nivo preciznosti i efikasnosti.
    Naša reputacija se zasniva na konkretnim rezultatima. Nedavno smo dobili zlatnu medalju na Novosadskom poljoprivrednom sajmu 2023. godine za kompletnu izradu nove tanjirače. Ovaj projekat je obuhvatio sve faze, od ideje do gotove mašine, uključujući projektovanje, modelovanje i izradu tehničke dokumentacije. Naš tim je pokazao svoju sposobnost da prevaziđe izazove i da stvori inovativna rešenja.
    Naše usluga "Izrada tehničke dokumentacije" radimo sa preciznošću, posvećenošću i kreativnošću kako bismo omogućili klijentima da ostvare svoje potrebe. Sa nama, možete biti sigurni da ćete dobiti tehničku dokumentaciju vrhunskog kvaliteta, stvorenu uz primenu najnovijih tehnologija i najboljih inženjera spremnih za različite izazove.
    
    `,

    cenaKursa: "55.000 rsd",
  },
  {
    id: "izrada-3D-modela-mašinskih-sklopova-i-elemenata",
    title: "IZRADA 3D MODELA MAŠINSKIH SKLOPOVA I ELEMENATA",
    description: `Naša usluga "Izrada 3D modela mašinskih sklopova i elemenata" predstavlja rezultat rada tima zaposlenog na Poljoprivrednom fakultetu u Novom Sadu, Departman za Poljoprivrednu tehniku. Naš tim je sastavljen od visoko kvalifikovanih stručnjaka sa bogatim iskustvom u oblasti tehničkog modeliranja i dizajna. Koristimo najsavremenije CAD softvere kako bismo garantovali visoku preciznost i efikasnost u izradi 3D modela.
    Usluga "Izrada 3D modela mašinskih sklopova i elemenata" pruža se sa izuzetnom preciznošću, posvećenošću i kreativnošću. Posedujemo duboko razumevanje tehnoloških izazova u poljoprivredi. Sve modele izrađujemo uz primenu najnovijih CAD softvera i izvodimo simulacije opterećenja mašinskih sklopova i elemenata kako bismo osigurali izdržljivost i funkcionalnost. Možete biti sigurni da ćete dobiti modele visokog kvaliteta, prilagođene vašim specifičnim zahtevima.
    
    `,

    cenaKursa:
      "Cena naših usluga varira u zavisnosti od obima projekta i vrste angažmana. Detalje ćemo razmotriti nakon što nam ostavite vaše podatke i opišete specifične zahteve vašeg projekta. Naš cilj je pružiti vam najbolje moguće rešenje uz konkurentske cene.",
  },
  {
    id: "izrada-mape-preporuke-P-i-K-na-osnovu-mape-prinosa",
    title: "IZRADA VARIJABILNE MAPE P i K",
    description: `Danas koristimo metode prikupljanja podataka koje su značajno racionalnije u pogledu potrošnje vremena i finansijskih resursa kako bi krajnjem korisniku omogućili pristupačnu uslugu sa više nego dovoljnom relevantnošću preporučenih mera. Na osnovu analize podataka, stvaraju se digitalne mape koje prikazuju preporučene količine kalijuma i fosfora za svaki deo polja. Ove mape preporuka se zasnivaju na analizi podataka o zemljištu, usevima, klimatskim uslovima i drugim relevantnim faktorima koji utiču na potrebe biljaka za hranljivim materijama.
    Na taj način se omogućava poljoprivrednicima da primene đubrivo na način koji je prilagođen specifičnim potrebama zemljišta i useva na određenom području.
   
    `,

    cenaKursa: "55.000 rsd",
  },
  {
    id: "savetovanje-u-preciznoj-poljoprivredi",
    title: "KONSALTING U PRECIZNOJ POLJOPRIVREDI",
    description: `Dugogodišnjim iskustvom došli smo do dragocenih saznanja o mogućnostima različitih tehnologija kao što su GPS lociranje i navođenje, upotreba daljinske detekcije u odlučivanju, primena bliske senzorske detekcije, tehnologije varijabilnih normi, monitora prinosa, GIS-a, itd. Naše iskustvo pomoći će vam u odabiru najbolje opreme optimalnog cenovnog ranga.

    `,

    cenaKursa: "Cena zavisi od vrste investicije.",
  },
];

export const dropdowns = [
  {
    title: "SADRŽAJ KURSA",
    options: [
      <li>
        <b>Uvod u Preciznu Poljoprivredu:</b> Razumevanje koncepta i značaja
        precizne poljoprivrede.
      </li>,
      <li>
        <b> Prostorne Informacije u Poljoprivredi:</b> Upotreba GIS platformi za
        bolje prostorno planiranje.
      </li>,
      <li>
        <b>Dronovi u Praksi:</b>Praktična primena dronova za prskanje i
        daljinsku detekciju u poljoprivredi.
      </li>,
      <li>
        <b>Senzorski Sistemi:</b> Korišćenje naprednih senzora za precizno
        merenje parametara zemljišta i biljaka.
      </li>,
      <li>
        <b>GPS Tehnologija u Navigaciji:</b> Integracija GPS sistema za preciznu
        navigaciju na poljoprivrednom zemljištu.
      </li>,
      <li>
        <b>Algoritmi za Prinos:</b> Razvoj algoritama za precizno predviđanje
        prinosa na osnovu NDVI i multispektralnih snimaka.
      </li>,
      <li>
        <b>Đubrenje Azotom:</b> Efikasno đubrenje azotom kroz napredne
        tehnologije.
      </li>,
      <li>
        <b>Edukacija o Korišćenju Savremenih Alata:</b> Edukacija
        poljoprivrednika o dostupnim tehnologijama.
      </li>,
      <li>
        <b>Praktična Primena Kursa:</b> Implementacija stečenih znanja u
        svakodnevnom radu na poljoprivrednom gazdinstvu.
      </li>,
      <li>
        {" "}
        <b>Optimizacija Poljoprivredne Proizvodnje:</b> Postizanje efikasnije i
        održive poljoprivredne proizvodnje kroz primenu preciznih tehnologija.
      </li>,
    ],
  },
  {
    title: "SERTIFIKACIJA",
    options: [
      "Završetkom kursa polaznici stiču sertifikat Poljoprivrednog fakulteta u Novom Sadu, čime se potvrđuje poznavanje osnova iz oblasti precizne poljoprivrede.",
    ],
  },
  {
    title: "PREDAVAČI",
    options: [
      <ol>
        <li>
          <b>1. Dr Marko Kostić, vanredni profesor</b>
        </li>
        <li>
          <b>2. Dr Zoran Stamenković, docent</b>
        </li>
        <li>
          <b>3. MSc Krstan Kešelj, asistent</b>
        </li>
      </ol>,
    ],
  },
];

export default dataUsluge;
