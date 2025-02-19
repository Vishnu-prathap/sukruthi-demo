import { useState, useEffect } from "react";
import constants from "../../../constants.json";

const Contents = (props) => {
  const [allTestinomials, setAllTestinomials] = useState([]);
  // useEffect(() => {
  //   getTestinomials();
  // }, []);
  // const getTestinomials = () => {
  //   fetch(constants.baseUrl + "/getpublictestinomials", {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (data.status === 201) {
  //         setAllTestinomials(data.data);
  //       }
  //     });
  // };
  const testimonialsDataJson = [{
    "_id": {
      "$oid": "649aeeec08a22b85b7469b01"
    },
    "name": "Katyayani Shashi Prakash",
    "designation": "Trustee, NRyTeN Foundation",
    "content": "I have known the founders of Sukruthi for nearly 20 years and I'm delighted to partner with them because they carry out their work with a deep commitment to serve & display accountability and transparency.",
    "publicView": true,
    "createdAt": {
      "$date": "2023-06-27T14:15:08.829Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:56:43.686Z"
    },
    "__v": 0,
    "imageUrl": "",
    "order": 3
  },
  {
    "_id": {
      "$oid": "649aef2008a22b85b7469b04"
    },
    "name": "Roopa Narayan",
    "designation": "Homemaker",
    "content": "Sukruthi has been instrumental in motivating a number of us to think beyond our own lives and contribute back to the society of which we are an integral part of. Instead of spending money on yearly rituals of elders' death anniversary, I donate the amount to Sukruthi. Money spent on improving the lives of some children should please God anyway.",
    "publicView": true,
    "createdAt": {
      "$date": "2023-06-27T14:16:00.128Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:56:43.687Z"
    },
    "__v": 0,
    "imageUrl": "",
    "order": 2
  },
  {
    "_id": {
      "$oid": "64a190b0a35541fb2bd08395"
    },
    "name": "Uma S Jagadeesh",
    "designation": "Retired Officer, Reserve Bank of India",
    "content": "We can’t do everything but we can do something to help somebody. I decided to donate to Sukruthi to express gratitude for the blessings I've received in life so far. ",
    "publicView": true,
    "createdAt": {
      "$date": "2023-07-02T14:58:56.497Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:56:43.687Z"
    },
    "__v": 0,
    "imageUrl": "",
    "order": 3
  },
  {
    "_id": {
      "$oid": "64a195c7573f79f1632a441a"
    },
    "name": "Dr. B S Srinath",
    "designation": "Managing Trustee, Sri Shankara Cancer Hospital & Research Centre",
    "content": "Sukruthi Charitable Trust has been associated with Sri Shankara Cancer Foundation for the last couple of years and during this period has supported several economically challenged patients with cancer, particularly paediatric patients, for chemo-ports which is essential in providing safe, life saving chemotherapy for the patients. They have also supported patients to receive PET CT scans which is crucial in diagnosis and treatment monitoring. Together, Shankara Cancer Foundation and Sukruthi Charitable Trust have made a positive impact in the lives of cancer patients to receive the highest quality treatment. \n\nI take this opportunity to thank Sukruthi Charitable trust for joining us in this journey and look forward to their continued support in alleviating the burden of cancer in the society.",
    "publicView": true,
    "createdAt": {
      "$date": "2023-07-02T15:20:39.846Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:56:43.687Z"
    },
    "__v": 0,
    "imageUrl": "",
    "order": 1
  },
  {
    "_id": {
      "$oid": "64a19f61573f79f1632a4425"
    },
    "name": "D V Ashok",
    "designation": "Access Devices",
    "content": "Access Devices partnered with Sukruthi in 2021 and together we have supported more than 75 children suffering from Cancer till date by providing them chemo ports for treatment. I'm happy to have joined hands with Sukruthi in this noble cause and believe there is a huge opportunity for us to give effectively and make a significant difference to the society we live in. \n",
    "publicView": true,
    "createdAt": {
      "$date": "2023-07-02T16:01:37.947Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:56:43.687Z"
    },
    "__v": 0,
    "imageUrl": "",
    "order": 2
  },
  {
    "_id": {
      "$oid": "64a1b106a35541fb2bd083a3"
    },
    "name": "H N Krishna",
    "designation": "Retired Govt Servant",
    "content": "Sharing what is yours will only make one richer and the amount of value it adds to the life of the person who receives it is immense. Let us think it as sharing and not giving. ",
    "publicView": true,
    "createdAt": {
      "$date": "2023-07-02T17:16:54.847Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:56:43.687Z"
    },
    "__v": 0,
    "imageUrl": "",
    "order": 3
  },
  {
    "_id": {
      "$oid": "64aafb64a355dcd6f3cda20a"
    },
    "name": "Sushmitha Prasad",
    "designation": "Enterprise Sales, Salesforce ",
    "content": "When we lose loved ones to terminal illnesses, we feel an irreplaceable void. Sukruthi's cause & intent to support and aid individuals and families going through a traumatic journey and preventing them from experiencing a similar void is something that resonated with me. How can any of us not want to be part of this? ",
    "publicView": true,
    "order": 2,
    "createdAt": {
      "$date": "2023-07-09T18:24:36.703Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:56:43.687Z"
    },
    "__v": 0,
    "imageUrl": "a"
  },
  {
    "_id": {
      "$oid": "64aafc3da355dcd6f3cda20d"
    },
    "name": "Dr. Ramesh Santhanakrishnan",
    "designation": "Pediatric Surgeon & HOD, Indira Gandhi Institute of Child Health",
    "content": "The department of Pediatric Surgery at Indira Gandhi Institute of Child Health has completed 25 years of service to the public. On this momentous occasion, I would like to recall our association with Sukruthi with a deep sense of gratitude. Your strong support has enabled us to provide state-of-the-art care to all our patients irrespective of their background. Your selfless gestures of support and partnering with our bright team has helped us achieve our motto of providing our best to all our patients and not refusing treatment to any child for monetary reasons. We take this opportunity to profusely thank you for being with us in our journey and look forward to your continued support in the future.",
    "publicView": true,
    "order": 1,
    "createdAt": {
      "$date": "2023-07-09T18:28:13.469Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:56:43.687Z"
    },
    "__v": 0,
    "imageUrl": "d"
  },
  {
    "_id": {
      "$oid": "64ab01fda355dcd6f3cda231"
    },
    "name": "Megha Jagadeesh",
    "designation": "Sr. Technical Content Developer, Commscope",
    "content": "I believe that kindness can have a more beneficial impact on our health than exercising and a best kept secret to longevity!\nWe have all seen suffering increase around us in the last two years. I want to contribute in every way possible, even if it only means easing the pain or helping where I can. Sukruthi’s transparency makes a huge difference to me, because I know how far my contribution goes and how meaningful it is to the recipients and their families. My support and contribution in any way I can is always going to be with Sukruthi. I urge you to do yourself a favor by giving your support to at least one person, one family, and feel the positive difference it makes in your life.",
    "publicView": true,
    "order": 1,
    "createdAt": {
      "$date": "2023-07-09T18:52:45.791Z"
    },
    "updatedAt": {
      "$date": "2023-08-13T07:49:24.986Z"
    },
    "__v": 0,
    "imageUrl": "1"
  },
  {
    "_id": {
      "$oid": "65c9ca8a4e169003de05177b"
    },
    "name": "Vidushi Dr. Padmini Achchi",
    "designation": "Founder, Achchi Classical Dance Centre",
    "content": "While I’ve trained hundreds of disciples in Bharatanatyam over the last 24 years, what is more valuable to me is sharing the joy experienced from expressing and communicating through dance. I want to extend this joy to the art of giving because I feel everyone on this earth should have a heart to serve and give to each other. I’m happy to join hands with Sukruthi in this art of giving and encourage all my students to give back to the society in their own way.",
    "publicView": true,
    "order": 2,
    "createdAt": {
      "$date": "2024-02-12T07:36:42.379Z"
    },
    "updatedAt": {
      "$date": "2024-02-12T07:37:46.024Z"
    },
    "__v": 0,
    "imageUrl": "b"
  }]

  return (
    <div className="container pb-5">
      <div className="row justify-content-center mt-5">
        {testimonialsDataJson.map((testinomial) => {
          return (
            <div className="col-md-4 col-12 mt-4">
              <div className="card testinominals-card h-100">
                <div className="card-body testinomials-body">
                  <div className="row">
                    <div className="col-8">
                      <p class="card-text ">{testinomial.content}</p>
                    </div>
                    <div className="col-4">
                      <img
                        src={testinomial.imageUrl}
                        className="testinomials-img"
                      />
                    </div>
                  </div>
                  <div className="row mt-2 testinomial-designation">
                    <div className="col-12">
                      <span class="card-author h5">{testinomial.name}</span>
                      <br />
                      <span className="card-designation h6">
                        {testinomial.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Contents;
