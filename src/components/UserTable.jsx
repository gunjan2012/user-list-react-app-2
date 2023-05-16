import React, { useEffect, useState } from "react";
import { Spinner, Table, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAction } from "../redux/actions/fetchDataAction";
import UserRow from "./UserRow";
import UserCard from "./UserCard";
import UserPaginate from "./UserPaginate";

const UserTable = () => {
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);
  const [userModal, setUserModal] = useState(false);

  const userArr = useSelector((state) => state.user.apiData);
  const apiStatus = useSelector((state) => state.user.apiStatus);

  // check mobile view
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 576);
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileView = () => {
    if (isMobile) {
      setUserModal(true);
    } else {
      setUserModal(false);
    }
  };

  useEffect(() => {
    dispatch(fetchDataAction());
  }, []);

  switch (apiStatus) {
    case "error":
      return (
        <h1 className="d-flex w-100 h-100 justify-content-center align-items-center ">
          404 Page Not Found
        </h1>
      );
    case "pending":
      return (
        <div className="d-flex justify-content-center align-items-center w-100 h-100 loading">
          <Spinner animation="border" role="status" variant="warning" />
          <div className="ms-2 fs-3">Loading...</div>
        </div>
      );
    default:
      return (
        <>
          <div className="d-flex flex-column table-pagelist">
            <Table responsive borderless className="table-container">
              <thead className="table-header">
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Access</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {userArr.map((user) => (
                  <UserRow
                    key={user._id}
                    user={user}
                    userModal={userModal}
                    onUserClick={() => {
                      handleMobileView(user);
                    }}
                  />
                ))}
              </tbody>
            </Table>
            <UserPaginate />
          </div>
          {isMobile ? (
            <Modal
              centered
              show={userModal}
              onHide={() => {
                setUserModal(false);
              }}
            >
              <UserCard />
            </Modal>
          ) : (
            <UserCard />
          )}
        </>
      );
  }
};
// {
//   switch (apiStatus) {
//     case "success":
//       return;
//       <>
//         <div className="d-flex flex-column table-pagelist">
//           <Table responsive borderless className="table-container">
//             <thead className="table-header">
//               <tr>
//                 <th>Name</th>
//                 <th>Status</th>
//                 <th>Access</th>
//                 <th />
//               </tr>
//             </thead>
//             <tbody>
//               {userArr.map((user) => (
//                 <UserRow
//                   key={user._id}
//                   user={user}
//                   userModal={userModal}
//                   onUserClick={() => {
//                     handleMobileView(user);
//                   }}
//                 />
//               ))}
//             </tbody>
//           </Table>
//           <Paginate />
//         </div>
//         {isMobile ? (
//           <Modal
//             centered
//             show={userModal}
//             onHide={() => {
//               setUserModal(false);
//             }}
//           >
//             <UserCard />
//           </Modal>
//         ) : (
//           <UserCard />
//         )}
//       </>;
//     default:
//       return (
//         <div className="d-flex justify-content-center align-items-center w-100 h-100 loading">
//           <Spinner animation="border" role="status" variant="warning" />
//           <div className="ms-2 fs-3">Loading...</div>
//         </div>
//       );
//   }
// }

export default UserTable;
