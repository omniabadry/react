// /* eslint-disable jsx-a11y/click-events-have-key-events */
// /* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useEffect, useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import classNames from "classnames";
// import { toast } from "react-toastify";
// import { useTranslation } from "react-i18next";
// import { logoutUser, updateChatContacts } from "../../redux/actions";
// import { IMAGES } from "../../common";
// import { Notifications } from "./notifications";
// import { Spinner } from "../spinner";
// import { Logo } from "./logo";
// import api from "../../services/api";aa
// import InitiatePusher from "../../services/pusher";

// export const LoggedInHeader = () => {
//   const { user, token, type, client, freelancer, chatContacts } = useSelector(
//     ({ userState }) => userState,
//   );
//   useEffect(() => {
//     //  ============ Notifications Open =============

//     window.$(".not-box-open").on("click", function () {
//       window.$("#message").hide();
//       window.$(".user-account-settingss").hide();
//       window.$(this).next("#notification").toggle();

//       // window.$(".not-box-open > i").toggleClass("far fas");
//     });

//     //  ============ Messages Open =============

//     window.$(".not-box-openm").on("click", function () {
//       window.$("#notification").hide();
//       window.$(".user-account-settingss").hide();
//       window.$(this).next("#message").toggle();

//       // window.$(".not-box-openm > i").toggleClass("far fas");
//     });

//     // ============= User Account Setting Open ===========

//     window.$(".user-info").click(function () {
//       window.$(".user-account-settingss").slideToggle("fast");
//       window.$("#message").not(window.$(this).next("#message")).slideUp();
//       window.$("#notification").not(window.$(this).next("#notification")).slideUp();
//     });
//   }, []);

//   const dispatch = useDispatch();
//   const history = useHistory();
//   const { t } = useTranslation();

//   const [allNotifications, setAllNotifications] = useState([]);
//   const [newPusherNotification, setNewPusherNotification] = useState(null);
//   const [count, setCount] = useState(0);

//   const [{ loading: notifiLoading }, fetchNotifications] = api.useAxios(
//     { url: "/notifications" },
//     { manual: true },
//   );

//   const [{ loading: loadingClear }, clear] = api.useAxios(
//     { url: "/clear-notifications" },
//     { manual: true },
//   );

//   const handleClear = () => {
//     clear().then(() => {
//       fetchNotifications();
//     });
//   };

//   useEffect(() => {
//     fetchNotifications();
//   }, [fetchNotifications]);

//   const onToastClick = (target) => {
//     history.push(target);
//   };

//   const updateNotifications = (data) => {
//     console.log(data);
//     if (user.id !== data.notification.other_user_id) {
//       const notifications = [data.notification, ...allNotifications];
//       setAllNotifications(notifications);
//       setCount(count + 1);
//       toast.dark(
//         () => {
//           return (
//             <div
//               onClick={() =>
//                 onToastClick(
//                   `/job/${data.notification.notifable && data.notification.notifable.id}
//                   }/notifications`,
//                   "notification",
//                 )
//               }>
//               {data.notification.text}
//             </div>
//           );
//         },
//         {
//           position: "bottom-right",
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: false,
//           progress: undefined,
//         },
//       );
//     }
//   };

//   useEffect(() => {
//     const pusher = InitiatePusher(token);

//     const privateChannel = pusher.subscribe(`private-user-${user.id}`);
//     console.log("user.id", user.id);

//     privateChannel.bind("send-notification", setNewPusherNotification);
//     privateChannel.bind("send-message", updateMessages);

//     return () => {
//       pusher.unsubscribe(`private-user-${user.id}`);

//       privateChannel.unbind("send-notification", setNewPusherNotification);
//       privateChannel.unbind("send-message", updateMessages);
//     };
//   }, []);

//   useEffect(() => {
//     fetchNotifications().then(({ data }) => {
//       const notifications = [...data.notifications];
//       setAllNotifications(notifications);
//       setCount(data.count);
//     });
//   }, []);

//   useEffect(() => {
//     if (newPusherNotification) {
//       updateNotifications(newPusherNotification);
//     }
//   }, [newPusherNotification]);

//   const renderNotification = () => {
//     if (allNotifications.length === 0) {
//       return <div className="no-notif">No Notifications</div>;
//     }

//     const arr = [];
//     for (let index = 0; index < 5; index += 1) {
//       if (allNotifications[index]) {
//         arr.push(<Notifications notification={allNotifications[index]} />);
//       }
//     }
//     return arr;
//   };

//   const updateMessages = () => {
//     dispatch(updateChatContacts());
//     toast.dark(
//       () => {
//         return <div onClick={() => onToastClick("/chat")}>New Messages</div>;
//       },
//       {
//         position: "bottom-right",
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: false,
//         progress: undefined,
//       },
//     );
//   };

