// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const db = [
  {
    "id": 1,
    "user_uid": "8a17713d-8e44-4c8e-9063-535dc15692fa",
    "fullname": "Rizqi Pratama",
    "job": "Fullstack Developer",
    "location": "Jakarta, Indonesia.",
    "job_time_preferece": "Full-time",
    "desc": "Rizqi adalah seorang fullstack developer dari bootacamp fullstack and mobile batch 15 Pijarcamp ",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1699695837/y8ycssboowbwuaogprhj.jpg",
    "skills": ["Javascript", "ExpressJS", "ReactJS", "NextJS"],
    "socmed": {
      "email": "rizqipratama@example.com",
      "github": "rizqikazukun",
    },
    "experiences": [{
      "Job Title": "",
      "Company": "",
      "start": "",
      "end": "",
      "job_decription": ""
    }],
  },
  {
    "id": 2,
    "user_uid": "8a17713d-8e44-4c8e-9063-535dc15692fe",
    "fullname": "Uzumaki Naruto",
    "job": "Fullstack Developer",
    "location": "Tokyo, Japan.",
    "job_time_preferece": "Full-time",
    "desc": "Naruto adalah seorang fullstack developer yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-10.jpeg",
    "skills": ["Java Script", "NextJS", "ExpressJS"],
    "socmed": {
      "email": "uzumakinaruto@example.com",
      "instagram": "uzumaki_naruto",
      "github": "uzumaki_naruto",
      "gitlab": "uzumaki_naruto"
    },
    "experiences": [{
      "Job Title": "",
      "Company": "",
      "start": "",
      "end": "",
      "job_decription": ""
    }],
  },
  {
    "id": 3,
    "user_uid": "9e87369a-0c86-4ec4-b79c-1e7652222d64",
    "fullname": "Uciha Sasuke",
    "job": "UX Researcher",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Freelancer",
    "desc": "Sasuke adalah seorang UX Researcher yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-9.jpeg",
    "skills": ["Analytical Thinking"],
    "socmed": {
      "email": "ucihasasuke@example.com",
      "instagram": "uciha_saskuke",
      "github": "uciha_saskuke",
      "gitlab": "uciha_saskuke"
    },
    "experiences": [{
      "Job Title": "",
      "Company": "",
      "start": "",
      "end": "",
      "job_decription": ""
    }],
  },
  {
    "id": 4,
    "user_uid": "00ed4731-5fae-4eac-b62f-2300c1de4568",
    "fullname": "Haruno Sakura",
    "job": "UI Designer",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Freelancer",
    "desc": "Sakura adalah seorang UI Designer yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-8.jpeg",
    "skills": ["Figma", "Adobe Ilustrator"],
    "socmed": {
      "email": "harunosakura@example.com",
      "instagram": "haruno_sakura",
      "github": "haruno_sakura",
      "gitlab": "haruno_sakura"
    },
    "experiences": [{
      "Job Title": "",
      "Company": "",
      "start": "",
      "end": "",
      "job_decription": ""
    }],
  },
  {
    "id": 5,
    "user_uid": "2f8bec95-b174-4703-ae47-29b2ee101ceb",
    "fullname": "Hatake Kakashi",
    "job": "SCRUM Master",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Full-time",
    "desc": "Kakashi adalah seorang SCRUM Master yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-7.jpeg",
    "skills": ["Leadership", "Project Management", "Communication"],
    "socmed": {
      "email": "hatakekakashi@example.com",
      "instagram": "hatake_kakashi",
      "github": "hatake_kakashi",
      "gitlab": "hatake_kakashi"
    },
    "experiences": [{
      "Job Title": "",
      "Company": "",
      "start": "",
      "end": "",
      "job_decription": ""
    }],
  },
  {
    "id": 6,
    "user_uid": "19990e21-82b8-493b-8a75-4687b6d35410",
    "fullname": "Jiraya",
    "job": "Copywriter",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Full-time",
    "desc": "Kakashi adalah seorang Copywriter yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-5.jpeg",
    "skills": ["10 Finger Typing", "374 Word Per Minute Typing", "Wide Knowledge"],
    "socmed": {
      "email": "jiraya@example.com",
      "instagram": "jiraya",
      "github": "jiraya",
      "gitlab": "jiraya"
    },
    "experiences": [{
      "Job Title": "",
      "Company": "",
      "start": "",
      "end": "",
      "job_decription": ""
    }],
  },
  {
    "id": 7,
    "user_uid": "074d0d58-4924-48ca-adef-4ff79a3ba42e",
    "fullname": "Hyuuga Hinata",
    "job": "Frontend Developer",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Part-time",
    "desc": "Hinata adalah seorang Frontend Developer yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1699765668/utg8bgkttdsvuv1lid33.jpg",
    "skills": ["ReactJS", "Bootstrap", "Tailwind"],
    "socmed": {
      "email": "hyuugahinata@example.com",
      "instagram": "hyuuga_hinata",
      "github": "hyuuga_hinata",
      "gitlab": "hyuuga_hinata"
    },
    "experiences": [{
      "Job Title": "",
      "Company": "",
      "start": "",
      "end": "",
      "job_decription": ""
    }],
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
