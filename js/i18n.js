/* ==========================================================================
   MAISON IVOIRE — language layer (uz / ru / en)
   - Shows a language gate on the first visit, remembers the choice.
   - Static markup is tagged with data-i18n="key"; English stays in the HTML.
   - Scripts call I18N.t("English text", {vars}) for everything they render.
   To add or fix a translation, edit DATA below.
   ========================================================================== */
(function () {
  "use strict";
  var DATA = {
 "uz": {
  "h": {
   "refillable-recyclable-cruelty-free-complimentary": "<span class=\"announce__item\">Qayta to'ldiriladigan, qayta ishlanadigan, hayvonlarda sinalmagan</span><span class=\"announce__star\" aria-hidden=\"true\">✦</span><span class=\"announce__item\">$120 dan yuqori buyurtmalarda bepul yetkazib berish</span><span class=\"announce__star\" aria-hidden=\"true\">✦</span><span class=\"announce__item\">Marosimingizga 20% chegirma uchun IVOIRE20 kodidan foydalaning</span><span class=\"announce__star\" aria-hidden=\"true\">✦</span><span class=\"announce__item\">Har bir buyurtma bilan ikkita deluxe namuna</span><span class=\"announce__star\" aria-hidden=\"true\">✦</span>",
   "shop": "Do'kon",
   "bestsellers": "Eng ko'p sotilganlar",
   "offers": "Takliflar",
   "contact": "Aloqa",
   "search-products": "Mahsulotlarni qidirish",
   "popular-searches": "Ommabop qidiruvlar",
   "serum": "Serum",
   "rose": "Atirgul",
   "ceramide": "Seramid",
   "hyaluronic": "Gialuron",
   "lipstick": "Lab bo'yog'i",
   "from-the-garden-to-the": "Bog'dan stakangacha",
   "fewer-ingredients-finer-ones": "Kamroq tarkib. <em>Yanada nafisroq.</em>",
   "considered-formulas-hand-finished-in": "O'ylab yaratilgan formulalar, Grassda qo'lda yakunlangan. Teriga yumshoq, go'zal va har kuni ta'sir qiladigan parvarish.",
   "damask-rose-cold-pressed-shea": "Damask atirguli, sovuq siqilgan shi yog'i, oltin peptidlar. Har bir formula manbasigacha kuzatilgan bir necha ajoyib faol komponentlar asosida yaratilgan.",
   "refillable-recyclable-cruelty-free-made": "Qayta to'ldiriladigan, qayta ishlanadigan, hayvonlarda sinalmagan. Fransiyada ishlab chiqarilgan.",
   "shop-the-collection": "Kolleksiyani ko'rish",
   "considered-formulas-for-skin-that": "Teringiz sokin nur sochib, shunday ko'rinishi va his etishi uchun o'ylangan formulalar.",
   "join-the-maison": "Maisonga qo'shiling",
   "early-access-to-launches-and": "Yangiliklardan birinchi bo'lib xabardor bo'ling va birinchi buyurtmaga 10% chegirma oling.",
   "email-address": "Elektron pochta manzili",
   "serums-oils": "Serumlar va moylar",
   "moisturizers": "Namlovchi kremlar",
   "cleansers-mists": "Tozalagichlar va spreylar",
   "makeup": "Makiyaj",
   "body": "Tana uchun",
   "fragrance": "Parfyumeriya",
   "hair": "Soch parvarishi",
   "our-story": "Bizning hikoya",
   "wishlist": "Sevimlilar",
   "your-bag": "Savatingiz",
   "care": "Mijozlarga xizmat",
   "contact-us": "Biz bilan bog'lanish",
   "shipping-over-120-free": "$120 dan yuqori yetkazish bepul",
   "30-day-returns": "30 kunlik qaytarish",
   "2026-maison-ivoire-cruelty-free": "© 2026 Maison Ivoire. Hayvonlarda sinalmagan · Qayta to'ldiriladigan · Fransiyada ishlab chiqarilgan.",
   "your-selection": "Sizning tanlovingiz",
   "your-bag-2": "Sizning <em>savatingiz</em>",
   "care-maison-ivoire": "Parvarish · Maison Ivoire",
   "let-s-talk-skin": "Teri haqida <em>gaplashaylik.</em>",
   "questions-about-a-ritual-an": "Marosim, buyurtma yoki rang haqida savolingiz bormi? Parijdagi atelyemiz har bir xabarga shaxsan javob beradi — odatda bir ish kuni ichida.",
   "atelier-open-now-replies-within": "<span class=\"contact__dot\" aria-hidden=\"true\"></span>Atelye ochiq · 24 soat ichida javob beramiz",
   "write-to-us": "Bizga yozing",
   "call": "Qo'ng'iroq",
   "atelier": "Atelye",
   "12-rue-de-castiglione-75001": "Rue de Castiglione 12, 75001 Parij",
   "hours": "Ish vaqti",
   "mon-fri-9-00-18": "Dush – Juma · 9:00 – 18:00 (CET)",
   "send-us-a-message": "Bizga <em>xabar</em> yuboring",
   "what-can-we-help-with": "Qanday masalada yordam beramiz?",
   "my-order": "Buyurtmam",
   "product-advice": "Mahsulot bo'yicha maslahat",
   "returns": "Qaytarish",
   "press-partners": "Matbuot va hamkorlar",
   "your-name": "Ismingiz",
   "how-can-we-help": "Qanday yordam bera olamiz?",
   "send-message": "Xabar yuborish",
   "we-only-use-your-details": "Ma'lumotlaringizdan faqat sizga javob berish uchun foydalanamiz.",
   "thank-you": "<em>Rahmat</em>",
   "we-have-your-message-and": "Xabaringiz qabul qilindi, bir ish kuni ichida javob beramiz.",
   "send-another-message": "Yana xabar yuborish",
   "free-shipping-on-orders-over": "<span class=\"care-tiles__k\">Bepul</span><span class=\"care-tiles__v\">$120 dan yuqori buyurtmalarda yetkazib berish</span>",
   "30-days-easy-returns-no": "<span class=\"care-tiles__k\">30 kun</span><span class=\"care-tiles__v\">Oson qaytarish, savollarsiz</span>",
   "2-deluxe-samples-with-every": "<span class=\"care-tiles__k\">2 ×</span><span class=\"care-tiles__v\">Har bir buyurtma bilan deluxe namunalar</span>",
   "autumn-winter-2026": "Kuz — Qish 2026",
   "the-art-of-quiet-luminosity": "Sokin <em class=\"gold-text\">nur</em><br>san'ati",
   "discover-lumi-re": "Lumière bilan tanishing",
   "lumi-re-renewal-serum-our": "<span class=\"hero__tag-title\">Lumière Renewal Serum</span><span class=\"hero__tag-sub\">Bizning belgimiz · $128</span>",
   "most-loved": "Eng sevimlilar",
   "the-bestsellers": "Eng ko'p <em>sotilganlar</em>",
   "view-all": "Barchasini ko'rish",
   "curated-by-ritual": "<em>Marosim</em> bo'yicha tanlangan",
   "glow-oils-serums": "Yorituvchi moylar va serumlar",
   "cocooning-textures": "Qamrab oluvchi teksturalar",
   "gentle-cleansing": "Yumshoq tozalash",
   "saw-more-radiant-skin-in": "14 kunda terisi yanada yorqinlashganini aytdi*",
   "the-ivoire-ritual": "Ivoire marosimi",
   "three-gestures-a-lifetime-of": "Uch harakat.<br><em>Butun umrlik nur.</em>",
   "cleanse": "Tozalash",
   "melt-away-the-day-with": "Aminokislotali gelimiz bilan kun charchog'ini yuving.",
   "treat": "Parvarish",
   "press-in-golden-peptides-and": "Oltin peptidlar va bakuchiolni terining ichiga singdiring.",
   "seal": "Mustahkamlash",
   "cocoon-in-ceramides-and-cold": "Seramidlar va sovuq siqilgan shi yog'i bilan o'rang.",
   "consumer-study-112-participants": "*Iste'molchilar tadqiqoti, 112 ishtirokchi.",
   "limited-time-the-autumn-edit": "Cheklangan vaqt · Kuz kolleksiyasi",
   "up-to-20-off-select": "<span class=\"gold-text\">20% gacha</span> chegirma <em>tanlangan marosimlarga</em>",
   "rose-absolue-clat-and-ambre": "Rose Absolue, Éclat va Ambre — mavsum uchun arzonlashtirildi. Bundan tashqari, quyidagi kod bilan butun buyurtmaga qo'shimcha 20% chegirma oling.",
   "your-code": "Sizning kodingiz",
   "shop-the-offers": "Takliflarni ko'rish",
   "just-arrived": "Yangi kelganlar",
   "new-noteworthy": "Yangi va <em>e'tiborga molik</em>",
   "shop-new": "Yangiliklar",
   "our-philosophy": "Bizning falsafa",
   "in-their-words": "Ularning so'zlari bilan",
   "loved-by-2-300-clients": "2 300+ mijozning sevimlisi",
   "three-weeks-in-and-my": "“Uch haftadan keyin terim tekisligi sezilarli yaxshilandi. Hech qanday tirnash yo'q — yangilovchi vositalar bilan men uchun bu birinchi marta.”",
   "the-scent-is-subtle-and": "“Hid sezilarli emas, ertasi kuni ertalab esa nur ajoyib. Retinolimni butunlay almashtirdim.”",
   "rich-without-being-greasy-my": "“Boy, lekin yog'li emas. Quruq joylarim bir necha kunda yo'qoldi.”",
   "the-maison-letter": "Maison xati",
   "10-off-your-first-ritual": "Birinchi <em>marosimingizga</em> 10% chegirma",
   "rare-emails-unsubscribe-anytime": "Kamdan-kam xatlar. Istalgan vaqtda obunani bekor qiling.",
   "you-may-also-love": "Sizga <em>yoqishi mumkin</em>",
   "skin-concern": "Teri muammosi",
   "price": "Narx",
   "on-offer-only": "Faqat chegirmadagilar",
   "sort": "Saralash",
   "saved-for-later": "Keyinroq uchun saqlangan",
   "your-wishlist": "Sizning <em>sevimlilaringiz</em>",
   "featured": "Tavsiya etilgan",
   "price-low-to-high": "Narx: arzondan qimmatga",
   "price-high-to-low": "Narx: qimmatdan arzonga"
  },
  "s": {
   "Breadcrumb": "Navigatsiya yo'li",
   "Close portrait of a woman with luminous skin, eyes closed": "Ko'zlari yumuq, nurli teriga ega ayolning yaqin portreti",
   "Close search": "Qidiruvni yopish",
   "Contact details": "Aloqa ma'lumotlari",
   "Contact — Maison Ivoire": "Aloqa — Maison Ivoire",
   "Copy promo code IVOIRE20": "IVOIRE20 promo-kodini nusxalash",
   "Filters": "Filtrlar",
   "Frosted glass bottle with a brushed-gold cap on a travertine block": "Travertin bloki ustida oltin qopqoqli xira shisha flakon",
   "Good to know": "Bilish foydali",
   "Ivoire — Maison Paris, home": "Ivoire — Maison Paris, bosh sahifa",
   "Maison Ivoire — The Art of Quiet Luminosity": "Maison Ivoire — Sokin nur san'ati",
   "Maison Ivoire — considered skincare, hand-finished in Grasse.": "Maison Ivoire — Grassda qo'lda yakunlangan, puxta o'ylangan teri parvarishi.",
   "Maximum price": "Maksimal narx",
   "Menu": "Menyu",
   "New arrivals": "Yangi kelganlar",
   "Primary": "Asosiy",
   "Product categories": "Mahsulot toifalari",
   "Search": "Qidirish",
   "Search serums, ingredients, rituals…": "Serum, tarkib, marosimlarni qidiring…",
   "Secondary": "Qo'shimcha",
   "Shop — Maison Ivoire": "Do'kon — Maison Ivoire",
   "Shopping bag": "Savat",
   "Store announcements": "Do'kon e'lonlari",
   "Subscribe": "Obuna bo'lish",
   "Wishlist": "Sevimlilar",
   "Wishlist — Maison Ivoire": "Sevimlilar — Maison Ivoire",
   "Your bag — Maison Ivoire": "Savatingiz — Maison Ivoire",
   "Your email address": "Elektron pochta manzilingiz",
   "Maison — Maison Ivoire": "Maison — Maison Ivoire",
   "New": "Yangi",
   "Bestseller": "Eng ko'p sotilgan",
   "Rated {n} out of 5": "Reyting: 5 dan {n}",
   "Save {n} to wishlist": "{n} ni sevimlilarga saqlash",
   "+ Add to bag": "+ Savatga qo'shish",
   "Add to bag": "Savatga qo'shish",
   "Added to your bag": "Savatga qo'shildi",
   "Removed from wishlist": "Sevimlilardan olib tashlandi",
   "Saved to wishlist": "Sevimlilarga saqlandi",
   "Save to wishlist": "Sevimlilarga saqlash",
   "Remove from wishlist": "Sevimlilardan olib tashlash",
   "Code applied": "Kod qo'llandi",
   "Code removed": "Kod olib tashlandi",
   "This code is not valid": "Bu kod yaroqsiz",
   "Order confirmed": "Buyurtma tasdiqlandi",
   "Purchase complete": "Harid qilindi!",
   "Thank you for your order. We are preparing your ritual with care.": "Buyurtmangiz uchun rahmat. Parvarishingizni ehtiyotkorlik bilan tayyorlayapmiz.",
   "Order No.": "Buyurtma raqami",
   "Items": "Mahsulotlar",
   "Demo store — checkout is not connected": "Demo do'kon — buyurtma rasmiylashtirish ulanmagan",
   "Code copied — it will apply in your bag": "Kod nusxalandi — savatda avtomatik qo'llanadi",
   "Code copied": "Kod nusxalandi",
   "The <em>bestsellers</em>": "Eng ko'p <em>sotilganlar</em>",
   "New &amp; <em>noteworthy</em>": "Yangi va <em>e'tiborga molik</em>",
   "The <em>offers</em>": "<em>Takliflar</em>",
   "Results for": "Natijalar:",
   "All": "Barchasi",
   "Up to {n}": "{n} gacha",
   "Nothing matches these filters.": "Bu filtrlarga mos hech narsa topilmadi.",
   "See the full collection": "To'liq kolleksiyani ko'rish",
   "Home": "Bosh sahifa",
   "Shop": "Do'kon",
   "Product images": "Mahsulot rasmlari",
   "Show image {n}": "{n}-rasmni ko'rsatish",
   "Decrease quantity": "Sonini kamaytirish",
   "Increase quantity": "Sonini oshirish",
   "Size": "Hajm",
   "Size: {s}": "Hajm: {s}",
   "Free shipping over $120": "$120 dan yuqori yetkazish bepul",
   "30-day returns": "30 kunlik qaytarish",
   "Cruelty-free · Refillable": "Hayvonlarda sinalmagan · Qayta to'ldiriladigan",
   "Details": "Tafsilotlar",
   "Shipping &amp; returns": "Yetkazib berish va qaytarish",
   "Our promise": "Bizning va'damiz",
   "Free standard shipping on orders over $120, otherwise {fee}. Not right for you? Return it within 30 days.": "$120 dan yuqori buyurtmalarda standart yetkazib berish bepul, aks holda {fee}. To'g'ri kelmadimi? 30 kun ichida qaytaring.",
   "Cruelty-free, refillable and made in France.": "Hayvonlarda sinalmagan, qayta to'ldiriladigan va Fransiyada ishlab chiqarilgan.",
   "Your wishlist is empty.": "Sevimlilar ro'yxatingiz bo'sh.",
   "Discover the collection": "Kolleksiyani kashf eting",
   "Your bag is empty.": "Savatingiz bo'sh.",
   "Continue shopping": "Xaridni davom ettirish",
   "Remove {n}": "{n} ni olib tashlash",
   "Promo code": "Promo-kod",
   "Apply": "Qo'llash",
   "Summary": "Xulosa",
   "Subtotal": "Oraliq summa",
   "Code {c}": "Kod {c}",
   "Shipping": "Yetkazib berish",
   "Free": "Bepul",
   "Total": "Jami",
   "Checkout": "Rasmiylashtirish",
   "Thank you — welcome to the Maison.": "Rahmat — Maisonga xush kelibsiz.",
   "Please enter a valid email address.": "Iltimos, to'g'ri elektron pochta manzilini kiriting.",
   "Please tell us how we can help.": "Iltimos, qanday yordam bera olishimizni yozing.",
   "This field is required.": "Bu maydon to'ldirilishi shart.",
   "Please write at least a few words.": "Iltimos, kamida bir necha so'z yozing.",
   "Thank you, {n} — we have your message and will reply to {e} within one business day.": "Rahmat, {n} — xabaringiz qabul qilindi, {e} manziliga bir ish kuni ichida javob beramiz.",
   "Radiance": "Yorqinlik",
   "Hydration": "Namlanish",
   "Firming": "Elastiklik",
   "Sensitive skin": "Sezgir teri",
   "Renewal": "Yangilanish",
   "Serums & Oils": "Serumlar va moylar",
   "Moisturizers": "Namlovchi kremlar",
   "Cleansers & Mists": "Tozalagichlar va spreylar",
   "Makeup": "Makiyaj",
   "Body": "Tana uchun",
   "Fragrance": "Parfyumeriya",
   "Hair": "Soch parvarishi",
   "ml": "ml",
   "g": "g"
  },
  "p": {
   "lumiere": {
    "desc": "Bakuchiol va oltin peptidli tungi serum",
    "long": "Silliq ipakdek tungi serum: bakuchiol va oltin peptidlar uyqu paytida teri tekisligini sezilarli silliqlaydi. Har kuni qo'llash uchun yetarlicha yumshoq."
   },
   "velours": {
    "desc": "Seramidli va shi yog'li to'siq tiklovchi krem",
    "long": "Seramidlar va sovuq siqilgan shi yog'i bilan boyitilgan, qamrab oluvchi krem — yog'li his qoldirmasdan teri to'sig'ini tiklaydi."
   },
   "clarte": {
    "desc": "Aminokislotali yumshoq kundalik tozalagich",
    "long": "Kun charchog'ini yuvib ketadigan, terini yumshoq va qulay holatda qoldiradigan yumshoq aminokislotali gel."
   },
   "nuit": {
    "desc": "Lavanda va PHA li silliqlovchi niqob",
    "long": "Uyqu paytida teri yuzasini muloyim yangilaydigan lavanda va PHA li tungi niqob — ertalab yanada silliq nur uchun."
   },
   "rose": {
    "desc": "Damask atirguli va na'matak nur moyi",
    "long": "Damask atirguli va na'matakdan tayyorlangan nur moyi — nurli, yumshoq yakun uchun parvarishning oxirgi bosqichida surtiladi."
   },
   "soie": {
    "desc": "Nude Rosé — qayta to'ldiriladigan satin rang",
    "long": "Nude Rosé ranglidagi qayta to'ldiriladigan satin lab bo'yog'i — qulay, kremsimon rang."
   },
   "silk": {
    "desc": "SPF 20 li ikkinchi teri serum tonal kremi",
    "long": "Teri rangini tekislaydigan va tabiiy, nurli yakun beradigan SPF 20 li ikkinchi teri serum tonal kremi."
   },
   "eclat": {
    "desc": "Kofein va romashkali shishni kamaytiruvchi balzam",
    "long": "Ko'z atrofini yoritadigan va yangilaydigan kofein va romashkali shishga qarshi balzam."
   },
   "aube": {
    "desc": "Evkalipt va gialuron tong spreyi",
    "long": "Evkalipt va gialuron kislotali nozik, tetiklantiruvchi sprey — teringizni kun bo'yi namlab turadi."
   },
   "ambre": {
    "desc": "Amber, neroli va marula tana moyi",
    "long": "Amber, neroli va marulaning ipakdek quruq tana moyi — tezda singib, terini yumshoq va sokin oltin nurli qoldiradi."
   },
   "revitalift": {
    "desc": "Qattiqroq teri uchun gialuronli kunduzgi krem",
    "long": "Gialuron kislotali kunduzgi krem mayda ajinlarni to'ldirib, terini silliqroq, tarangroq va namlangan holatda saqlaydi."
   },
   "uomo": {
    "desc": "Iliq, ziravor-yog'ochli kundalik xushbo'y hid",
    "long": "Toza shisha flakondagi iliq, ziravor va yog'och notalari uyg'unlashgan tualet suvi — ertalabdan kechgacha qulay."
   },
   "heart": {
    "desc": "Atirgul-nude rangdagi kremsimon satin lab bo'yog'i",
    "long": "Tekis surtiladigan, lablarni yumshoq qoldiradigan qulay satin lab bo'yog'i — har kuni uchun mos atirgul-nude rang."
   },
   "everlasting": {
    "desc": "SPF 20 + UVA himoyali tonal krem",
    "long": "Qulay va uzoq saqlanadigan suyuq tonal vosita: SPF 20 va UVA himoyasi bilan tekis, tabiiy qoplama beradi."
   },
   "variete": {
    "desc": "To'liq hajm va ultra uzunlik beruvchi qora tush",
    "long": "Moslashuvchan cho'tkali qora tush kirpiklarni uzaytiradi va hajm beradi — ta'sirchan, uzoq saqlanadigan ko'rinish uchun."
   },
   "neutrogena": {
    "desc": "Husnbuzarga moyil teri uchun 2% salitsil kislotali tozalovchi gel",
    "long": "Teshiklarni chuqur tozalaydigan, terining tabiiy muvozanatini saqlaydigan moysiz 2% salitsil kislotali gel — husnbuzarga moyil teri uchun har kuni."
   },
   "spacelatte": {
    "desc": "Chuqur tozalash uchun yumshoq yuz skrabi",
    "long": "Terini intensiv tozalaydigan, qora nuqtalarga qarshi kurashadigan va jarohatlamasdan silliqlaydigan yuz skrabi."
   },
   "baregrape": {
    "desc": "Yumshoq uzum-pushti rangdagi yaltiroq lab tinti",
    "long": "Bare Grape — yumshoq uzum-pushti rangdagi yengil, yaltiroq lab tinti. Qulay applikator aniq va oson surtish imkonini beradi."
   },
   "medipeel": {
    "desc": "Bug'doy kurtagi ekstraktli ko'pikli tozalagich",
    "long": "Bug'doy kurtagi ekstraktli yuqori konsentratsiyali ko'pikli tozalagich makiyaj va mayda iflosliklarni olib tashlaydi, muloyim pilling bilan nur beradi."
   },
   "vivienne": {
    "desc": "Yumshoq nude rangdagi kremsimon lab bo'yog'i",
    "long": "Yumshoq, har kuni uchun mos nude rangdagi kremsimon lab bo'yog'i — tilla rangli korpus va yashil-moviy qopqoqda."
   },
   "lushsilk": {
    "desc": "Keratin va lipido-proteinli yuvilmaydigan soch zardobi",
    "long": "Lipido-protein kompleksli keratinli yuvilmaydigan zardob sochni chuqur tiklaydi, silliqroq, yaltiroqroq va mustahkamroq qiladi."
   },
   "wonderlash": {
    "desc": "Ikki cho'tkali hajm va uzunlik beruvchi tush",
    "long": "2-in-1 tush: ikkita almashtiriladigan cho'tka — biri hajm, biri uzunlik uchun, istagan kirpik ko'rinishini yarating."
   },
   "brushset": {
    "desc": "Yumshoq bej rangdagi mini makiyaj cho'tkalari to'plami",
    "long": "Pudra, qizilmo'ylov, soya va qoshlar uchun yetti dona yumshoq cho'tkadan iborat ixcham to'plam, yakuniy tarash uchun cho'tkachasi bilan. Sayohatga olish uchun yengil."
   },
   "browmascara": {
    "desc": "Ingichka cho'tkali aniq qora tush",
    "long": "Ingichka va aniq cho'tkali qora tush kirpik va qoshlarni ajratib, toza va tabiiy ko'rinish beradi."
   },
   "kaoyo": {
    "desc": "Teri elastikligi uchun shilliq qurt ekstraktli yengil krem",
    "long": "Shilliq qurt ekstraktli yengil, kremsimon namlantiruvchi — terini namlaydi va yumshatadi, kun bo'yi silliq va qulay his beradi."
   },
   "prettyskin": {
    "desc": "Yengil namlantiruvchi quyoshdan himoya kremi SPF 50+ PA++++",
    "long": "Suvsimon yengil quyosh kremi SPF 50+ PA++++ terini namlaydi, UVA va UVB nurlardan himoya qiladi va makiyaj ostida og'irlik qoldirmaydi."
   },
   "joseon": {
    "desc": "Har kunlik muloyim quyoshdan himoya kremi SPF 50+ PA++++",
    "long": "Guruch ekstrakti va probiotiklarli muloyim kundalik quyosh kremi, SPF 50+ PA++++, terini tinchlantiradi va yopishqoq bo'lmagan yumshoq qoplama qoldiradi."
   },
   "irisgoat": {
    "desc": "Echki sutli oziqlantiruvchi yuz kremi",
    "long": "Echki sutli oziqlantiruvchi yuz kremi terini faol oziqlantiradi, namlaydi, yumshatadi va yoshroq, tarangroq ko'rinishga yordam beradi."
   },
   "eyepalette": {
    "desc": "To'qqiz iliq nude va yaltiroq soyalar",
    "long": "To'qqiz rangli soyalar palitrasi: iliq nude, pushti-jigarrang va yarqiroq ohanglar — kundalik yumshoq ko'rinish yoki kechki chuqurroq nigoh uchun."
   }
  }
 },
 "ru": {
  "h": {
   "refillable-recyclable-cruelty-free-complimentary": "<span class=\"announce__item\">Сменные блоки, переработка, без тестов на животных</span><span class=\"announce__star\" aria-hidden=\"true\">✦</span><span class=\"announce__item\">Бесплатная доставка при заказе от $120</span><span class=\"announce__star\" aria-hidden=\"true\">✦</span><span class=\"announce__item\">Промокод IVOIRE20 — скидка 20% на ваш ритуал</span><span class=\"announce__star\" aria-hidden=\"true\">✦</span><span class=\"announce__item\">Два deluxe-образца к каждому заказу</span><span class=\"announce__star\" aria-hidden=\"true\">✦</span>",
   "shop": "Магазин",
   "bestsellers": "Бестселлеры",
   "offers": "Акции",
   "contact": "Контакты",
   "search-products": "Поиск товаров",
   "popular-searches": "Популярные запросы",
   "serum": "Сыворотка",
   "rose": "Роза",
   "ceramide": "Керамиды",
   "hyaluronic": "Гиалурон",
   "lipstick": "Помада",
   "from-the-garden-to-the": "От сада до флакона",
   "fewer-ingredients-finer-ones": "Меньше ингредиентов. <em>Но лучших.</em>",
   "considered-formulas-hand-finished-in": "Продуманные формулы, доведённые до совершенства вручную в Грасе. Уход, который работает мягко, красиво, каждый день.",
   "damask-rose-cold-pressed-shea": "Дамасская роза, масло ши холодного отжима, золотые пептиды. Каждая формула строится на коротком списке исключительных активных компонентов, прослеженных до источника.",
   "refillable-recyclable-cruelty-free-made": "Сменные блоки, перерабатываемая упаковка, без тестов на животных. Сделано во Франции.",
   "shop-the-collection": "Смотреть коллекцию",
   "considered-formulas-for-skin-that": "Продуманные формулы для кожи, которая выглядит и ощущается спокойно сияющей.",
   "join-the-maison": "Присоединяйтесь к Maison",
   "early-access-to-launches-and": "Ранний доступ к новинкам и скидка 10% на первый заказ.",
   "email-address": "Адрес электронной почты",
   "serums-oils": "Сыворотки и масла",
   "moisturizers": "Увлажняющие средства",
   "cleansers-mists": "Очищение и мисты",
   "makeup": "Макияж",
   "body": "Для тела",
   "fragrance": "Парфюмерия",
   "hair": "Уход за волосами",
   "our-story": "Наша история",
   "wishlist": "Избранное",
   "your-bag": "Ваша корзина",
   "care": "Забота",
   "contact-us": "Связаться с нами",
   "shipping-over-120-free": "Доставка бесплатно от $120",
   "30-day-returns": "Возврат в течение 30 дней",
   "2026-maison-ivoire-cruelty-free": "© 2026 Maison Ivoire. Без тестов на животных · Сменные блоки · Сделано во Франции.",
   "your-selection": "Ваш выбор",
   "your-bag-2": "Ваша <em>корзина</em>",
   "care-maison-ivoire": "Забота · Maison Ivoire",
   "let-s-talk-skin": "Поговорим <em>о коже.</em>",
   "questions-about-a-ritual-an": "Вопросы о ритуале, заказе или оттенке? Наше парижское ателье лично отвечает на каждое сообщение — обычно в течение одного рабочего дня.",
   "atelier-open-now-replies-within": "<span class=\"contact__dot\" aria-hidden=\"true\"></span>Ателье открыто · ответим в течение 24 ч",
   "write-to-us": "Напишите нам",
   "call": "Позвонить",
   "atelier": "Ателье",
   "12-rue-de-castiglione-75001": "12 Rue de Castiglione, 75001 Париж",
   "hours": "Часы работы",
   "mon-fri-9-00-18": "Пн – Пт · 9:00 – 18:00 (CET)",
   "send-us-a-message": "Отправьте <em>сообщение</em>",
   "what-can-we-help-with": "Чем мы можем помочь?",
   "my-order": "Мой заказ",
   "product-advice": "Совет по продукту",
   "returns": "Возврат",
   "press-partners": "Пресса и партнёры",
   "your-name": "Ваше имя",
   "how-can-we-help": "Чем мы можем помочь?",
   "send-message": "Отправить сообщение",
   "we-only-use-your-details": "Мы используем ваши данные только для ответа вам.",
   "thank-you": "<em>Спасибо</em>",
   "we-have-your-message-and": "Мы получили ваше сообщение и ответим в течение одного рабочего дня.",
   "send-another-message": "Отправить ещё одно",
   "free-shipping-on-orders-over": "<span class=\"care-tiles__k\">Бесплатно</span><span class=\"care-tiles__v\">Доставка при заказе от $120</span>",
   "30-days-easy-returns-no": "<span class=\"care-tiles__k\">30 дней</span><span class=\"care-tiles__v\">Лёгкий возврат без лишних вопросов</span>",
   "2-deluxe-samples-with-every": "<span class=\"care-tiles__k\">2 ×</span><span class=\"care-tiles__v\">Deluxe-образца к каждому заказу</span>",
   "autumn-winter-2026": "Осень — Зима 2026",
   "the-art-of-quiet-luminosity": "Искусство <em class=\"gold-text\">тихого</em><br>сияния",
   "discover-lumi-re": "Откройте Lumière",
   "lumi-re-renewal-serum-our": "<span class=\"hero__tag-title\">Lumière Renewal Serum</span><span class=\"hero__tag-sub\">Наш символ · $128</span>",
   "most-loved": "Самое любимое",
   "the-bestsellers": "<em>Бестселлеры</em>",
   "view-all": "Смотреть все",
   "curated-by-ritual": "Подборки по <em>ритуалам</em>",
   "glow-oils-serums": "Масла и сыворотки для сияния",
   "cocooning-textures": "Обволакивающие текстуры",
   "gentle-cleansing": "Нежное очищение",
   "saw-more-radiant-skin-in": "заметили более сияющую кожу за 14 дней*",
   "the-ivoire-ritual": "Ритуал Ivoire",
   "three-gestures-a-lifetime-of": "Три жеста.<br><em>Сияние на всю жизнь.</em>",
   "cleanse": "Очищение",
   "melt-away-the-day-with": "Смойте усталость дня нашим аминокислотным гелем.",
   "treat": "Уход",
   "press-in-golden-peptides-and": "Вотрите золотые пептиды и бакучиол.",
   "seal": "Защита",
   "cocoon-in-ceramides-and-cold": "Окутайте кожу керамидами и маслом ши холодного отжима.",
   "consumer-study-112-participants": "*Потребительское исследование, 112 участниц.",
   "limited-time-the-autumn-edit": "Ограниченное время · Осенняя подборка",
   "up-to-20-off-select": "Скидки <span class=\"gold-text\">до 20%</span> <em>на избранные ритуалы</em>",
   "rose-absolue-clat-and-ambre": "Rose Absolue, Éclat и Ambre — со скидкой на этот сезон. А ещё получите дополнительные 20% на весь заказ по коду ниже.",
   "your-code": "Ваш промокод",
   "shop-the-offers": "Смотреть акции",
   "just-arrived": "Только что поступило",
   "new-noteworthy": "Новинки, <em>достойные внимания</em>",
   "shop-new": "Новинки",
   "our-philosophy": "Наша философия",
   "in-their-words": "Их словами",
   "loved-by-2-300-clients": "Любимо более 2 300 клиентов",
   "three-weeks-in-and-my": "«Через три недели текстура кожи заметно стала гладче. Совсем нет раздражения — со средствами для обновления у меня такое впервые.»",
   "the-scent-is-subtle-and": "«Аромат едва уловим, а сияние наутро просто невероятное. Я полностью заменила ретинол.»",
   "rich-without-being-greasy-my": "«Насыщенный, но не жирный. Сухие участки исчезли за несколько дней.»",
   "the-maison-letter": "Письмо Maison",
   "10-off-your-first-ritual": "Скидка 10% на ваш <em>первый ритуал</em>",
   "rare-emails-unsubscribe-anytime": "Редкие письма. Отписаться можно в любой момент.",
   "you-may-also-love": "Вам также <em>понравится</em>",
   "skin-concern": "Проблема кожи",
   "price": "Цена",
   "on-offer-only": "Только со скидкой",
   "sort": "Сортировка",
   "saved-for-later": "Сохранено на потом",
   "your-wishlist": "Ваше <em>избранное</em>",
   "featured": "Рекомендуемые",
   "price-low-to-high": "Цена: по возрастанию",
   "price-high-to-low": "Цена: по убыванию"
  },
  "s": {
   "Breadcrumb": "Навигация",
   "Close portrait of a woman with luminous skin, eyes closed": "Крупный портрет женщины с сияющей кожей и закрытыми глазами",
   "Close search": "Закрыть поиск",
   "Contact details": "Контактные данные",
   "Contact — Maison Ivoire": "Контакты — Maison Ivoire",
   "Copy promo code IVOIRE20": "Скопировать промокод IVOIRE20",
   "Filters": "Фильтры",
   "Frosted glass bottle with a brushed-gold cap on a travertine block": "Матовый стеклянный флакон с золотой крышкой на блоке травертина",
   "Good to know": "Полезно знать",
   "Ivoire — Maison Paris, home": "Ivoire — Maison Paris, главная",
   "Maison Ivoire — The Art of Quiet Luminosity": "Maison Ivoire — Искусство тихого сияния",
   "Maison Ivoire — considered skincare, hand-finished in Grasse.": "Maison Ivoire — продуманный уход за кожей, доведённый до совершенства вручную в Грасе.",
   "Maximum price": "Максимальная цена",
   "Menu": "Меню",
   "New arrivals": "Новые поступления",
   "Primary": "Основная",
   "Product categories": "Категории товаров",
   "Search": "Поиск",
   "Search serums, ingredients, rituals…": "Ищите сыворотки, ингредиенты, ритуалы…",
   "Secondary": "Дополнительная",
   "Shop — Maison Ivoire": "Магазин — Maison Ivoire",
   "Shopping bag": "Корзина",
   "Store announcements": "Объявления магазина",
   "Subscribe": "Подписаться",
   "Wishlist": "Избранное",
   "Wishlist — Maison Ivoire": "Избранное — Maison Ivoire",
   "Your bag — Maison Ivoire": "Ваша корзина — Maison Ivoire",
   "Your email address": "Ваш адрес электронной почты",
   "Maison — Maison Ivoire": "Maison — Maison Ivoire",
   "New": "Новинка",
   "Bestseller": "Бестселлер",
   "Rated {n} out of 5": "Оценка {n} из 5",
   "Save {n} to wishlist": "Сохранить «{n}» в избранное",
   "+ Add to bag": "+ В корзину",
   "Add to bag": "В корзину",
   "Added to your bag": "Добавлено в корзину",
   "Removed from wishlist": "Удалено из избранного",
   "Saved to wishlist": "Сохранено в избранное",
   "Save to wishlist": "Сохранить в избранное",
   "Remove from wishlist": "Убрать из избранного",
   "Code applied": "Промокод применён",
   "Code removed": "Промокод удалён",
   "This code is not valid": "Этот промокод недействителен",
   "Order confirmed": "Заказ подтверждён",
   "Purchase complete": "Покупка совершена!",
   "Thank you for your order. We are preparing your ritual with care.": "Спасибо за заказ. Мы бережно готовим ваш ритуал.",
   "Order No.": "Номер заказа",
   "Items": "Товары",
   "Demo store — checkout is not connected": "Демо-магазин — оформление заказа не подключено",
   "Code copied — it will apply in your bag": "Промокод скопирован — применится в корзине автоматически",
   "Code copied": "Промокод скопирован",
   "The <em>bestsellers</em>": "<em>Бестселлеры</em>",
   "New &amp; <em>noteworthy</em>": "Новинки, <em>достойные внимания</em>",
   "The <em>offers</em>": "<em>Акции</em>",
   "Results for": "Результаты по запросу",
   "All": "Все",
   "Up to {n}": "До {n}",
   "Nothing matches these filters.": "По этим фильтрам ничего не найдено.",
   "See the full collection": "Смотреть всю коллекцию",
   "Home": "Главная",
   "Shop": "Магазин",
   "Product images": "Изображения товара",
   "Show image {n}": "Показать изображение {n}",
   "Decrease quantity": "Уменьшить количество",
   "Increase quantity": "Увеличить количество",
   "Size": "Объём",
   "Size: {s}": "Объём: {s}",
   "Free shipping over $120": "Бесплатная доставка от $120",
   "30-day returns": "Возврат в течение 30 дней",
   "Cruelty-free · Refillable": "Без тестов на животных · Сменные блоки",
   "Details": "Подробности",
   "Shipping &amp; returns": "Доставка и возврат",
   "Our promise": "Наше обещание",
   "Free standard shipping on orders over $120, otherwise {fee}. Not right for you? Return it within 30 days.": "Бесплатная стандартная доставка при заказе от $120, иначе {fee}. Не подошло? Верните в течение 30 дней.",
   "Cruelty-free, refillable and made in France.": "Без тестов на животных, со сменными блоками, сделано во Франции.",
   "Your wishlist is empty.": "Ваше избранное пусто.",
   "Discover the collection": "Откройте коллекцию",
   "Your bag is empty.": "Ваша корзина пуста.",
   "Continue shopping": "Продолжить покупки",
   "Remove {n}": "Удалить «{n}»",
   "Promo code": "Промокод",
   "Apply": "Применить",
   "Summary": "Сводка",
   "Subtotal": "Промежуточный итог",
   "Code {c}": "Промокод {c}",
   "Shipping": "Доставка",
   "Free": "Бесплатно",
   "Total": "Итого",
   "Checkout": "Оформить заказ",
   "Thank you — welcome to the Maison.": "Спасибо — добро пожаловать в Maison.",
   "Please enter a valid email address.": "Пожалуйста, введите корректный адрес электронной почты.",
   "Please tell us how we can help.": "Расскажите, чем мы можем помочь.",
   "This field is required.": "Обязательное поле.",
   "Please write at least a few words.": "Напишите хотя бы несколько слов.",
   "Thank you, {n} — we have your message and will reply to {e} within one business day.": "Спасибо, {n} — мы получили ваше сообщение и ответим на {e} в течение одного рабочего дня.",
   "Radiance": "Сияние",
   "Hydration": "Увлажнение",
   "Firming": "Упругость",
   "Sensitive skin": "Чувствительная кожа",
   "Renewal": "Обновление",
   "Serums & Oils": "Сыворотки и масла",
   "Moisturizers": "Увлажняющие средства",
   "Cleansers & Mists": "Очищение и мисты",
   "Makeup": "Макияж",
   "Body": "Для тела",
   "Fragrance": "Парфюмерия",
   "Hair": "Уход за волосами",
   "ml": "мл",
   "g": "г"
  },
  "p": {
   "lumiere": {
    "desc": "Ночная сыворотка с бакучиолом и золотыми пептидами",
    "long": "Шелковистая ночная сыворотка с бакучиолом и золотыми пептидами заметно разглаживает текстуру кожи, пока вы спите. Достаточно мягкая для ежедневного использования."
   },
   "velours": {
    "desc": "Крем с керамидами и маслом ши для восстановления барьера",
    "long": "Насыщенный, обволакивающий крем с керамидами и маслом ши холодного отжима восстанавливает защитный барьер кожи, не оставляя ощущения жирности."
   },
   "clarte": {
    "desc": "Мягкое ежедневное очищающее средство с аминокислотами",
    "long": "Нежный аминокислотный гель смывает усталость дня, оставляя кожу мягкой и комфортной."
   },
   "nuit": {
    "desc": "Обновляющая маска с лавандой и PHA",
    "long": "Ночная маска с лавандой и PHA бережно обновляет кожу во сне — для более гладкого сияния утром."
   },
   "rose": {
    "desc": "Масло для сияния с дамасской розой и шиповником",
    "long": "Масло для сияния из дамасской розы и шиповника наносится последним шагом ухода для светящегося, бархатистого финиша."
   },
   "soie": {
    "desc": "Nude Rosé — сатиновый цвет со сменным блоком",
    "long": "Сатиновая помада Nude Rosé со сменным блоком — комфортный кремовый цвет."
   },
   "silk": {
    "desc": "Тональная сыворотка «вторая кожа» с SPF 20",
    "long": "Тональная сыворотка «вторая кожа» с SPF 20 выравнивает тон и дарит естественный сияющий финиш."
   },
   "eclat": {
    "desc": "Бальзам от отёков с кофеином и ромашкой",
    "long": "Бальзам от отёков с кофеином и ромашкой освежает и осветляет кожу вокруг глаз."
   },
   "aube": {
    "desc": "Утренний мист с эвкалиптом и гиалуроном",
    "long": "Тонкий освежающий мист с эвкалиптом и гиалуроновой кислотой увлажняет кожу в течение всего дня."
   },
   "ambre": {
    "desc": "Масло для тела с амброй, нероли и марулой",
    "long": "Шелковистое сухое масло для тела с амброй, нероли и марулой быстро впитывается, оставляя кожу мягкой с тихим золотым сиянием."
   },
   "revitalift": {
    "desc": "Дневной крем-филлер с гиалуроном для упругой кожи",
    "long": "Дневной крем с гиалуроновой кислотой наполняет кожу и заметно разглаживает мелкие морщинки, делая её более гладкой, упругой и увлажнённой."
   },
   "uomo": {
    "desc": "Тёплый пряно-древесный аромат на каждый день",
    "long": "Тёплая пряно-древесная туалетная вода в лаконичном стеклянном флаконе — комфортна с утра до вечера."
   },
   "heart": {
    "desc": "Кремовая сатиновая помада в розовом нюде",
    "long": "Комфортная кремовая помада с сатиновым финишем в универсальном розово-нюдовом оттенке: ложится ровно и оставляет губы мягкими."
   },
   "everlasting": {
    "desc": "Тональная основа с SPF 20 + UVA-защитой",
    "long": "Комфортная стойкая жидкая основа с SPF 20 и защитой от UVA — ровное естественное покрытие."
   },
   "variete": {
    "desc": "Чёрная тушь для полного объёма и ультра-длины",
    "long": "Чёрная тушь с гибкой щёточкой удлиняет ресницы и создаёт полный объём — выразительный взгляд надолго."
   },
   "neutrogena": {
    "desc": "Очищающий гель с 2% салициловой кислоты для проблемной кожи",
    "long": "Безмасляный очищающий гель с 2% салициловой кислоты глубоко очищает поры, сохраняя естественный баланс кожи. Для ежедневного ухода за кожей, склонной к высыпаниям."
   },
   "spacelatte": {
    "desc": "Нежный скраб для лица для интенсивного очищения",
    "long": "Скраб для лица интенсивно очищает, борется с чёрными точками и полирует кожу, не травмируя её."
   },
   "baregrape": {
    "desc": "Глянцевый тинт для губ в нежном виноградно-розовом оттенке",
    "long": "Лёгкий глянцевый тинт для губ в оттенке Bare Grape с удобным аппликатором для точного и ровного нанесения."
   },
   "medipeel": {
    "desc": "Пенка-очиститель с экстрактом проростков пшеницы",
    "long": "Высококонцентрированный очиститель с экстрактом проростков пшеницы удаляет макияж и мелкие загрязнения, мягко отшелушивая кожу для сияния."
   },
   "vivienne": {
    "desc": "Кремовая помада в мягком нюдовом оттенке",
    "long": "Кремовая помада в мягком универсальном нюдовом оттенке — в золотистом корпусе с мятным колпачком."
   },
   "lushsilk": {
    "desc": "Несмываемая кератиновая сыворотка для волос",
    "long": "Несмываемая кератиновая сыворотка с липидо-протеиновым комплексом глубоко восстанавливает волосы, делая их гладкими, блестящими и крепкими."
   },
   "wonderlash": {
    "desc": "Тушь для объёма и длины с двумя щёточками",
    "long": "Тушь 2-в-1 с двумя сменными щёточками — для объёма и для длины, чтобы создать нужный взгляд."
   },
   "brushset": {
    "desc": "Мини-набор кистей для макияжа в мягком бежевом цвете",
    "long": "Компактный набор из семи мягких кистей для пудры, румян, теней и бровей, со щёточкой для финального штриха. Лёгкий — удобно брать в дорогу."
   },
   "browmascara": {
    "desc": "Чёрная тушь с тонкой точной щёточкой",
    "long": "Чёрная тушь с тонкой точной щёточкой разделяет и подчёркивает ресницы и брови для аккуратного натурального образа."
   },
   "kaoyo": {
    "desc": "Лёгкий крем с экстрактом улитки для упругой кожи",
    "long": "Лёгкий кремовый увлажняющий крем с экстрактом улитки увлажняет и смягчает кожу, оставляя её гладкой и комфортной весь день."
   },
   "prettyskin": {
    "desc": "Лёгкий увлажняющий солнцезащитный крем SPF 50+ PA++++",
    "long": "Невесомый солнцезащитный крем с водянистой текстурой SPF 50+ PA++++ увлажняет, защищает от UVA и UVB и не утяжеляет кожу под макияжем."
   },
   "joseon": {
    "desc": "Мягкий ежедневный солнцезащитный крем SPF 50+ PA++++",
    "long": "Мягкий ежедневный санскрин с экстрактом риса и пробиотиками, SPF 50+ PA++++, успокаивает кожу и оставляет нелипкое мягкое покрытие."
   },
   "irisgoat": {
    "desc": "Питательный крем для лица с козьим молоком",
    "long": "Питательный крем для лица с козьим молоком активно питает, увлажняет и смягчает кожу, помогая ей выглядеть моложе и упруже."
   },
   "eyepalette": {
    "desc": "Девять тёплых нюдовых и сияющих теней",
    "long": "Палетка из девяти теней: тёплые нюды, розово-коричневые и сияющие шиммеры — для мягкого повседневного или более глубокого вечернего взгляда."
   }
  }
 }
};
  var KEY = "ivoire_lang", CODES = ["uz", "ru", "en"];
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) { /* storage blocked */ }
  if (CODES.indexOf(stored) < 0) stored = null;
  var lang = stored || "en";
  root.lang = lang;
  if (!stored) root.classList.add("lang-pending");

  var OPTIONS = [
    { code: "uz", name: "O'zbek",  go: "Davom etish" },
    { code: "ru", name: "Русский", go: "Продолжить" },
    { code: "en", name: "English", go: "Continue" }
  ];
  var LABEL = { uz: "Til", ru: "Язык", en: "Language" };
  var GATE_LABEL = "Tilni tanlang · Выберите язык · Choose your language";

  function dict() { return DATA[lang] || null; }
  function fmt(s, v) { if (v) for (var k in v) s = s.split("{" + k + "}").join(v[k]); return s; }
  function t(s, v) { var d = dict(); return fmt(d && d.s[s] != null ? d.s[s] : s, v); }
  function plural(n) {
    if (lang === "uz") return n + " ta mahsulot";
    if (lang === "ru") {
      var a = n % 10, b = n % 100;
      return n + (a === 1 && b !== 11 ? " товар" : (a >= 2 && a <= 4 && (b < 10 || b >= 20)) ? " товара" : " товаров");
    }
    return n + (n === 1 ? " product" : " products");
  }
  function product(id) { var d = dict(); return d && d.p[id] ? d.p[id] : null; }

  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }

  /* translate the static markup */
  function apply() {
    var d = dict();
    if (!d) return;
    each("[data-i18n]", function (el) {
      var k = el.getAttribute("data-i18n");
      if (d.h[k] != null) el.innerHTML = d.h[k];
    });
    ["placeholder", "aria-label", "alt", "title"].forEach(function (a) {
      each("[" + a + "]", function (el) {
        var v = el.getAttribute(a);
        if (d.s[v] != null) el.setAttribute(a, d.s[v]);
      });
    });
    if (d.s[document.title] != null) document.title = d.s[document.title];
    var m = document.querySelector('meta[name="description"]');
    if (m && d.s[m.content] != null) m.content = d.s[m.content];
  }

  function save(code) { try { localStorage.setItem(KEY, code); } catch (e) { /* ignore */ } }

  /* header switcher ------------------------------------------------------- */
  var GLOBE = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.4 3.6 5.3 3.6 8.5s-1.1 6.1-3.6 8.5c-2.5-2.4-3.6-5.3-3.6-8.5S9.5 5.9 12 3.5z"/></svg>';
  function mountSwitcher() {
    var icons = document.querySelector(".nav__icons");
    if (icons) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "lang-btn"; b.setAttribute("data-lang-open", "");
      b.setAttribute("aria-label", LABEL[lang]); b.setAttribute("aria-haspopup", "dialog");
      b.innerHTML = GLOBE + "<span>" + lang.toUpperCase() + "</span>";
      icons.insertBefore(b, icons.firstChild);
    }
    var mob = document.querySelector(".mobile-nav");
    if (mob) {
      var a = document.createElement("a");
      a.href = "#"; a.className = "mobile-nav__lang"; a.setAttribute("data-lang-open", "");
      a.textContent = LABEL[lang] + " · " + lang.toUpperCase();
      mob.appendChild(a);
    }
  }

  /* the language gate ----------------------------------------------------- */
  var gate = null, opener = null;
  var ARROW = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M14 6l6 6-6 6"/></svg>';
  var CHECK = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
  function openGate(from) {
    if (gate) return;
    opener = from || null;
    gate = document.createElement("div");
    gate.className = "langgate";
    gate.setAttribute("role", "dialog");
    gate.setAttribute("aria-modal", "true");
    gate.setAttribute("aria-label", GATE_LABEL);
    gate.innerHTML =
      '<div class="langgate__card">' +
        '<button type="button" class="langgate__close" aria-label="' + (lang === "ru" ? "Закрыть" : lang === "uz" ? "Yopish" : "Close") + '"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>' +
        '<div class="langgate__brand"><span>IVOIRE</span><small>MAISON · PARIS</small></div>' +
        '<h2 class="langgate__title" aria-hidden="true"><span>Tilni <em>tanlang</em></span><span>Выберите <em>язык</em></span><span>Choose your <em>language</em></span></h2>' +
        '<ul class="langgate__list">' + OPTIONS.map(function (o) {
          var cur = stored && o.code === lang;
          return '<li><button type="button" class="langopt' + (cur ? " is-current" : "") + '" data-lang="' + o.code + '" lang="' + o.code + '">' +
            '<span class="langopt__code">' + o.code.toUpperCase() + '</span>' +
            '<span class="langopt__txt"><b>' + o.name + '</b><small>' + o.go + '</small></span>' +
            '<span class="langopt__go">' + (cur ? CHECK : ARROW) + '</span></button></li>';
        }).join("") + '</ul>' +
        '<p class="langgate__foot">UZ · RU · EN</p>' +
      '</div>';
    document.body.appendChild(gate);
    root.classList.add("lang-open");
    var card = gate.querySelector(".langgate__card");
    card.setAttribute("tabindex", "-1");
    setTimeout(function () { card.focus({ preventScroll: true }); }, 60);
    gate.addEventListener("click", function (e) {
      var opt = e.target.closest(".langopt");
      if (opt) return choose(opt.getAttribute("data-lang"));
      if (e.target.closest(".langgate__close") || e.target === gate) closeGate(true);
    });
    gate.addEventListener("keydown", trap);
  }
  function trap(e) {
    if (e.key === "Escape") { e.preventDefault(); return closeGate(true); }
    if (e.key !== "Tab") return;
    var f = Array.prototype.slice.call(gate.querySelectorAll("button"));
    var i = f.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
  }
  function closeGate(dismissed) {
    if (!gate) return;
    if (dismissed && !stored) { stored = lang; save(lang); }   /* closing = keep English */
    var g = gate; gate = null;
    g.classList.add("is-leaving");
    root.classList.remove("lang-open", "lang-pending");
    setTimeout(function () { if (g.parentNode) g.parentNode.removeChild(g); }, 260);
    if (opener && opener.focus) opener.focus();
  }
  function choose(code) {
    if (CODES.indexOf(code) < 0) return;
    save(code);
    if (code === lang) { stored = code; return closeGate(false); }
    gate.classList.add("is-leaving");
    setTimeout(function () { window.location.reload(); }, 230);
  }

  document.addEventListener("click", function (e) {
    var o = e.target.closest("[data-lang-open]");
    if (!o) return;
    e.preventDefault();
    var mn = document.querySelector(".mobile-nav.is-open"); if (mn) mn.classList.remove("is-open");
    openGate(o);
  });

  function boot() {
    apply();
    mountSwitcher();
    if (!stored) openGate(null);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();

  window.I18N = { lang: lang, t: t, plural: plural, product: product, open: function () { openGate(null); } };
})();
