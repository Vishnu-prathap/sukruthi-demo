import { useEffect, useState } from "react";
import constants from "../../../constants.json";

const Content = (props) => {
  // const [publicStories, setPublicStories] = useState([]);
  // useEffect(() => {
  //   getPublicStories();
  // }, []);
  // const getPublicStories = () => {
  //   fetch(constants.baseUrl + "/getpublicstories", {
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
  //         setPublicStories(data.data);
  //       } else {
  //         alert("Error " + data.status + " with message " + data.message);
  //       }
  //     });
  // };
  const publicStories = [{
    "_id": {
      "$oid": "64b40ca5a355dcd6f3cda2c2"
    },
    "name": "Manoj",
    "shortDescription": "Manoj's speedy recovery from kidney failure",
    "urlRoute": "Manoj",
    "publishDate": {
      "$date": "2023-07-16T20:55:00.000Z"
    },
    "visites": 0,
    "likes": 0,
    "imageUrl": "",
    "publicView": true,
    "caseDescription": "At the age of 11 years, Manoj was brought to Indira Gandhi Institute of Child Health and was diagnosed with nephrotic syndrome. Nephrotic syndrome is a kidney disorder that lets out excess protein in the urine and is typically caused by damage to the kidney blood vessels that filter waste from the blood. \nEver since Manoj’s diagnosis, he was advised to be on proper medication and nutritional care. But that did not seem to help treat Manoj’s kidney disorder. Despite all medications, he did not show signs of recovery. In 2021, Manoj suffered a health degradation, and within six months, he critically advanced to stage 5 of kidney failure. \nAs a result, the doctors had to proceed with the commencement of home dialysis for Manoj. \nManoj is a fervently loved, single child of his parents. He is a bright student and a brave child. Despite adversely suffering from critical kidney failure, he helped his mother during dialysis training. Manoj belongs to a financially weak family and is incapable of providing their child with proper treatment and healthy life. \n",
    "contribution": "Sukruthi Charitable Trust in association with Indira Gandhi Institute of Child Health, was familiarized with Manoj’s kidney failure case during the treatment. Besides expressing the heartfelt grief, the poor financial condition of Manoj’s parents was addressed and the initiative to fund the entire treatment was readily taken. \nCurrently, Manoj is undergoing peritoneal dialysis at home under the medical surveillance of Indira Gandhi Institute of Child Health and the support of Sukruthi Charitable Trust. The family is well motivated to perpetrate a renal/kidney transplant and awaits a suitable donor. \nManoj, being a brave-hearted child is doing fine with his current treatment and is just a step away from leading a healthy life.\n",
    "patientName": "Manoj",
    "location": "Srirampuram, Bangalore",
    "age": "14 years",
    "diagnosed": "Nephrotic syndrome",
    "createdAt": {
      "$date": "2023-07-16T15:28:37.913Z"
    },
    "updatedAt": {
      "$date": "2023-08-13T07:48:46.617Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64b40d954c1de7ccfd08cd92"
    },
    "name": "Shreya fights back kidney failure",
    "shortDescription": "Shreya fights back kidney failure",
    "urlRoute": "Shreya%20fights%20back%20kidney%20failure",
    "publishDate": {
      "$date": "2023-07-16T21:02:00.000Z"
    },
    "visites": 0,
    "likes": 0,
    "imageUrl": "",
    "publicView": true,
    "caseDescription": "Shreya, a 10-year-old girl continues to suffer from chronic kidney disease. At the age of 7, Shreya was diagnosed with permanent kidney failure. At the age of 10, she came to Indira Gandhi Institute of Child Health with severe bone deformities as an unfortunate by-product of being in her last stage of kidney failure. \nShreya’s treatment at the Indira Gandhi Institute of Child Health was initiated with kidney dialysis and was advised to continue the process for a long term. \nShreya is the second child of her mother. Shreya lost her elder sister at the same age due to suffering from a similar case of kidney failure and lack of initiation of dialysis. Shreya’s mother is a single parent, a homemaker, and works at a farm to earn bread without significant family support. This time, Shreya’s mother is well motivated and trained to perform home dialysis and save her child from lethal kidney disease. \n",
    "contribution": "Sukruthi Charitable Trust in association with Indira Gandhi Institute of Child Health was acquainted with Shreya’s kidney failure case. Acknowledging the criticality of Shreya’s case and their poor financial state, Sukruthi Charitable Trust readily stepped forward to fund Shreya’s dialysis treatment and support her with complete medical care. \nCurrently, Shreya is undergoing peritoneal dialysis at Indira Gandhi Institute of Child Health. In order to sustain her life, the procedure must go on until a suitable donor isn’t found for a renal transplant. \nSukruthi Charitable Trust shall remain with Shreya throughout her battle with kidney failure until she doesn’t win a good and healthy life.\n",
    "patientName": "Shreya",
    "location": "Sindhnur, Raichur district",
    "age": "10 years",
    "diagnosed": "Permanent Kidney Failure",
    "createdAt": {
      "$date": "2023-07-16T15:32:37.873Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:58:11.844Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64bd4c00d0ac2522d37dd97c"
    },
    "name": "Pranam undergoes a successful Bone Marrow Transplant ",
    "shortDescription": "",
    "urlRoute": "Pranam%20undergoes%20a%20successful%20Bone%20Marrow%20Transplant%20",
    "publishDate": {
      "$date": "2023-07-23T21:19:00.000Z"
    },
    "visites": 0,
    "likes": 0,
    "imageUrl": "",
    "publicView": true,
    "caseDescription": "Pranam's father is a salesman in a textile shop and the only earning member of the family. Mother is a homemaker. He has a 9-year old sister. Pranam had complaints of intermittent fever and joint pain. On investigations he was diagnosed with aplastic anemia. He was planned to undergo allogenic Haematopoietic Stem Cell Transplantation.  ",
    "contribution": "Pranam had to undergo a Bone Marrow Transplant and the cost was upwards of Rs. 15 lakhs. His father could arrange a small part of the same and Shankara hospital not only gave substantial discounts but also arranged the funds through various NGOs including Sukruthi. Pranam had a successful transplant and is now recovering well. ",
    "patientName": "Pranam",
    "location": "Bengaluru",
    "age": "6 years",
    "diagnosed": "Severe Aplastic Anemia (a type of bone marrow failure syndrome)",
    "createdAt": {
      "$date": "2023-07-23T15:49:20.050Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:58:11.844Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64bd510dd0ac2522d37dd99f"
    },
    "name": "Seven year old Tharun fights Blood Cancer",
    "shortDescription": ".",
    "urlRoute": "Seven%20year%20old%20Tharun%20fights%20Blood%20Cancer",
    "publishDate": {
      "$date": "2023-07-23T21:40:00.000Z"
    },
    "visites": 0,
    "likes": 0,
    "imageUrl": "",
    "publicView": true,
    "caseDescription": "Tharun’s father Shabari Nandan hails from Tamilnadu, is an auto driver in Bangalore. Tarun was not feeling well for almost a month and was admitted to KIMS hospital for treatment. Since fever did not recede even after treating him for more than a month, a few tests were done outside where the results indicated Blood Cancer. Somebody referred them to Shankara hospital where he is currently undergoing chemotherapy treatment. Tharun is now in 1st standard and unable to go to school till he completes his treatment but he wants to become a doctor when he grows up.  ",
    "contribution": "Tharun's treatment needed several lakhs of rupees and his family was unable to arrange the same. Shankara hospital supported his family by arranging funds through a number of NGOs. Sukruthi partnered with Shankara hospital to provide a chemo port for Tharun's treatment absolutely free of cost. ",
    "patientName": "Tharun",
    "location": "Chandra Layout, Bangalore",
    "age": "7 years",
    "diagnosed": "Acute Lymphoblastic Leukemia",
    "createdAt": {
      "$date": "2023-07-23T16:10:53.022Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:58:11.844Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64bd5473d0ac2522d37dd9b1"
    },
    "name": "Divya scores 80% while battling Blood Cancer",
    "shortDescription": ".",
    "urlRoute": "Divya%20scores%2080%25%20while%20battling%20Blood%20Cancer",
    "publishDate": {
      "$date": "2023-07-23T21:55:00.000Z"
    },
    "visites": 0,
    "likes": 0,
    "imageUrl": "",
    "publicView": true,
    "caseDescription": "Divya was good at her academics and was busy studying for her 10th standard final exams when she got fever one fine day. She was not feeling well for almost a month and could not study well. She was first taken to a local doctor in Tumkur which did not help. She somehow managed to write all her exams and in fact wrote her last exam with fever. She was then brought to Vanivilas hospital in Bangalore where she was diagnosed with blood cancer and sent to Shankara hospital where she is undergoing treatment. Despite all this, she scored 80% in her 10th standard board exams. Divya wants to do Engineering and aspires to become a Software Engineer later. ",
    "contribution": "Divya’s father was working in APMC yard as a writer and had to discontinue working because he underwent a surgery too. So her mother was managing the house expenses by selling flowers. At this time, they could not afford the cost of treatment. Shankara hospital supported his family by arranging funds through a number of NGOs. Sukruthi partnered with Shankara hospital to provide a chemo port for Divya's treatment absolutely free of cost. ",
    "patientName": "Divya H R",
    "location": "Tumkur, Karnataka",
    "age": "15 years",
    "diagnosed": "Acute Lymphoblastic Leukemia",
    "createdAt": {
      "$date": "2023-07-23T16:25:23.230Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:58:11.844Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64bd5c50ee71a3bf7b82088c"
    },
    "name": "3 year old Arya ready to get back to school",
    "shortDescription": ".",
    "urlRoute": "3%20year%20old%20Arya%20ready%20to%20get%20back%20to%20school",
    "publishDate": {
      "$date": "2023-07-23T22:27:00.000Z"
    },
    "visites": 0,
    "likes": 0,
    "imageUrl": "",
    "publicView": true,
    "caseDescription": "Arya was not feeling well for a month and a local doctor in Honnavara suspected Cancer and sent them directly to Shankara hospital. He has been taking chemotherapy treatment now for almost 6 months. ",
    "contribution": "Arya’s father Anil Kumar was working as a graphic designer in a private company in Bangalore. But he had to stop working now for the last 6 months since he has to accompany his son for treatment. Shankara hospital supported his family by arranging funds through a number of NGOs. Sukruthi partnered with Shankara hospital to provide a chemo port for Arya's treatment absolutely free of cost.",
    "patientName": "Arya",
    "location": "Davanagere, Karnataka",
    "age": "3 years",
    "diagnosed": "Acute Leukemia",
    "createdAt": {
      "$date": "2023-07-23T16:58:56.991Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:58:11.844Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64bd5f8fd0ac2522d37dd9bf"
    },
    "name": "Manab loses sight permanently due to Brain Tumor ",
    "shortDescription": ".",
    "urlRoute": "Manab%20loses%20sight%20permanently%20due%20to%20Brain%20Tumor%20",
    "publishDate": {
      "$date": "2023-07-23T22:41:00.000Z"
    },
    "visites": 0,
    "likes": 0,
    "imageUrl": "",
    "publicView": true,
    "caseDescription": "Manab had fever and vomiting continuously for more than a month. He was also complaining of poor vision but his parents could not make out what was wrong. That’s when a local doctor referred them to Bangalore, where he was diagnosed with Brain Tumor and got operated in Sanjeevini hospital. Unfortunately, it was too late and the tumor damaged his eyes permanently. He was later brought to Shankara hospital where he is now undergoing treatment for more than 9 months. This doesn’t deter him from running around everywhere, climbing stairs and jumping around. ",
    "contribution": "Manab’s father Prasad Barman working as a daily wage coolie in West Bengal had to sell their land for the surgery to remove the tumor. They spent more than 2 lakhs and almost had nothing left when they came to Shankara hospital. Shankara hospital supported his family by arranging funds through a number of NGOs. Sukruthi partnered with Shankara hospital to provide a chemo port for Manab's treatment absolutely free of cost.",
    "patientName": "Manab Barman",
    "location": "Kaliaganj, West Bengal ",
    "age": "5 years",
    "diagnosed": "Low grade Glioma",
    "createdAt": {
      "$date": "2023-07-23T17:12:47.819Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:58:11.844Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64bd624bee71a3bf7b82089b"
    },
    "name": "Sudarshan fighting Cancer to become an IAS officer",
    "shortDescription": ".",
    "urlRoute": "Sudarshan%20fighting%20Cancer%20to%20become%20an%20IAS%20officer",
    "publishDate": {
      "$date": "2023-07-23T22:58:00.000Z"
    },
    "visites": 0,
    "likes": 0,
    "imageUrl": "",
    "publicView": true,
    "caseDescription": "Sudarshan initially used to feel difficult to breathe and the doctors found that the entire left side of his abdomen was filled with water. They initially diagnosed it as TB and treatment was given. Later he was taken to Hyderabad where cancer was diagnosed. They then came to Shankara hospital through a friend. Sudarshan was studying in 7th standard when he was diagnosed with Cancer but that does not deter him from continuing to study. He aspires to become an IAS officer. ",
    "contribution": "Sudarshan’s father Parameswar is a mechanic in Bidar. He has an elder son who is 15 year old and hardly had any money left with him when they came to Shankara hospital. Shankara hospital supported his family by arranging funds through a number of NGOs. Sukruthi partnered with Shankara hospital to provide a chemo port for Sudarshan's treatment absolutely free of cost.",
    "patientName": "Sudarshan",
    "location": "Bidar, Karnataka",
    "age": "12 years",
    "diagnosed": "T-cell Lymphoblastic Lymphoma",
    "createdAt": {
      "$date": "2023-07-23T17:24:27.186Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:58:11.844Z"
    },
    "__v": 0
  },
  {
    "_id": {
      "$oid": "64bd6504d0ac2522d37dd9cc"
    },
    "name": "3 year old Syed Arman fights Blood Cancer",
    "shortDescription": ".",
    "urlRoute": "3%20year%20old%20Syed%20Arman%20fights%20Blood%20Cancer",
    "publishDate": {
      "$date": "2023-07-23T23:00:00.000Z"
    },
    "visites": 0,
    "likes": 0,
    "imageUrl": "",
    "publicView": true,
    "caseDescription": "Arman is the youngest among his siblings with his eldest daughter studying in degree college and another sister in 9th standard. He was diagnosed with Blood Cancer and brought to Shankara hospital for treatment.  ",
    "contribution": "Arman’s father Syed Asif, an auto driver had no money when he was asked to pay Rs. 5000 to get him admitted in Shankara hospital. He said he would need a couple of days to sell his auto and arrange the money. Sensing that his only source of earning would come to an end if he sold his auto, Shankara hospital supported his family by arranging funds through a number of NGOs. Sukruthi partnered with Shankara hospital to provide a chemo port for Arman's treatment absolutely free of cost.",
    "patientName": "Syed Arman ",
    "location": "Bengaluru",
    "age": "3 years",
    "diagnosed": "Pre-B Acute Lymphoblastic Leukemia",
    "createdAt": {
      "$date": "2023-07-23T17:36:04.873Z"
    },
    "updatedAt": {
      "$date": "2023-07-29T05:58:11.844Z"
    },
    "__v": 0
  }]
  if (props.home) {
    return (
      <div className="container pb-5 mt-5">
        <div className="row justify-content-center">
          {publicStories.slice(0, 3).map((story) => {
            return (
              <div className="col-md-4 mt-2">
                <div className="card testinominals-card h-100">
                  <img
                    class="card-img-top story-card-img"
                    src={story.imageUrl}
                    alt={story.name}
                  />
                  <div className="card-body testinomials-body">
                    <h3 class="card-author h3">{story.name}</h3>
                    <p className="truncate">{story.caseDescription}</p>
                  </div>
                  <div class="card-footer text-muted">
                    <button
                      className="btn btn-outline-danger search-btn"
                      onClick={(e) =>
                        window.open(
                          "/achievements/stories-of-good/" + story.urlRoute,
                          "_blank"
                        )
                      }
                    >
                      Know More
                    </button>

                    {/* <span className="card-designation span">
                      {new Date(story.publishDate).toLocaleString("en-US", {
                        localeMatcher: "best fit",
                        timeZoneName: "short",
                      })}
                    </span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="container pb-5 mt-5">
        <div className="row justify-content-center">
          {publicStories.map((story) => {
            return (
              <div className="col-md-3 mt-2">
                <div className="card testinominals-card h-100">
                  <img
                    class="card-img-top story-card-img"
                    src={story.imageUrl}
                    alt={story.name}
                  />
                  <div className="card-body testinomials-body">
                    <h3 class="card-author h3">{story.name}</h3>
                    <p className="truncate">{story.caseDescription}</p>
                  </div>

                  <div class="card-footer text-muted">
                    <button
                      className="btn btn-outline-danger search-btn"
                      onClick={(e) =>
                        window.open(
                          "/achievements/stories-of-good/" + story.urlRoute,
                          "_blank"
                        )
                      }
                    >
                      Know More
                    </button>

                    {/* <span className="card-designation span">
                      {new Date(story.publishDate).toLocaleString("en-US", {
                        localeMatcher: "best fit",
                        timeZoneName: "short",
                      })}
                    </span> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};
export default Content;
