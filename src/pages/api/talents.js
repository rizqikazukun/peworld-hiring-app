// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const db = [
  {
    "user_uid": "8a17713d-8e44-4c8e-9063-535dc15692fa",
    "first_name": "Rizqi",
    "last_name": "Pratama",
    "job_title": "Fullstack Developer",
    "location": "Jakarta, Indonesia.",
    "job_time_preferece": "Full-time",
    "sort_description": "Naruto adalah seorang fullstack developer yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://res.cloudinary.com/owncloudinarycdn/image/upload/v1699695837/y8ycssboowbwuaogprhj.jpg",
    "skills": ["Java Script", "NextJS", "ExpressJS"],
    "social": {
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
    "user_uid": "8a17713d-8e44-4c8e-9063-535dc15692fe",
    "first_name": "Uzumaki",
    "last_name": "Naruto",
    "job_title": "Fullstack Developer",
    "location": "Tokyo, Japan.",
    "job_time_preferece": "Full-time",
    "sort_description": "Naruto adalah seorang fullstack developer yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-10.jpeg",
    "skills": ["Java Script", "NextJS", "ExpressJS"],
    "social": {
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
    "user_uid": "9e87369a-0c86-4ec4-b79c-1e7652222d64",
    "first_name": "Uciha",
    "last_name": "Sasuke",
    "job_title": "UX Researcher",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Freelancer",
    "sort_description": "Sasuke adalah seorang UX Researcher yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-9.jpeg",
    "skills": ["Analytical Thinking"],
    "social": {
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
    "user_uid": "00ed4731-5fae-4eac-b62f-2300c1de4568",
    "first_name": "Haruno",
    "last_name": "Sakura",
    "job_title": "UI Designer",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Freelancer",
    "sort_description": "Sakura adalah seorang UI Designer yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-8.jpeg",
    "skills": ["Figma", "Adobe Ilustrator"],
    "social": {
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
    "user_uid": "2f8bec95-b174-4703-ae47-29b2ee101ceb",
    "first_name": "Hatake",
    "last_name": "Kakashi",
    "job_title": "SCRUM Master",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Fulltime",
    "sort_description": "Kakashi adalah seorang SCRUM Master yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-7.jpeg",
    "skills": ["Leadership", "Project Management", "Communication"],
    "social": {
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
    "user_uid": "19990e21-82b8-493b-8a75-4687b6d35410",
    "first_name": "Jiraya",
    "last_name": "Jiraya",
    "job_title": "Copywriter",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Fulltime",
    "sort_description": "Kakashi adalah seorang Copywriter yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-5.jpeg",
    "skills": ["10 Finger Typing", "374 Word Per Minute Typing", "Wide Knowledge"],
    "social": {
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
    "user_uid": "074d0d58-4924-48ca-adef-4ff79a3ba42e",
    "first_name": "Hyuuga",
    "last_name": "Hinata",
    "job_title": "Frontend Developer",
    "location": "Tokyo, Japan",
    "job_time_preferece": "Part-time",
    "sort_description": "Hinata adalah seorang Frontend Developer yang pernah bekerja di salah satu startup besar yang berada dijepang",
    "photo": "https://akcdn.detik.net.id/community/media/visual/2023/06/04/karakter-naruto-versi-ai-tsunade-tampak-mudah-dan-hinata-kawaii-banget-2.jpeg",
    "skills": ["ReactJS", "Bootstrap", "Tailwind"],
    "social": {
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
