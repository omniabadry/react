// /* eslint-disable camelcase */
// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { paymentType, expertiseLevel, expectedTime } from "../../utils/config";
// import { Skills } from "./skills";

// export const Job = ({ job }) => {
//   return (
//     <div className="main-ws-sec">
//       <div className="posts-section">
//         <div className="post-bar">
//           <div className="job_descp">
//             <h3>
//               <Link to={`/job/${job.id}`}>{job?.title}</Link>
//             </h3>
//             <h5
//               style={{
//                 fontSize: "16px",
//               }}>
//               {`${job?.service?.main_service?.name}, ${job?.service?.name}`}{" "}
//             </h5>

//             <br />
//             <div className="d-flex flex-row justify-content-between">
//               <ul className="d-flex flex-column justify-content-center align-items-center">
//                 <li>
//                   <span className="card-label badge mb-2">
//                     {paymentType[job?.payment_type - 1]?.label}
//                   </span>
//                 </li>
//                 <li>
//                   <span className="card-label">${job?.budget}</span>
//                 </li>
//               </ul>
//               <ul className="d-flex flex-column justify-content-center align-items-center">
//                 <li>
//                   <span className="card-label badge mb-2">experince level</span>
//                 </li>
//                 <li>
//                   <span className="card-label">
//                     {expertiseLevel[job?.expertise_level - 1]?.label}
//                   </span>
//                 </li>
//               </ul>
//               <ul className="d-flex flex-column justify-content-center align-items-center">
//                 <li>
//                   <span className="card-label badge mb-2">expected time</span>
//                 </li>
//                 <li>
//                   <span className="card-label">{expectedTime[job?.expected_time - 1]?.name}</span>
//                 </li>
//               </ul>
//               <ul className="d-flex flex-column justify-content-center align-items-center">
//                 <li>
//                   <span className="card-label badge mb-2">number of freelancers</span>
//                 </li>
//                 <li>
//                   <span className="card-label">{job?.freelancers_count}</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="clearfix" />
//             <p className="card-p">{job?.description}</p>
//             <p>
//               <Link to={`/job/${job.id}`}> view more</Link>
//             </p>
//             {job?.skills && <Skills skills={job.skills} />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// Job.propTypes = {
//   job: PropTypes.shape().isRequired,
// };