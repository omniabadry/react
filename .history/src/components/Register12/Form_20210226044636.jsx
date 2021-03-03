// import React from 'react'
// import { useHistory } from "react-router-dom";

// export const Form = () => {
//   const history = useHistory();
//   const handleRegisterNext12 = () => {
//     history.push("/Register13")
//   }
//   const handleRegisterBack12 = () => {
//     history.push("/Register11")
//   }
//   return (
// <form className="col-xl-7 col-12 col-sm-12 col-md-12 shadow-lg" id="formDesign">
//   <div className="card-fluid">
//     <p className="card crdhd"><b>Hourly Rate</b><span className="text-muted mutepara">7 of 11</span></p>
//     <div className="card-body" id="crd">
//       <p className="card-title" id="crdtitle">Clients will see this rate on your profile and in search
//         results once you publish your profile.
//         You can adjust your rate every time you submit a proposal.</p><br />
//       <div className="card-text">
//         <div className="row">
//           <div className="col-xl-6 col-md-12 mb-2">
//             <p><b>Hourly Rate</b></p>
//             <p className="text-muted">Total amount the client will see</p>
//           </div>
//           <div className="col-xl-6 col-md-12 mb-2 text-center">
//             <input className="form-control inputHourly" placeholder="$ 0.00" id="myHourlyRate" />&nbsp; &nbsp;/hr
//           </div>
//         </div>
//         <hr />
//         <div className="row">
//           <div className="col-xl-6 col-md-12 my-4">
//             <p style={{display: 'inline'}}><b>Upwork Service Fee</b></p>
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" className="text-success">Explain
//               this</a>
//             <p className="text-muted">The Upwork Service Fee is 20% when you begin a contract with a
//               new client.
//               Once you bill over $500 with your client, the fee will be 10%.</p>
//           </div>
//           <div className="col-xl-6 col-md-12 my-4">
//             <p className="text-muted text-center paragHourly">
//               <b>$</b><input id="discount" style={{border: 'none', width: '40%'}} />/hr</p>
//           </div>
//         </div>
//         <hr />
//         <div className="row">
//           <div className="col-xl-6 col-md-12 mb-2">
//             <p><b>You'll receive</b></p>
//             <p className="text-muted">The estimated amount you'll receive after service fees</p>
//           </div>
//           <div className="col-xl-6 col-md-12 mb-2 text-center">
//             <input className="form-control inputHourly" placeholder="$ 0.00" id="myHourlyRateDiscount" />&nbsp; &nbsp;/hr
//           </div>
//         </div>
//         <div className="row container" id="containerbg">
//           <div className="col-xl-8 col-md-12 mb-2" style={{paddingTop: '1.5rem'}}>
//             <h3 className="text mb-4  text-left"><b>Upwork service fees can be as low as 5%</b></h3>
//             <a href="#myModal" className="btn btn-outline text-success text-center hourlyBtn" data-toggle="modal">
//               <i className="fas fa-play text-success" style={{fontSize: '1rem'}} />&nbsp;&nbsp;&nbsp;See how it works</a>
//             {/* Modal HTML */}
//             <div id="myModal" className="modal fade">
//               <div className="modal-dialog hourlyModal">
//                 <div className="modal-content p-2">
//                   <div className="modal-header">
//                     <h1><b>Upwork service fees</b></h1>
//                     <button type="button" className="close" data-dismiss="modal">×</button>
//                   </div>
//                   <div className="modal-body">
//                     <div className="embed-responsive embed-responsive-16by9">
//                       <iframe id="myVideo" className="embed-responsive-item" src="hourly-video.mp4" allowFullScreen />
//                     </div>
//                   </div>
//                   <div className="modal-footer">
//                     <button className="btn-success" data-dismiss="modal" id="closeHourlyBtn">Close</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-xl-4 col-md-12 text-right">
//             <svg version="1.2" width="51.05mm" height="42.42mm" viewBox="0 0 5105 4242" preserveAspectRatio="xMidYMid" fillRule="evenodd" strokeWidth="28.222" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" xmlns:ooo="http://xml.openoffice.org/svg/export" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:presentation="http://sun.com/xmlns/staroffice/presentation" xmlns:smil="http://www.w3.org/2001/SMIL20/" xmlns:anim="urn:oasis:names:tc:opendocument:xmlns:animation:1.0" xmlSpace="preserve">
//               <defs className="ClipPathGroup">
//                 <clipPath id="presentation_clip_path" clipPathUnits="userSpaceOnUse">
//                   <rect x={0} y={0} width={5105} height={4242} />
//                 </clipPath>
//               </defs>
//               <defs className="TextShapeIndex">
//                 <g ooo:slide="id1" ooo:id-list="id3 id4 id5 id6 id7 id8 id9 id10 id11 id12 id13 id14" />
//               </defs>
//               <defs className="EmbeddedBulletChars">
//                 <g id="bullet-char-template(57356)" transform="scale(0.00048828125,-0.00048828125)">
//                   <path d="M 580,1141 L 1163,571 580,0 -4,571 580,1141 Z" />
//                 </g>
//                 <g id="bullet-char-template(57354)" transform="scale(0.00048828125,-0.00048828125)">
//                   <path d="M 8,1128 L 1137,1128 1137,0 8,0 8,1128 Z" />
//                 </g>
//                 <g id="bullet-char-template(10146)" transform="scale(0.00048828125,-0.00048828125)">
//                   <path d="M 174,0 L 602,739 174,1481 1456,739 174,0 Z M 1358,739 L 309,1346 659,739 1358,739 Z" />
//                 </g>
//                 <g id="bullet-char-template(10132)" transform="scale(0.00048828125,-0.00048828125)">
//                   <path d="M 2015,739 L 1276,0 717,0 1260,543 174,543 174,936 1260,936 717,1481 1274,1481 2015,739 Z" />
//                 </g>
//                 <g id="bullet-char-template(10007)" transform="scale(0.00048828125,-0.00048828125)">
//                   <path d="M 0,-2 C -7,14 -16,27 -25,37 L 356,567 C 262,823 215,952 215,954 215,979 228,992 255,992 264,992 276,990 289,987 310,991 331,999 354,1012 L 381,999 492,748 772,1049 836,1024 860,1049 C 881,1039 901,1025 922,1006 886,937 835,863 770,784 769,783 710,716 594,584 L 774,223 C 774,196 753,168 711,139 L 727,119 C 717,90 699,76 672,76 641,76 570,178 457,381 L 164,-76 C 142,-110 111,-127 72,-127 30,-127 9,-110 8,-76 1,-67 -2,-52 -2,-32 -2,-23 -1,-13 0,-2 Z" />
//                 </g>
//                 <g id="bullet-char-template(10004)" transform="scale(0.00048828125,-0.00048828125)">
//                   <path d="M 285,-33 C 182,-33 111,30 74,156 52,228 41,333 41,471 41,549 55,616 82,672 116,743 169,778 240,778 293,778 328,747 346,684 L 369,508 C 377,444 397,411 428,410 L 1163,1116 C 1174,1127 1196,1133 1229,1133 1271,1133 1292,1118 1292,1087 L 1292,965 C 1292,929 1282,901 1262,881 L 442,47 C 390,-6 338,-33 285,-33 Z" />
//                 </g>
//                 <g id="bullet-char-template(9679)" transform="scale(0.00048828125,-0.00048828125)">
//                   <path d="M 813,0 C 632,0 489,54 383,161 276,268 223,411 223,592 223,773 276,916 383,1023 489,1130 632,1184 813,1184 992,1184 1136,1130 1245,1023 1353,916 1407,772 1407,592 1407,412 1353,268 1245,161 1136,54 992,0 813,0 Z" />
//                 </g>
//                 <g id="bullet-char-template(8226)" transform="scale(0.00048828125,-0.00048828125)">
//                   <path d="M 346,457 C 273,457 209,483 155,535 101,586 74,649 74,723 74,796 101,859 155,911 209,963 273,989 346,989 419,989 480,963 531,910 582,859 608,796 608,723 608,648 583,586 532,535 482,483 420,457 346,457 Z" />
//                 </g>
//                 <g id="bullet-char-template(8211)" transform="scale(0.00048828125,-0.00048828125)">
//                   <path d="M -4,459 L 1135,459 1135,606 -4,606 -4,459 Z" />
//                 </g>
//               </defs>
//               <defs className="TextEmbeddedBitmaps" />
//               <g>
//                 <g id="id2" className="Master_Slide">
//                   <g id="bg-id2" className="Background" />
//                   <g id="bo-id2" className="BackgroundObjects" />
//                 </g>
//               </g>
//               <g className="SlideGroup">
//                 <g>
//                   <g id="id1" className="Slide" clipPath="url(#presentation_clip_path)">
//                     <g className="Page">
//                       <g className="com.sun.star.drawing.PolyPolygonShape">
//                         <g id="id3">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={3679} y={3498} width={1439} height={738} />
//                           <path fill="rgb(29,67,84)" stroke="none" d="M 4398,4235 L 3679,4235 3679,3498 5116,3498 5116,4235 4398,4235 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.PolyPolygonShape">
//                         <g id="id4">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={1840} y={2760} width={1438} height={1476} />
//                           <path fill="rgb(41,81,100)" stroke="none" d="M 2559,4235 L 1840,4235 1840,2761 3277,2761 3277,4235 2559,4235 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.PolyPolygonShape">
//                         <g id="id5">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={0} y={1288} width={1438} height={2948} />
//                           <path fill="rgb(51,99,122)" stroke="none" d="M 719,4235 L 0,4235 0,1288 1437,1288 1437,4235 719,4235 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.ClosedBezierShape">
//                         <g id="id6">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={4047} y={3691} width={263} height={356} />
//                           <path fill="rgb(242,242,242)" stroke="none" d="M 4047,3994 L 4092,3941 C 4119,3965 4145,3979 4176,3979 4213,3979 4237,3961 4237,3929 L 4237,3928 C 4237,3896 4211,3878 4173,3878 4150,3878 4130,3884 4113,3892 L 4070,3863 4080,3691 4294,3691 4294,3756 4144,3756 4139,3821 C 4154,3817 4167,3814 4187,3814 4255,3814 4309,3848 4309,3925 L 4309,3926 C 4309,4000 4257,4046 4177,4046 4122,4046 4081,4026 4047,3994 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.ClosedBezierShape">
//                         <g id="id7">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={4365} y={3687} width={384} height={358} />
//                           <path fill="rgb(242,242,242)" stroke="none" d="M 4365,3777 L 4365,3776 C 4365,3727 4400,3687 4450,3687 4500,3687 4534,3726 4534,3775 L 4534,3776 C 4534,3825 4500,3866 4449,3866 4399,3866 4365,3826 4365,3777 Z M 4655,3691 L 4713,3691 4573,3879 4458,4040 4400,4040 4540,3853 4655,3691 Z M 4416,3775 L 4416,3776 C 4416,3801 4430,3821 4450,3821 4472,3821 4483,3801 4483,3777 L 4483,3776 C 4483,3752 4470,3731 4449,3731 4427,3731 4416,3751 4416,3775 Z M 4579,3956 L 4579,3955 C 4579,3906 4613,3866 4664,3866 4714,3866 4748,3905 4748,3954 L 4748,3955 C 4748,4004 4713,4044 4663,4044 4613,4044 4579,4005 4579,3956 Z M 4697,3956 L 4697,3955 C 4697,3930 4683,3910 4663,3910 4641,3910 4630,3930 4630,3954 L 4630,3955 C 4630,3979 4643,4000 4664,4000 4686,4000 4697,3979 4697,3956 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.ClosedBezierShape">
//                         <g id="id8">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={188} y={3687} width={259} height={355} />
//                           <path fill="rgb(242,242,242)" stroke="none" d="M 188,3983 L 305,3886 C 349,3849 367,3830 367,3800 367,3770 346,3753 318,3753 290,3753 271,3769 245,3801 L 193,3760 C 227,3712 260,3687 323,3687 394,3687 442,3729 442,3794 L 442,3795 C 442,3853 412,3882 350,3930 L 290,3977 446,3977 446,4041 188,4041 188,3983 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.ClosedBezierShape">
//                         <g id="id9">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={504} y={3686} width={310} height={362} />
//                           <path fill="rgb(242,242,242)" stroke="none" d="M 504,3867 L 504,3867 C 504,3766 566,3686 659,3686 751,3686 813,3764 813,3866 L 813,3866 C 813,3967 751,4047 658,4047 565,4047 504,3969 504,3867 Z M 737,3867 L 737,3867 C 737,3802 706,3752 658,3752 611,3752 580,3801 580,3866 L 580,3867 C 580,3931 611,3981 659,3981 707,3981 737,3932 737,3867 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.ClosedBezierShape">
//                         <g id="id10">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={866} y={3688} width={384} height={358} />
//                           <path fill="rgb(242,242,242)" stroke="none" d="M 866,3778 L 866,3777 C 866,3728 901,3688 951,3688 1001,3688 1035,3727 1035,3776 L 1035,3777 C 1035,3826 1001,3867 950,3867 900,3867 866,3827 866,3778 Z M 1156,3692 L 1214,3692 1074,3880 959,4041 901,4041 1041,3854 1156,3692 Z M 917,3776 L 917,3777 C 917,3802 931,3822 951,3822 973,3822 984,3802 984,3778 L 984,3777 C 984,3753 971,3732 950,3732 928,3732 917,3752 917,3776 Z M 1080,3957 L 1080,3956 C 1080,3907 1114,3867 1165,3867 1215,3867 1249,3906 1249,3955 L 1249,3956 C 1249,4005 1214,4045 1164,4045 1114,4045 1080,4006 1080,3957 Z M 1198,3957 L 1198,3956 C 1198,3931 1184,3911 1164,3911 1142,3911 1131,3931 1131,3955 L 1131,3956 C 1131,3980 1144,4001 1165,4001 1187,4001 1198,3980 1198,3957 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.PolyPolygonShape">
//                         <g id="id11">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={2072} y={3689} width={152} height={353} />
//                           <path fill="rgb(242,242,242)" stroke="none" d="M 2149,3764 L 2087,3779 2072,3719 2172,3689 2222,3689 2222,4041 2149,4041 2149,3764 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.ClosedBezierShape">
//                         <g id="id12">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={2299} y={3686} width={311} height={362} />
//                           <path fill="rgb(242,242,242)" stroke="none" d="M 2299,3867 L 2299,3867 C 2299,3766 2361,3686 2454,3686 2546,3686 2608,3764 2608,3866 L 2608,3866 C 2608,3967 2546,4047 2453,4047 2360,4047 2299,3969 2299,3867 Z M 2532,3867 L 2532,3867 C 2532,3802 2501,3752 2453,3752 2406,3752 2375,3801 2375,3866 L 2375,3867 C 2375,3931 2406,3981 2454,3981 2502,3981 2532,3932 2532,3867 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.ClosedBezierShape">
//                         <g id="id13">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={2661} y={3688} width={384} height={358} />
//                           <path fill="rgb(242,242,242)" stroke="none" d="M 2661,3778 L 2661,3777 C 2661,3728 2696,3688 2746,3688 2796,3688 2830,3727 2830,3776 L 2830,3777 C 2830,3826 2796,3867 2745,3867 2695,3867 2661,3827 2661,3778 Z M 2951,3692 L 3009,3692 2869,3880 2754,4041 2696,4041 2836,3854 2951,3692 Z M 2712,3776 L 2712,3777 C 2712,3802 2726,3822 2746,3822 2767,3822 2779,3802 2779,3778 L 2779,3777 C 2779,3753 2766,3732 2745,3732 2723,3732 2712,3752 2712,3776 Z M 2875,3957 L 2875,3956 C 2875,3907 2909,3867 2960,3867 3010,3867 3044,3906 3044,3955 L 3044,3956 C 3044,4005 3009,4045 2959,4045 2909,4045 2875,4006 2875,3957 Z M 2993,3957 L 2993,3956 C 2993,3931 2979,3911 2959,3911 2937,3911 2926,3931 2926,3955 L 2926,3956 C 2926,3980 2939,4001 2960,4001 2982,4001 2993,3980 2993,3957 Z" />
//                         </g>
//                       </g>
//                       <g className="com.sun.star.drawing.ClosedBezierShape">
//                         <g id="id14">
//                           <rect className="BoundingBox" stroke="none" fill="none" x={633} y={351} width={4063} height={1933} />
//                           <path fill="rgb(111,218,68)" stroke="none" d="M 4690,2098 L 4560,1862 C 4550,1844 4528,1837 4510,1847 4492,1857 4486,1879 4496,1897 L 4583,2056 685,355 C 666,347 644,355 636,374 628,393 636,414 655,423 L 4561,2127 4404,2213 C 4386,2223 4380,2245 4390,2263 4396,2275 4409,2282 4422,2282 4428,2282 4434,2281 4440,2277 L 4675,2148 C 4693,2138 4700,2116 4690,2098 Z" />
//                         </g>
//                       </g>
//                     </g>
//                   </g>
//                 </g>
//               </g>
//             </svg>
//           </div>
//         </div>
//         <br /><br />
//         < className="text-success" onClick={handleRegisterBack12}><b>Skip this step</b>
//       </div>
//     </div>
//     <div className="card-footer bg-white crdfooter">
//       <button className="btn btn-link btn-success col-lg-5 col-sm-12 mb-3" id="nextBtn" type="submit" onClick={handleRegisterBack12}><b>Next</b></button>
//      <button className="btn btn-link btn-outline col-lg-5 col-sm-12 mb-3" id="backBtn" type="submit" onClick={handleRegisterBack12} ><b>Back</b></button>
//     </div>
//   </div>
// </form>

//   )
// }
