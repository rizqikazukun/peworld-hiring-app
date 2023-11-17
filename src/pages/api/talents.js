// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const db = [
  {
    "id": 54,
    "user_uid": "ec792080-2304-4215-bad7-7207a1b9ebbb",
    "fullname": "Rizqi Pratama",
    "job": "Fullstack Developer",
    "location": "Jakarta, Indonesia.",
    "job_time_preferece": "Full-time",
    "desc": "Rizqi adalah seorang fullstack developer dari bootacamp fullstack and mobile batch 15 Pijarcamp ",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1699695837/y8ycssboowbwuaogprhj.jpg",
    "skills": [
      "Javascript",
      "ExpressJS",
      "ReactJS",
      "NextJS"
    ],
    "socmed": {
      "email": "rizqipratama@example.com",
      "github": "rizqikazukun"
    }
  },
  {
    "id": 52,
    "user_uid": "d0afa5a9-96d0-4ac6-b966-5f20ea289c7c",
    "fullname": "Gracia Maydina",
    "job": "Creative Director",
    "location": "Surakarta, Indonesia",
    "job_time_preferece": "Full-time",
    "desc": "Gracia Maydina adalah seorang Creative Director Developer yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154919/ktzb5aixv5imk6qhwczv.jpg",
    "skills": [
      "Trend Analysis",
      "Figma",
      "Adobe Ilustrator"
    ],
    "socmed": {
      "email": "gracia@example.com",
      "instagram": "Gracia",
      "github": "Gracia",
      "gitlab": "Gracia"
    }
  },
  {
    "id": 51,
    "user_uid": "c8ab327a-4133-4d2e-8597-9c3502832197",
    "fullname": "Abdul Mohamed",
    "job": "Mobile Developer",
    "location": "Ankara, Turkiye",
    "job_time_preferece": "Full-time",
    "desc": "Abdul Mohamed adalah seorang Mobile Developer yang pernah bekerja di salah satu startup besar yang berada di Turki",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154927/drtbzmzch4cu6uaqa6cu.jpg",
    "skills": [
      "Kotlin",
      "Java",
      "Android Studio"
    ],
    "socmed": {
      "email": "abdulmohamedle.com",
      "instagram": "abdul",
      "github": "abdul",
      "gitlab": "abdul"
    }
  },
  {
    "id": 89,
    "user_uid": "82d26c86-4881-4d8c-9710-e1a3de25f12b",
    "fullname": "Ayu dyah puspita sari",
    "job": "Graphic Design",
    "location": "Bandung, Indonesia",
    "job_time_preferece": "Part-time",
    "desc": "Ayu adalah seorang Graphic Designer yang pernah bekerja di salah satu startup besar yang berada di bandung",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154919/ch4jwnqb52zai5v0ptbz.jpg",
    "skills": [
      "Adobe Illustrator",
      "Corel Draw"
    ],
    "socmed": {
      "email": "ayu@example.com",
      "instagram": "ayu",
      "github": "ayu",
      "gitlab": "ayu"
    }
  },
  {
    "id": 85,
    "user_uid": "0989dcca-d1ec-488c-881f-963018de1a27",
    "fullname": "Christ Martin",
    "job": "Site Reliability Engineer",
    "location": "New York, USA",
    "job_time_preferece": "Full-time",
    "desc": "Christ Martin adalah seorang SRE yang pernah bekerja di salah satu startup besar yang berada di New York",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154920/blaps0m0dfjlge8pdkzn.jpg",
    "skills": [
      "Linux",
      "Jenkins",
      "Docker",
      "CI/CD"
    ],
    "socmed": {
      "email": "christmartin@example.com",
      "instagram": "christmartin",
      "github": "christmartin",
      "gitlab": "christmartin"
    }
  },
  {
    "id": 29,
    "user_uid": "27a49709-b3c5-4246-9225-00ebd440e8b3",
    "fullname": "Katherine Kathleen Malone",
    "job": "Project Manager",
    "location": "Washington, D.C., USA",
    "job_time_preferece": "Full-time",
    "desc": "Kathrine adalah seorang PM yang pernah bekerja di salah satu startup besar yang berada di Washington, D.C., USA",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154922/rjeajlovd82ifik6altz.jpg",
    "skills": [
      "Leadership",
      "Project Management",
      "Communication"
    ],
    "socmed": {
      "email": "Katherine@example.com",
      "instagram": "Katherine",
      "github": "Katherine",
      "gitlab": "Katherine"
    }
  },
  {
    "id": 72,
    "user_uid": "90a4463e-6e33-4526-ac4b-0580a8026abf",
    "fullname": "Jiraya",
    "job": "Copywriter",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Full-time",
    "desc": "Kakashi adalah seorang Copywriter yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-5.jpeg",
    "skills": [
      "10 Finger Typing",
      "374 Word Per Minute Typing",
      "Wide Knowledge"
    ],
    "socmed": {
      "email": "jiraya@example.com",
      "instagram": "jiraya",
      "github": "jiraya",
      "gitlab": "jiraya"
    }
  },
  {
    "id": 44,
    "user_uid": "269c8208-3b17-4ddd-8eba-73f79a19ae7d",
    "fullname": "Kirana Putri",
    "job": "Videographer",
    "location": "Bali, Indonesia.",
    "job_time_preferece": "Full-time",
    "desc": "Kirana adalah seorang Videographer yang pernah bekerja di salah satu startup besar yang berada di Bali",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154929/xykdh9snwk7xmlxjtxfb.jpg",
    "skills": [
      "Adobe Premiere",
      "Adobe After Effect"
    ],
    "socmed": {
      "email": "Kirana@example.com",
      "instagram": "Kirana",
      "github": "Kirana",
      "gitlab": "Kirana"
    }
  },
  {
    "id": 43,
    "user_uid": "8f533ff8-d5bb-4bcc-bb71-8c74001dc173",
    "fullname": "Uzumaki Naruto",
    "job": "Fullstack Developer",
    "location": "Tokyo, Japan.",
    "job_time_preferece": "Full-time",
    "desc": "Naruto adalah seorang fullstack developer yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-10.jpeg",
    "skills": [
      "Java Script",
      "NextJS",
      "ExpressJS"
    ],
    "socmed": {
      "email": "uzumakinaruto@example.com",
      "instagram": "uzumaki_naruto",
      "github": "uzumaki_naruto",
      "gitlab": "uzumaki_naruto"
    }
  },
  {
    "id": 88,
    "user_uid": "38ff1de0-2d6c-40d4-b5fd-d60e39a56395",
    "fullname": "Lina chandra putri",
    "job": "Frontend Developer",
    "location": "Jakarta, Indonesia",
    "job_time_preferece": "Full-time",
    "desc": "Lina adalah seorang Frontend Developer yang pernah bekerja di salah satu startup besar yang berada di Indonesia",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154919/hohoeyruppc2udijy2ai.jpg",
    "skills": [
      "ReactJS",
      "Bootstrap",
      "Tailwind"
    ],
    "socmed": {
      "email": "Lina@example.com",
      "instagram": "Lina",
      "github": "Lina",
      "gitlab": "Lina"
    }
  },
  {
    "id": 77,
    "user_uid": "dbd67407-2654-4754-82b0-925f908056a4",
    "fullname": "Ethan Chuang",
    "job": "Backend Developwe",
    "location": "Singapore",
    "job_time_preferece": "Full-time",
    "desc": "Ethan adalah seorang backend developer yang pernah bekerja di salah satu startup besar yang berada di Singapura",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154921/dawe4kjlrbwcapygqok3.jpg",
    "skills": [
      "NodeJS",
      "ExpressJS"
    ],
    "socmed": {
      "email": "Ethan@example.com",
      "instagram": "Ethan",
      "github": "Ethan",
      "gitlab": "Ethan"
    }
  },
  {
    "id": 24,
    "user_uid": "b16b11c0-ab96-4940-811d-ecc53379a3be",
    "fullname": "Nadiya Altafifiq",
    "job": "System Analyst",
    "location": "Ankara, Turkiye",
    "job_time_preferece": "Full-time",
    "desc": "Nadiya adalah seorang System Analyst yang pernah bekerja di salah satu startup besar yang berada di Turki",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154919/h7xbh17qbpbyzrielelj.jpg",
    "skills": [
      "Python",
      "Data Visualization"
    ],
    "socmed": {
      "email": "Nadiya@example.com",
      "instagram": "Nadiya",
      "github": "Nadiya",
      "gitlab": "Nadiya"
    }
  },
  {
    "id": 60,
    "user_uid": "b222b1b6-03bd-44c4-b23d-f6731bdca214",
    "fullname": "Odero Soyinka",
    "job": "Test engineer",
    "location": "Cape Town, South Africa",
    "job_time_preferece": "Full-time",
    "desc": "Oredo adalah seorang Software Tester yang pernah bekerja di salah satu startup besar yang berada di Cape Town Afrika Selatan",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154924/vhugt4hgzqfyxal62ba9.jpg",
    "skills": [
      "Javascript",
      "Python"
    ],
    "socmed": {
      "email": "Odero@example.com",
      "instagram": "Odero",
      "github": "Odero",
      "gitlab": "Odero"
    }
  },
  {
    "id": 47,
    "user_uid": "b8f84798-c070-4ea7-84c0-330662dfe0da",
    "fullname": "Qamaliyah Aberifi",
    "job": "Database administrator",
    "location": "Abu Dhabi, UAE",
    "job_time_preferece": "Full-time",
    "desc": "Qamaliyah adalah seorang DBA yang pernah bekerja di salah satu startup besar yang berada di Abu dhabi, UAE",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154919/jxkxpe5vcqybc71vvww8.jpg",
    "skills": [
      "Mysql",
      "PostgreSQL"
    ],
    "socmed": {
      "email": "Qamaliyah@example.com",
      "instagram": "Qamaliyah",
      "github": "Qamaliyah",
      "gitlab": "Qamaliyah"
    }
  },
  {
    "id": 79,
    "user_uid": "0970dc84-b734-4363-9405-b47189147190",
    "fullname": "Saki Harada",
    "job": "Data scientist",
    "location": "Aichi, Japan",
    "job_time_preferece": "Full-time",
    "desc": "Saki adalah seorang Data Scientist yang pernah bekerja di salah satu startup besar yang berada di Aichi, Jepang",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154921/otjk2wvv7o51mp1k1wui.jpg",
    "skills": [
      "Mysql",
      "PostgreSQL",
      "Python"
    ],
    "socmed": {
      "email": "Saki@example.com",
      "instagram": "Saki",
      "github": "Saki",
      "gitlab": "Saki"
    }
  },
  {
    "id": 58,
    "user_uid": "bc00fd3c-be4b-405e-8f1a-ae5304caa72a",
    "fullname": "Uciha Sasuke",
    "job": "UX Researcher",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Freelancer",
    "desc": "Sasuke adalah seorang UX Researcher yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-9.jpeg",
    "skills": [
      "Analytical Thinking"
    ],
    "socmed": {
      "email": "ucihasasuke@example.com",
      "instagram": "uciha_saskuke",
      "github": "uciha_saskuke",
      "gitlab": "uciha_saskuke"
    }
  },
  {
    "id": 42,
    "user_uid": "40e95354-ad3f-4819-ae5d-01f2a370628f",
    "fullname": "Satrya Wahyu Syahputra",
    "job": "Project manager",
    "location": "Jakarta, Indonesia",
    "job_time_preferece": "Full-time",
    "desc": "Satrya adalah seorang PM yang pernah bekerja di salah satu startup besar yang berada di Indonesia",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154922/getbho0apozfxswahep0.jpg",
    "skills": [
      "Leadership",
      "Project Management",
      "Communication"
    ],
    "socmed": {
      "email": "Satrya@example.com",
      "instagram": "Satrya",
      "github": "Satrya",
      "gitlab": "Satrya"
    }
  },
  {
    "id": 19,
    "user_uid": "86a01112-d17e-4f80-8a93-7bd3a93f5add",
    "fullname": "Seok Joon-Soo",
    "job": "Frontend Developer",
    "location": "Seoul, South Korea",
    "job_time_preferece": "Full-time",
    "desc": "Joon Soo adalah seorang FE Developer yang pernah bekerja di salah satu startup besar yang berada di Seoul, Korea Selatan",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154925/gm1grwhzo4k1yi4jxvls.jpg",
    "skills": [
      "ReactJS",
      "Bootstrap",
      "Tailwind"
    ],
    "socmed": {
      "email": "Seok@example.com",
      "instagram": "Seok",
      "github": "Seok",
      "gitlab": "Seok"
    }
  },
  {
    "id": 69,
    "user_uid": "82b752a9-bb04-4883-aef5-3434ab964f2f",
    "fullname": "Tony Jhonson",
    "job": "Network Operations Center",
    "location": "Oregon, USA",
    "job_time_preferece": "Full-time",
    "desc": "Tony adalah seorang NOC yang pernah bekerja di salah satu startup besar yang berada di Oregon, USA",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154924/y6kr3reimschpknswlar.jpg",
    "skills": [
      "Network",
      "Switching",
      "Routing"
    ],
    "socmed": {
      "email": "Tony@example.com",
      "instagram": "Tony",
      "github": "Tony",
      "gitlab": "Tony"
    }
  },
  {
    "id": 5,
    "user_uid": "956a0ed4-8eee-4a95-8394-804d350c3333",
    "fullname": "Hatake Kakashi",
    "job": "SCRUM Master",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Full-time",
    "desc": "Kakashi adalah seorang SCRUM Master yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-7.jpeg",
    "skills": [
      "Leadership",
      "Project Management",
      "Communication"
    ],
    "socmed": {
      "email": "hatakekakashi@example.com",
      "instagram": "hatake_kakashi",
      "github": "hatake_kakashi",
      "gitlab": "hatake_kakashi"
    }
  },
  {
    "id": 27,
    "user_uid": "4b012969-2bb5-43f8-8214-0d784611d491",
    "fullname": "Xianliang Shu",
    "job": "Project manager",
    "location": "Shanghai, China",
    "job_time_preferece": "Full-time",
    "desc": "Xianliang adalah seorang PM yang pernah bekerja di salah satu startup besar yang berada di Beijing, China",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154919/lsjvycw6nldzzs4pftnw.jpg",
    "skills": [
      "Leadership",
      "Project Management",
      "Communication"
    ],
    "socmed": {
      "email": "Xianliang@example.com",
      "instagram": "Xianliang",
      "github": "Xianliang",
      "gitlab": "Xianliang"
    }
  },
  {
    "id": 93,
    "user_uid": "e54c444b-b0f8-49ae-85dc-20aef9026060",
    "fullname": "Yamanaka Satsuki",
    "job": "Frontend Developer",
    "location": "Chiba, Japan",
    "job_time_preferece": "Full-time",
    "desc": "Satsuki adalah seorang FE Developer yang pernah bekerja di salah satu startup besar yang berada di Chiba, Jepang",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154929/bvwp4xzsbkg7ngvjwmrn.jpg",
    "skills": [
      "ReactJS",
      "Bootstrap",
      "Tailwind"
    ],
    "socmed": {
      "email": "Yamanaka@example.com",
      "instagram": "Yamanaka",
      "github": "Yamanaka",
      "gitlab": "Yamanaka"
    }
  },
  {
    "id": 26,
    "user_uid": "5aff779d-a91e-4e6c-8c84-82e609275817",
    "fullname": "Yanmei Liào",
    "job": "IOS Developer",
    "location": "Beijing, China",
    "job_time_preferece": "Full-time",
    "desc": "Liào adalah seorang IOS Developer yang pernah bekerja di salah satu startup besar yang berada di Beijing, China",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1700154925/dvfvkecskwona4taji8v.jpg",
    "skills": [
      "C#",
      "Swift"
    ],
    "socmed": {
      "email": "Yanmei@example.com",
      "instagram": "Yanmei",
      "github": "Yanmei",
      "gitlab": "Yanmei"
    }
  },
  {
    "id": 63,
    "user_uid": "49ccfb1d-1064-4534-9aa5-341200f5f729",
    "fullname": "Haruno Sakura",
    "job": "UI Designer",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Freelancer",
    "desc": "Sakura adalah seorang UI Designer yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-8.jpeg",
    "skills": [
      "Figma",
      "Adobe Ilustrator"
    ],
    "socmed": {
      "email": "harunosakura@example.com",
      "instagram": "haruno_sakura",
      "github": "haruno_sakura",
      "gitlab": "haruno_sakura"
    }
  }
]


export default function handler(req, res) {
  try {
    const { uid } = req.query

    let data

    if (uid !== undefined) {
      const searchData = db.find(item => item.user_uid === uid)
      if (searchData === undefined) {
        throw { status: 404, message: 'Talent not found' }
      } else {
        data = searchData
      }
    } else {
      data = db
    }
    res.status(200).json({ data })
  } catch (err) {
    if (err.status === 404) {
      res.status(404).json(err)
    } else {
      res.status(500).json({ error: 'failed to load data' })
    }
  }
}
