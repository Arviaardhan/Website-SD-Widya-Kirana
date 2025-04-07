import { logoOakbridge } from "../assets/images";

const partnerSchools = [
  {
    title: "Oakbridge International School",
    location: "Malaysia",
    image: logoOakbridge,
  },
  {
    title: "Oakbridge International School Phnom Penh",
    location: "Cambodia",
    image: logoOakbridge,
  },
  {
    title: "Oakbridge International School Plus Tarjun",
    location: "Indonesia",
    image: logoOakbridge,
  },
  {
    title: "Iseed Integrated School",
    location: "Kelapa Gading, Jakarta Utara",
    image: "data:image/jpeg;base64,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",
  },
  {
    title: "Mawar Sharon Christian School",
    location: "Kelapa Gading, Jakarta Utara",
    image: "https://ecc.co.id/public/member/460755/1548734595Logo%20MSCS-ss.jpg",
  },
  {
    title: "Kingdom School Pekalongan",
    location: "Indonesia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1u5FZuHqqO6jQdSnKn3Ocra4GpNrpRvsYkA&s",
  },
  {
    title: "Chosen Generation Christian Academy",
    location: "Banjarmasin",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxb2x_D3veXKfnFDbT4qUrIdkyNTHKsbIwA&s",
  },
];

const partnerUniversity = [
  {
    title: "Beijing Foreign University",
    location: "China",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/%E5%8C%97%E4%BA%AC%E5%A4%96%E5%9B%BD%E8%AF%AD%E5%A4%A7%E5%AD%A6.jpeg",
  },
  {
    title: "Trinity College Dublin",
    location: "Irlandia",
    image: "https://pbs.twimg.com/profile_images/1641458996052922370/ou3Owz62_400x400.jpg",
  },
  {
    title: "University College Dublin",
    location: "Irlandia",
    image: "https://images.squarespace-cdn.com/content/v1/623126b50d2dfb281caaafd3/1651197166990-SVMW700D33L0VW26E70J/University-College-Dublin-logo.jpg",
  },
  {
    title: "University College Cork",
    location: "Irlandia",
    image: "https://greenmetric.ui.ac.id/wp-content/uploads/2022/01/logo_ucc-scaled.jpg",
  },
  {
    title: "National University of Ireland",
    location: "Galway, Irlandia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbyfbtSJzq5tG6pE6ttOR-RqHc3AN-0Fg6Q&s",
  },
  {
    title: "Maynooth University",
    location: "Irlandia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-CpVYQ62EY2JvF11gLrapYYq8gig0GfJ5iQ&s",
  },
  {
    title: "University of Limerick",
    location: "Irlandia",
    image: "https://iisma.kemdikbud.go.id/info/wp-content/uploads/2024/01/Limerick-300x300.png",
  },
  {
    title: "Dublin City University",
    location: "Irlandia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfhHNwsDutryE5MzZ9nUjnVGjJaIjjNgH0ZQ&s",
  },
  {
    title: "Inti University",
    location: "Malaysia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMfBsFolbPqK8wDtnOg9LKR5WEQLBWSKi38Q&s",
  },
  {
    title: "Taylor University",
    location: "Malaysia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhBmwsDKC2FqqPtOKYOb_4kU16IVzMcW5dA&s",
  },
  {
    title: "Berjaya University",
    location: "Malaysia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dwMXjP-piNyd1kQvIR00I0O_WVxH75QTTQ&s",
  },
  {
    title: "Sunway University",
    location: "Malaysia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYYbbJio32t671uLPAYpzniNQngshcI1wvgQ&s",
  },
];

export { partnerSchools, partnerUniversity };
