import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

export default function CustomerReviews() {

  const distribution = {
    5: 70,
    4: 60,
    3: 50,
    2: 45,
    1: 30,
  };

  const reviews = [
    {
      title: "Good product",
      comment: "The product lasts, the design is perfect I love it",
      date: "12-08-2021",
      user: "JAMES JOHN",
      rating: 5,
    },
    {
      title: "Good product",
      comment: "The product lasts, the design is perfect I love it",
      date: "12-08-2021",
      user: "JAMES JOHN",
      rating: 4,
    },
    {
      title: "Looks nice",
      comment: "The product lasts, the design is perfect I love it",
      date: "12-08-2021",
      user: "JAMES JOHN",
      rating: 5,
    },
  ];

  return (
    <div className="container bg-white p-4 rounded shadow" style={{  }}>
      <h5 className="mb-3" style={{fontWeight:"700"}}>Customer Reviews</h5>
      <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}}/>

      {/* === PRODUCT RATINGS === */}
      <p className="mb-4 mt-3">PRODUCT RATINGS (1129)</p>
      <div className="d-flex prod-rev">
        <div className="rounded rev-box" style={{ backgroundColor: "#F8F5F5"}}>
          <h3 className="text-center mb-1"> <strong>4.5</strong> /5.0</h3>

          <div className="mt-3">
            <AiFillStar size={24} className="mr-2" color="#ff7a00"/>
            <AiFillStar size={24} className="mr-2" color="#ff7a00"/>
            <AiFillStar size={24} className="mr-2" color="#ff7a00"/>
            <AiFillStar size={24} className="mr-2" color="#ff7a00"/>
            <AiFillStar size={24} className="mr-2" color="#ff7a00"/>
          </div>
        </div>

        {/* RIGHT: Rating distribution */}
        <div>
          {[5,4,3,2,1].map((star) => (
            <div key={star} className="d-flex align-items-center mb-2">
              <AiFillStar className="me-1" color="#ff7a00" size={20}
                style={{ marginTop: "-2px" }}/>
              <span className="mx-3" style={{fontWeight:"700"}}>{star}</span>
              <div className="progress" style={{ width: "180px", height: "7px", background: "#eee" }} >
                <div className="progress-bar" role="progressbar" style={{
                    width: `${distribution[star]}%`, background: "#ff7a00",}}>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === PRODUCT REVIEWS === */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <p className="fw-semibold">PRODUCT REVIEWS (438)</p>
        <a href="#" className="text-danger text-decoration-none">
          See all <FiChevronRight/> </a>
      </div>
      <hr style={{backgroundColor:"#F1EEEE",height:"2px", border:"none"}}/>

      {/* === REVIEWS LIST === */}
      {reviews.map((rev, index) => (
        <div key={index} className="mb-4 pb-3"
        style={{borderBottom: index !== reviews.length - 1 ? "2px solid #F1EEEE" : "none",}}  >
          <p className="mb-2" style={{fontWeight:"700"}}>{rev.title}</p>
          <p className=" mb-1">{rev.comment}</p>

          <div className="d-flex align-items-center">
            <div className="d-flex mr-3">
              {[...Array(rev.rating)].map((_, i) => (
                <AiFillStar key={i} color="#ff7a00" className="me-1" />
              ))}
            </div>
            <span className="small mr-1">{rev.date}</span>
            <span className="small">by  {rev.user}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
