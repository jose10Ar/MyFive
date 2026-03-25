// src/lib/data.ts

export type User = {
  id: string;
  name: string;
  avatar: string;
  followers: number;
  following: number;
  bio: string;
};

export type Recommendation = {
  id: string;
  movieId: string;
  title: string;
  poster: string;
  genres: string[];
  type: "Movie" | "Series" | "Album" | "Artist";
  ratingPochoclos: number;
  ratingGlobal: number;
  review: string;
  user: User;
  createdAt: string;
  likes: number;
  comments: number;
};

// Users
export const currentUser: User = {
  id: "u1",
  name: "Elena Vance",
  avatar:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD3kmk7ZFHn9b7YHgKu39Njsy3a6-9J37Ypo5_Kl3uQuE7UpMLXx_GM0WR6oTlOZCNwO173KXV0EsAMY79L6xZRc9sqP93YOT2lmgwPc6wacR1f1hChZ9tIUAIxixk3_TMoZutYdgAYK_ZFiQm2F_JImfofo5_oFX8RWZNPaH63oaFGIIBFsVza4__TLKA2yB8GbrC6CfE4NqWDn58CDdhcj9FONXWiqJ157QWQkS2k-HkfQWYIblBjGYVTndX7SkQRCbdatAJ2TQ",
  followers: 2400,
  following: 842,
  bio: "Curando los sonidos y escenas de una vida vivida en pantalla ancha. Archivando los imprescindibles.",
};

export const friends = [
  {
    id: "f1",
    name: "Sarah Jenkins",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdR_VILuIzSJv8NLBfcRfrYdRZT6xxUrNgt2EHHLCdmwhySjaqRIzuhVe7hf9b2v5C7zisiX1dfzM_w3lBqUvEb01c2n-5lKxV6at9Ro_YyP39kDoqay9GEf7lMeGBeNcPw4PlqxX0OrQzLku4C3X7klRoS5NoomEwpQL8kdeRu6GQ46dMOm8Pha4blGkIAeex40710piwmNWJpOw1sR5KoMYfECcpQo9f5BGAv8nMMkfUaoC9DxuPlMDz8zss7uTW4ksRXDVW9w",
  },
  {
    id: "f2",
    name: "David Chen",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtaf2g5J86A7MTTshC8Fe2oJWpiGJn6iefQmRkF9QFU5vlqHaXXqtdcSti9nfRldi4pSzvASh1NcJ3L8-ZYZbGdBYrJ6z5XjvAfPqNJCbFXkUY6-yOpS3sOB91zB3e5Do6cUAdzF2rpCLDoDxGqx8IS9Xx3milwLTM0-_3jopf9mNcsw6TcviX2w3aieC2Mn6Tqz_EBR_MHtxfbmUKT_6XGRepX9NhLDvsamJbvbl1WEfq_PNLpToMOPT26fIcxPEQhtcxBf7ZaA",
  },
];

// Content
export const mis4 = [
  {
    id: "m4-1",
    title: "Interstellar",
    type: "Cine",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCM85IABDQsG4T4YPBQqZilMy6Om3wvW8r9Z4Fy2DeTGusyUYOhK0o7_jHmi2J1Xst0b7LyRTEHfi5ALGoz8-Fv4mZcxMnu1v_VQB0UiWG4u2DdF60Uv1KNH2_vH2L7GaeJjGnfaNeXX9e51nLmWDgZNJDVeaT90BVubMl3FuD-cmUVZ8PeeiKDruoKKJ8obHZcyn9W3j6dzoggqgBAdPMOlVEU309ldRxQb5qturtMxEtpA6my1gQdNWYab1hgKlwpxZGkcaEuPg",
    style: "bg-tertiary-container",
  },
  {
    id: "m4-2",
    title: "Succession",
    type: "Serie",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1nDBDFhK7marPvoJxvv657TxprvteOrRnRvyI-zxcxU0YwNlNpCehyQDclHjjhmCPIlGpmmY6G_fKG2OPVGeFN0opE52B2WGBFgnu7gJzA0CbA2ob5uvur9uz544RybJFryrsADUdTvZwSfODX8VFlaVKMjs8vyEIBFzt26A9Pi8rftrAIZDIRxPOzPWdC2Y85imNEKC_YkL-9DHSyjApqU7rWVyvAkaCosHczdn8aasb3XUnZM6t2lekYl4ImuKSQUHxyWRBVw",
    style: "bg-primary-container",
  },
  {
    id: "m4-3",
    title: "Radiohead",
    type: "Artista",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBU91uMeOupa1L5mLQdDs5vjsd5rkd9BQuVf4en5MLPrMt9sZGToPZfKoxnYoZoau4c0InhHCGGRZhlN7sKGZNmZMdKt_R9bIBcvMa_1NMRe9_xx4hfmev5rZfSNama2Jiuo-4JcDs4pNPMpKy9fElSwgiXckZ_CdHwWotNKGJ4VYj9ZoGDw-m9twJKc4DU5sNGHu9qtpehdvcOZVx8mgVv6KLrZSkcn3nJt5N9_T_oCqh_Q0X-HKPxFImOxzh6RslgGHj4BzMxxg",
    style: "bg-surface-container-highest",
  },
  {
    id: "m4-4",
    title: "Parasite",
    type: "Cine",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCIZsHRmFG48dfsm_oELA7PpEAQFAb1OGYMvXLtW7w98DsCTVfi_u-aTe-Fnj1LSqPqbefAgMMl0XMfLgjgxy6UgZ7yctND3AAQjMQ9it6LjxyqrMnCrTMOjmDNC5onG39rzMIqQ-U9Sf_smwAIsnLHi60eebNFbnRxiUCN-Ww0J0GJjeKzz8X8B4O-2YtZfXj6CEq6zkexwh_2Cj3BtrB5w3F8Pw-xJ0dPShUbY7m7feQoGKTUPjodxDw-I7FRZHTrfkkKBwzovw",
    style: "bg-secondary-container",
  },
];