//   const renderMessages = () => {
//     if (chatContacts?.length === 0) {
//       return <div className="no-notif">No Messages</div>;
//     }
//     return chatContacts?.map((contact) => {
//       return (
//         <>
//           <div className="notfication-details" key={contact.id}>
//             <Link to={{ pathname: "/messages", data: contact.other_user.id }}>
//               <div className="noty-user-img">
//                 <img src={contact.other_user.photo || IMAGES.user} alt="" />
//               </div>
//               <div className="notification-info">
//                 <h3>
//                   <a href="messages.html" title>
//                     {contact.other_user.name}
//                   </a>
//                 </h3>
//                 <p>{contact.latest_message}</p>
//                 <span>{contact.created_at}</span>
//               </div>
//             </Link>
//           </div>
//         </>
//       );
//     });
//   };

//   return (
//     <>
//       <Spinner isOpen={notifiLoading || loadingClear} />
//       <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
//         <Logo />
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ml-auto" id="nav-list">
//             <li>
//               <Link to="/home">Home</Link>
//             </li>
//             <li>
//               <Link to="/how-it-work">How it Works</Link>
//             </li>
//             <li>
//               <Link to="/explore">Explore</Link>
//             </li>
//             <li>
//               <Link to="/about">ِAbout</Link>
//             </li>
//             <li>
//               <Link to="/projects">Projects</Link>
//             </li>
//             <li>
//               <Link to="/enterprice">Enterprice</Link>
//             </li>
//             <li>
//               <Link to={`/${type}-profile/${type === "client" ? client.id : freelancer.id}`}>
//                 Profile
//               </Link>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 title
//                 className="not-box-openm"
//                 onClick={(e) => {
//                   e.preventDefault();
//                 }}>
//                 <i className="fa-envelope far" />
//               </a>
//               <div className="notification-box msg" id="message">
//                 <div className="nt-title">
//                   <h4>Settings</h4>
//                 </div>
//                 <div className="nott-list">
//                   {renderMessages()}
//                   <div className="view-all-nots">
//                     <Link to="/messages">{t("View All Messages")}</Link>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 title
//                 className="not-box-open"
//                 onClick={(e) => {
//                   e.preventDefault();
//                 }}>
//                 <i className="fas fa-bell" />
//               </a>
//               <div className="notification-box noti" id="notification">
//                 <div className="nt-title">
//                   <h4>Setting</h4>
//                   <a href="#" onClick={() => handleClear()}>
//                     Clear all
//                   </a>
//                 </div>
//                 <div className="nott-list">
//                   {renderNotification()}
//                   <div className="view-all-nots">
//                     <Link
//                     // to={`/profile/@${user.nick_name}/notifications`}
//                     >
//                       View All Notifications
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </li>
//             <li className="d-flex justify-content-center">
//               <div className="user-account custom-user-account">
//                 <div className="user-info custom-user-info" style={{ width: "max-content" }}>
//                   <img src="/images/resources/user.png" alt="" />
//                   <a
//                     href="#"
//                     title
//                     onClick={(e) => {
//                       e.preventDefault();
//                     }}>
//                     {user.name}
//                     <i className="la la-sort-down pl-1" style={{ fontSize: "12px" }} />
//                   </a>
//                 </div>
//                 <div
//                   className="user-account-settingss custom-account-settingss text-left"
//                   id="users">
//                   <h3>Online Status</h3>
//                   <ul className="on-off-status custom-nav-ul">
//                     <li>
//                       <div className="">
//                         <input
//                           type="radio"
//                           name="online-status"
//                           id="online-status"
//                           className="align-bottom"
//                         />

//                         <label
//                           htmlFor="online-status"
//                           className="custom-nav-label align-bottom pl-2">
//                           Online
//                         </label>
//                       </div>
//                     </li>
//                     <li>
//                       <div className="">
//                         <input
//                           type="radio"
//                           name="online-status"
//                           id="offline-status"
//                           className="align-bottom"
//                         />
//                         <label
//                           htmlFor="offline-status"
//                           className="custom-nav-label align-bottom pl-2">
//                           Offline
//                         </label>
//                       </div>
//                     </li>
//                   </ul>
//                   <h3>Custom Status</h3>
//                   <div className="search_form">
//                     <form>
//                       <input type="text" name="search" />
//                       <button type="submit">Ok</button>
//                     </form>
//                   </div>
//                   <h3>Setting</h3>
//                   <ul className="us-links custom-nav-ul">
//                     <li>
//                       <a href="profile-account-setting.html" className="custom-nav-label">
//                         Account Settings
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="custom-nav-label">
//                         Privacy
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="custom-nav-label">
//                         Faqs
//                       </a>
//                     </li>
//                     <li>
//                       <a href="#" className="custom-nav-label">
//                         Terms &amp; Conditions
//                       </a>
//                     </li>
//                   </ul>
//                   <h3>
//                     <a
//                       className="custom-logout"
//                       href="#"
//                       onClick={(e) => {
//                         e.preventDefault();
//                         dispatch(logoutUser());
//                         history.push("/");
//                       }}>
//                       Logout
//                     </a>
//                   </h3>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };