import React from "react";
import { Form } from "react-bootstrap";
import { SHOW_CARD, HIDE_CARD } from "../redux/constants";
import { useDispatch } from "react-redux";

const UserRow = ({ user, onUserClick }) => {
  const dispatch = useDispatch();

  const showCard = () => {
    dispatch({ type: SHOW_CARD, userId: user._id });
  };

  const hideCard = () => {
    dispatch({ type: HIDE_CARD, userId: null });
  };

  return (
    <>
      <tr>
        <td>
          <div
            className="d-flex align-items-center cursor-pointer"
            onMouseOver={showCard}
            onMouseLeave={hideCard}
            onClick={onUserClick}
          >
            <img
              src={user.avatar}
              alt="user-image"
              style={{ width: 40, height: 40 }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">
                {user.first_name + " " + user.last_name}
              </p>
              <p className="text-muted mb-0">{user.email}</p>
            </div>
          </div>
        </td>
        <td>
          {user.owner ? (
            <p className="fw-bold user-status">Active</p>
          ) : (
            <Form.Select
              className="status-selector cursor-pointer"
              defaultValue={user.active ? "Active" : "Inactive"}
            >
              <option>Active</option>
              <option>Inactive</option>
            </Form.Select>
          )}
        </td>
        <td>
          {user.owner ? (
            <p className="fw-bold">Owner</p>
          ) : (
            <Form.Select
              className="status-selector cursor-pointer"
              defaultValue={user.role}
            >
              <option>Manager</option>
              <option>Read</option>
            </Form.Select>
          )}
        </td>
        <td>
          {user.owner ? (
            <span className="material-symbols-outlined fs-2 text-muted cursor-pointer">
              lock
            </span>
          ) : (
            <span className="material-symbols-outlined fs-2 text-muted cursor-pointer">
              delete
            </span>
          )}
        </td>
      </tr>
    </>
  );
};

export default UserRow;
