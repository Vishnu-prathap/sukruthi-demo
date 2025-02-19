import { useEffect, useState } from "react";

import constants from "../../../constants.json";
const Founders = (props) => {
  const [founder, setFounder] = useState([]);

  const [advisors, setAdvisors] = useState([]);
  const [management, setManagement] = useState([]);
  // useEffect(() => {
  //   getFounders();
  //   getAdvisor();
  //   getManagementTeam();
  // }, []);
  // const getFounders = () => {
  //   fetch(constants.baseUrl + "/getfounders", {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if ((data.status = 201)) {
  //         setFounder(data.data);
  //       } else {
  //         alert(data.message);
  //       }
  //     });
  // };
  // const getAdvisor = () => {
  //   fetch(constants.baseUrl + "/getadvisor", {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if ((data.status = 201)) {
  //         setAdvisors(data.data);
  //       } else {
  //         alert(data.message);
  //       }
  //     });
  // };
  // const getManagementTeam = () => {
  //   fetch(constants.baseUrl + "/getmanagementteam", {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if ((data.status = 201)) {
  //         setManagement(data.data);
  //       } else {
  //         alert(data.message);
  //       }
  //     });
  // };
  const peopleBehind = [
    {
      "_id": {
        "$oid": "64a25f0bdb90203793302b3e"
      },
      "name": "Sangeeta Giri",
      "designation": "Chief Operating Officer (COO), Salesforce India",
      "description": "",
      "imageUrl": "",
      "type": "advisors",
      "createdAt": {
        "$date": "2023-07-03T05:39:23.077Z"
      },
      "updatedAt": {
        "$date": "2023-09-04T06:08:05.685Z"
      },
      "__v": 0,
      "order": 1
    },
    {
      "_id": {
        "$oid": "64a25f23b11a013522aa36d6"
      },
      "name": "Arun Kottolli",
      "designation": "Vice President CTO, Strategy, Governance and Execution, \nJP Morgan Chase & Co",
      "description": "",
      "imageUrl": "",
      "type": "advisors",
      "createdAt": {
        "$date": "2023-07-03T05:39:47.340Z"
      },
      "updatedAt": {
        "$date": "2024-01-08T09:51:10.534Z"
      },
      "__v": 0,
      "order": 2
    },
    {
      "_id": {
        "$oid": "64a25f4cdb90203793302b48"
      },
      "name": "Katyayani Shashi Prakash",
      "designation": "Sr. Manager, International Operations - Netradyne Technologies Trustee- NRyTeN Foundation",
      "description": "",
      "imageUrl": "",
      "type": "advisors",
      "createdAt": {
        "$date": "2023-07-03T05:40:28.129Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.139Z"
      },
      "__v": 0,
      "order": 1
    },
    {
      "_id": {
        "$oid": "64a2ab3fb3c04934a2936ea4"
      },
      "name": "B S Nagarajan",
      "designation": "Founder, Managing Trustee",
      "description": "Fondly known as BSN, he is a strategic technology leader with 27+ years of experience in customer facing roles such as presales & customer success in enterprise technology companies such as Salesforce, VMware, HP, Compaq and Wipro. He is widely acknowledged as an inspirational leader with a positive influence on people to do their best work every day. \n\nHe is extremely passionate about Philanthropy with a strong belief that it is not meant only for the rich but every person can make a difference in somebody's lives to make this a better world. ",
      "imageUrl": "",
      "type": "founders",
      "createdAt": {
        "$date": "2023-07-03T11:04:31.746Z"
      },
      "updatedAt": {
        "$date": "2023-12-13T13:55:08.686Z"
      },
      "__v": 0,
      "order": 1
    },
    {
      "_id": {
        "$oid": "64a2ad99f61d8d46fea3f7bd"
      },
      "name": "Kavitha Nagarajan",
      "designation": "Co-founder, Managing Trustee",
      "description": "Kavitha is a home maker, a mother of two and has literally been the backbone of all the philanthropic activities Nagarajan has been doing in the last several years. She is highly inspired by her father, late Mr. Vasanth Kumar RV who has helped hundreds of families and organizations over the years. She wants to carry on the legacy of her late father and wishes to do more to help the needy people. ",
      "imageUrl": "",
      "type": "founders",
      "createdAt": {
        "$date": "2023-07-03T11:14:33.399Z"
      },
      "updatedAt": {
        "$date": "2023-09-04T05:57:41.308Z"
      },
      "__v": 0,
      "order": 2
    },
    {
      "_id": {
        "$oid": "64a2ae39f61d8d46fea3f7c5"
      },
      "name": "Yogish Shanbhag",
      "designation": "Head, Digital Marketing & Communications",
      "description": "",
      "imageUrl": "",
      "type": "management-team",
      "createdAt": {
        "$date": "2023-07-03T11:17:13.564Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.139Z"
      },
      "__v": 0,
      "order": 1
    },
    {
      "_id": {
        "$oid": "64a2ae54f61d8d46fea3f7c9"
      },
      "name": "B L Vasu",
      "designation": "Head, Projects",
      "description": "",
      "imageUrl": "",
      "type": "management-team",
      "createdAt": {
        "$date": "2023-07-03T11:17:40.446Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.139Z"
      },
      "__v": 0,
      "order": 3
    },
    {
      "_id": {
        "$oid": "64a2ae66f61d8d46fea3f7cd"
      },
      "name": "Anand Kumar M N",
      "designation": "Head, Administration",
      "description": "",
      "imageUrl": "",
      "type": "management-team",
      "createdAt": {
        "$date": "2023-07-03T11:17:58.288Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.139Z"
      },
      "__v": 0,
      "order": 2
    },
    {
      "_id": {
        "$oid": "64aaf6c0a355dcd6f3cda1f0"
      },
      "name": "B R Sathyanarayana",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 0,
      "createdAt": {
        "$date": "2023-07-09T18:04:48.743Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.139Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64aaf824a355dcd6f3cda1fb"
      },
      "name": "Meera Manjunath",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 2,
      "createdAt": {
        "$date": "2023-07-09T18:10:44.736Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.139Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64aaf8ed1291708ff51a678d"
      },
      "name": "S G Jagadeesh",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 3,
      "createdAt": {
        "$date": "2023-07-09T18:14:05.770Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.139Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64aafdad1291708ff51a67a3"
      },
      "name": "Murad Wagh",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 1,
      "createdAt": {
        "$date": "2023-07-09T18:34:21.574Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64aafdc51291708ff51a67a8"
      },
      "name": "Sangeeta Giri",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 2,
      "createdAt": {
        "$date": "2023-07-09T18:34:45.846Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64aaff151291708ff51a67b7"
      },
      "name": "Sushmitha Prasad",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 3,
      "createdAt": {
        "$date": "2023-07-09T18:40:21.089Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64ab024aa355dcd6f3cda237"
      },
      "name": "Gautham Rao",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 4,
      "createdAt": {
        "$date": "2023-07-09T18:54:02.833Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64ab0432a355dcd6f3cda241"
      },
      "name": "Padma Pradyumna",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 3,
      "createdAt": {
        "$date": "2023-07-09T19:02:10.584Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64bf60bed0ac2522d37ddabf"
      },
      "name": "H N Krishna",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 5,
      "createdAt": {
        "$date": "2023-07-25T05:42:22.940Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64bf60cdee71a3bf7b820977"
      },
      "name": "Roopa Narayan",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 1,
      "createdAt": {
        "$date": "2023-07-25T05:42:37.056Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64bf619cd0ac2522d37ddac9"
      },
      "name": "Praveen Raghavendra",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 2,
      "createdAt": {
        "$date": "2023-07-25T05:46:04.403Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64bf61acee71a3bf7b82097f"
      },
      "name": "Japnit Kaur",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 10,
      "createdAt": {
        "$date": "2023-07-25T05:46:20.497Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64bf61c1d0ac2522d37ddacf"
      },
      "name": "Rajiv Jayachandran",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 10,
      "createdAt": {
        "$date": "2023-07-25T05:46:41.056Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "64bf62c6ee71a3bf7b82098b"
      },
      "name": "Ramachandran V",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 7,
      "createdAt": {
        "$date": "2023-07-25T05:51:02.610Z"
      },
      "updatedAt": {
        "$date": "2023-07-29T05:58:40.140Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6579b64a7cd512ce852ad9e7"
      },
      "name": "Sridhara T A",
      "designation": "Trustee, PhD Horticulture, Entrepreneur, Educationist",
      "description": "",
      "imageUrl": "",
      "type": "founders",
      "order": 3,
      "createdAt": {
        "$date": "2023-12-13T13:48:58.270Z"
      },
      "updatedAt": {
        "$date": "2023-12-13T13:56:48.534Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6579b6a47cd512ce852ad9fd"
      },
      "name": "Dr. Prakruthi",
      "designation": "Trustee, MBBS, MS Obstetrics & Gynaecology",
      "description": "",
      "imageUrl": "",
      "type": "founders",
      "order": 3,
      "createdAt": {
        "$date": "2023-12-13T13:50:28.468Z"
      },
      "updatedAt": {
        "$date": "2023-12-13T13:57:02.288Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "6579b6cc7cd512ce852ada07"
      },
      "name": "Punith Gangatkar",
      "designation": "Trustee, Director, Pro Plasmo Pvt Ltd., EK Groups",
      "description": "",
      "imageUrl": "",
      "type": "founders",
      "order": 3,
      "createdAt": {
        "$date": "2023-12-13T13:51:08.115Z"
      },
      "updatedAt": {
        "$date": "2023-12-27T15:40:28.838Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "659bbc81c4d19e676621c084"
      },
      "name": "Dr Srinagesh Simha",
      "designation": "Medical Director\nKarunashraya Bengaluru\nBagchi Karunashraya Palliative Care Centre Bhubaneswar",
      "description": "",
      "imageUrl": "",
      "type": "medical-advisors",
      "order": 1,
      "createdAt": {
        "$date": "2024-01-08T09:12:34.008Z"
      },
      "updatedAt": {
        "$date": "2024-02-04T14:48:14.986Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "659bbc9cc4d19e676621c08e"
      },
      "name": "⁠Dr. Nandini Vallath",
      "designation": "Professor & Head\nDept of Pain and Palliative Medicine\nSt. John's National Academy of Health Sciences, Bengaluru",
      "description": "",
      "imageUrl": "",
      "type": "medical-advisors",
      "order": 1,
      "createdAt": {
        "$date": "2024-01-08T09:13:00.892Z"
      },
      "updatedAt": {
        "$date": "2024-02-04T14:47:31.588Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "659d162fad65dbf20a3a1fe4"
      },
      "name": "Dr. Gurunath Murthy",
      "designation": "Senior Consultant Anaesthetist \nAnaesthesia & Preoperative Medicine, Modbury Hospital, Adelaide, Australia\nDirector & Co-Founder, Medusys Pty Ltd, Australia",
      "description": "",
      "imageUrl": "",
      "type": "medical-advisors",
      "order": 2,
      "createdAt": {
        "$date": "2024-01-09T09:47:27.377Z"
      },
      "updatedAt": {
        "$date": "2024-02-13T18:52:24.281Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "659d16cbc4d19e676622079f"
      },
      "name": "Dr. Raghu S Thota",
      "designation": "Professor & Consultant\nPalliative Medicine, Tata Memorial Hospital, TMC (Homi Bhabha National Institute), Mumbai",
      "description": "",
      "imageUrl": "",
      "type": "medical-advisors",
      "order": 2,
      "createdAt": {
        "$date": "2024-01-09T09:50:03.475Z"
      },
      "updatedAt": {
        "$date": "2024-02-04T14:51:43.215Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65bfa293ad65dbf20a449fb3"
      },
      "name": "Dr. Sunil Kumar",
      "designation": "Additional Director\nTrivandrum Institute of Palliative Sciences (Pallium India) ",
      "description": "",
      "imageUrl": "",
      "type": "medical-advisors",
      "order": 2,
      "createdAt": {
        "$date": "2024-02-04T14:43:31.941Z"
      },
      "updatedAt": {
        "$date": "2024-02-04T14:46:09.243Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65c83cff7bc217bca152798d"
      },
      "name": "Ms. Smriti Rana",
      "designation": "Head – Strategic Programs & Partnerships\nPallium India, Trivandrum\nBoard Member, International Drug Policy Consortium\n",
      "description": "",
      "imageUrl": "",
      "type": "technical-advisors",
      "order": 2,
      "createdAt": {
        "$date": "2024-02-11T03:20:31.045Z"
      },
      "updatedAt": {
        "$date": "2024-07-18T15:49:18.221Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65c83d257bc217bca152799e"
      },
      "name": "Dr. Larry Wagh",
      "designation": "Master Trainer (ELNEC USA) Education in Pediatric End-of-Life Care Trainer (EPEC St. Jude Children's Research Hospital, USA.",
      "description": "",
      "imageUrl": "",
      "type": "technical-advisors",
      "order": 2,
      "createdAt": {
        "$date": "2024-02-11T03:21:09.190Z"
      },
      "updatedAt": {
        "$date": "2024-12-12T10:00:14.463Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65c9cdc04e169003de05185c"
      },
      "name": "Aditya Dhingra",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 10,
      "createdAt": {
        "$date": "2024-02-12T07:50:24.271Z"
      },
      "updatedAt": {
        "$date": "2024-02-12T07:51:29.590Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65c9cf147bc217bca152cace"
      },
      "name": "Supriya Menon",
      "designation": "",
      "description": "",
      "imageUrl": "",
      "type": "supporters",
      "order": 10,
      "createdAt": {
        "$date": "2024-02-12T07:56:04.481Z"
      },
      "updatedAt": {
        "$date": "2024-02-12T07:56:21.476Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65cbbae74e169003de059f8e"
      },
      "name": "Dr. Abhijit Dam",
      "designation": "Medical Director\nKosish-the Hospice, Jharkhand\nNational Founder President, NAPCAIM",
      "description": "",
      "imageUrl": "",
      "type": "medical-advisors",
      "order": 1,
      "createdAt": {
        "$date": "2024-02-13T18:54:31.842Z"
      },
      "updatedAt": {
        "$date": "2024-02-13T18:55:34.234Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65cf065c7bc217bca153fb18"
      },
      "name": "Dr. Gayatri Palat",
      "designation": "Professor & HoD\nPalliative Care\nMNJ Institute of Oncology, Hyderabad",
      "description": "",
      "imageUrl": "",
      "type": "medical-advisors",
      "order": 2,
      "createdAt": {
        "$date": "2024-02-16T06:53:16.599Z"
      },
      "updatedAt": {
        "$date": "2024-03-13T14:36:41.508Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "65f263595c183fd8ab1e4fab"
      },
      "name": "Dr. C N Manjunath",
      "designation": "Senior Cardiologist, Former Director, Sri Jayadeva Institute of Cardiovascular Sciences & Research, Bengaluru",
      "description": "",
      "imageUrl": "",
      "type": "ambassadors",
      "order": 1,
      "createdAt": {
        "$date": "2024-03-14T02:39:21.610Z"
      },
      "updatedAt": {
        "$date": "2024-03-14T02:39:21.610Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "664c2739cfd7f1c7e6cc3ca7"
      },
      "name": "Ramesh Aravind",
      "designation": "Indian Actor, Director, Screenwriter & Television Presenter",
      "description": "",
      "imageUrl": "",
      "type": "ambassadors",
      "order": 1,
      "createdAt": {
        "$date": "2024-05-21T04:46:49.696Z"
      },
      "updatedAt": {
        "$date": "2024-05-21T04:46:49.696Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "66993a22cfd7f1c7e6f0173a"
      },
      "name": "Navaneetha K Rao",
      "designation": "Former COO, RythRx, Former VP, Clinical Research & Development @ Vicus Therapeutics\nFormer Assistant Vice President, Reliance Life Sciences \nFormer Research Fellow @ VA Tech and Instructor at Harvard University",
      "description": "",
      "imageUrl": "",
      "type": "technical-advisors",
      "order": 1,
      "createdAt": {
        "$date": "2024-07-18T15:52:02.944Z"
      },
      "updatedAt": {
        "$date": "2024-07-18T15:52:56.239Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "675ab389cfd7f1c7e653b37b"
      },
      "name": "Rtn Palani Loganathan",
      "designation": "President, Rotary Club of Bangalore Midtown, 2024 - 25",
      "description": "",
      "imageUrl": "",
      "type": "technical-advisors",
      "order": 3,
      "createdAt": {
        "$date": "2024-12-12T09:57:29.378Z"
      },
      "updatedAt": {
        "$date": "2024-12-12T10:02:02.424Z"
      },
      "__v": 0
    },
    {
      "_id": {
        "$oid": "675ab3b7cfd7f1c7e653b3b4"
      },
      "name": "Rtn Punith Jalan",
      "designation": "Director - Community Service, Rotary Club of Bangalore Midtown, 2024 - 25",
      "description": "",
      "imageUrl": "",
      "type": "technical-advisors",
      "order": 3,
      "createdAt": {
        "$date": "2024-12-12T09:58:15.576Z"
      },
      "updatedAt": {
        "$date": "2024-12-12T10:02:11.278Z"
      },
      "__v": 0
    }
  ]
  const foundersList = peopleBehind.filter((person) => person.type === "founders");
  const advisorsList = peopleBehind.filter((person) => person.type === "advisors");
  const managementList = peopleBehind.filter((person) => person.type === "management-team");
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col-12 ">
          <h3 className="our-story-title">Founders</h3>
          <p>
            The supporting force behind shaping a practice into a wider
            philanthropic initiative, the Sukruthi Charitable Trust.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        {foundersList.map((member) => {
          return (
            <div className="col-md-3 col-12 mt-2">
              <div className="card founders-card h-100">
                <div className="card-body">
                  <img src={member.imageUrl} className="founder-image" />
                  <div className="card-title">
                    <h3>
                      <b>{member.name}</b>
                    </h3>
                  </div>
                  <p>
                    <h5>{member.designation}</h5>
                  </p>
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
        <div className="col-12 ">
          <h3 className="our-story-title">Management Team</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        {managementList.map((member) => {
          return (
            <div className="col-md-3 col-12 mt-2">
              <div className="card founders-card h-100">
                <div className="card-body">
                  <img src={member.imageUrl} className="founder-image" />

                  <div className="card-title">
                    <h3>
                      <b>{member.name}</b>
                    </h3>
                  </div>
                  <p>
                    <h5>{member.designation}</h5>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
        <div className="col-12 ">
          <h3 className="our-story-title">Advisors</h3>
        </div>
      </div>
      <div className="row justify-content-center">
        {advisorsList.map((member) => {
          return (
            <div className="col-md-3 col-12 mt-2">
              <div className="card founders-card h-100">
                <div className="card-body">
                  <img src={member.imageUrl} className="founder-image" />

                  <div className="card-title">
                    <h3>
                      <b>{member.name}</b>
                    </h3>
                  </div>
                  <p>
                    <h5>{member.designation}</h5>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Founders;