export const feedRecommendations: any[] = [
  {
    id: "rec1",
    movieId: "m1",
    title: "Neon Genesis: Rebirth",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCBbhExzd8DlHP0DPrBaf3HzNzWxKJ6PzLqHGQ-SfBfy7ipbtkewZK38OHDUVe8PkLQipB07zGdHCfoMxQVhiePpy0iq0EQMHf2T7568yBu266NeDgI6Ie_avdOzWjjPZLSwwsErHyAqKP6xYI95-5NEPlOiBi8Zyw3lHQMfALyMTAO0qs7OWq1GFqq2E6qiciXW3NhKtO0CjDKttW0xl799wq2Ethkv9hSl82auJI1iW2etRN1BOL8Q60tMiP29iqF5vqo_TSRw",
    genres: ["Tendencia"],
    ratingPochoclos: 4.5,
    user: friends[0],
    review:
      "La dirección de fotografía en el tercer acto te deja sin aliento. Una locura visual que te exige verla en pantalla grande sí o sí.",
    likes: 2400,
    comments: 128,
  },
  {
    id: "rec2",
    movieId: "m2",
    title: "The Silent Symphony",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCr4LXeiXaERn79xHPZdGnHg7aUSLcugxqK7KaRdTs5J0VoPn07neJoxuBRlCifqiPmlA1IaOu7GnoqWire4OtkPAaLiUNTA1h3Hm2krdnStWNjAmNV86NdJvQfYKeeZnP6elHyMCvuZHhqefWn_VIB55q7AvXDxevGT_yQlBzCdrUNZ0fRBNgs4dsevKNHCCeyVemtapd8odK8DtNm08ifzi5AB6cqRuKXTUi_L9Gb5TnKCAad8U6JgGaOeqDcysy64VOjiPEuRg",
    genres: ["Clásico", "Drama"],
    ratingPochoclos: 5,
    user: friends[1],
    review:
      "Rara vez encuentro una película moderna que logre capturar el alma del cine de los años 20 tan perfectamente... Tremenda obra.",
    likes: 12,
    comments: 4,
  },
  {
    id: "rec3",
    movieId: "m3",
    title: "Shadow of the Colossus",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB6Xo_5xmrGvO43MD0dz9f_GeHN9Q2zMF4ziYVIMkujD8O8-Ya7ZW7ytBxqA6lMOQYdf9l30wMjJHhfcL9_718OThv68FB2sH7XS-LxV6e9GGfKLA39gukae-TTiX_dP0dN2uns452N3BGed-YBJ7436Vw9BYUImacNNySvmnH6EwVavs-HTu4CSUBxS_RRJoVcq_EbQWfDTwrr9UlGabl-V6jmfrNr5N--nZ_aGlUQp0JL3EcfY0v9e-jLy1KZoKvEj_kna-vXMQ",
    genres: ["Estreno"],
    ratingPochoclos: 3.8,
    user: friends[1], // David Chen
    review:
      "Los efectos visuales son un 10/10, pero el ritmo se me hizo medio denso en el segundo acto. Igual vale la pena verla, aunque sea por la banda sonora.",
    likes: 540,
    comments: 20,
  },
];

export const userCurations = [
  {
    id: "cur1",
    title: "Blade Runner 2049",
    type: "Pelicula",
    genres: ["Ciencia Ficción", "Noir"],
    ratingGlobal: 9.2,
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHNXEIJhnaNRkDzbamtLw_jyChwl5fj2lUeOY4h0C65n8QubTPUJKlyhi-BPWlVc2v4qf-pd_CeCll5I9E79zfCTvb0yBb-2oYjfQiOp7S2pkzQSClL-h7s1yilRlqwO1jIWB-Y1QY9yzBMUI7EpfQ5HMnTnNflGRE9IQN-w4TO6_IN3HipsgpJXaT4o4nouPQveW0_iNJUNjbg3UyccSnx-ySDQqP_IvLqZXUeuYquRQYS40XnSB8tNnAWqRdoHyVxVAf-tneFg",
    review:
      "Una obra maestra visual que respeta a la original mientras teje su propio camino y te deja manija.",
    timeAgo: "hace 2 días",
  },
  {
    id: "cur2",
    title: "In Colour - Jamie xx",
    type: "Album",
    genres: ["Electrónica", "Soul"],
    ratingGlobal: 9.5,
    subtitle: "Ideal para manejar de noche",
    poster:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6V1RMy1zM6Q51rwZ57ycBDmts4pzy2k-eSo96AsXD-0oRVwkfqW9juh7AqDWvDh2hzz5H5D5SHbR_9XD5lSD56NgGZFNIYWTV2w8xwbMH0HkdUkWqMw0PbOauIdLqdcyvZT88Uo7XXIvE4w-3YSY1yVKfuQB20LQ9CS-DwpS_NWFj_HBRockuhPnH3tEaLwtw0k_z92l43GGSI28nTJBAt0-qmUkvfdzju4383vR4CdfIJPvvr66BHYGH5g4NBRza7csntuoDHw",
    review:
      "La forma en que este disco logra capturar la nostalgia de una pista de baile vacía no tiene nombre.",
    timeAgo: "hace 1 semana",
  },
];
