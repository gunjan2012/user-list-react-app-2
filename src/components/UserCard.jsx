import React from "react";
import { Button, Image, ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

const UserCard = () => {
  const singleUser = useSelector((state) => state.user.singleUser);
  const userId = useSelector((state) => state.user.userId);

  return (
    userId && (
      <div className="user-detail-card">
        <div className="card-user-name">
          <Image
            className="rounded-circle"
            src={singleUser.avatar}
            alt="user-image"
          />
        </div>
        <div className="fw-bold mt-2 card-user-name">
          {singleUser.first_name + " " + singleUser.last_name}
          <span
            className={`status-dot ${
              singleUser.active ? "bg-success" : "bg-danger"
            }`}
          />
        </div>
        <div className="text-muted my-1 card-user-name">{singleUser.email}</div>
        <div className="fw-bolder card-user-name">Your Plan : Standard</div>
        <div className="content-alignment mt-2">
          <Button
            variant="warning"
            className="active-user-button text-light fw-bold px-xs-3 px-sm-3 px-md-5 py-2"
          >
            Active User
          </Button>
        </div>
        <div className="fw-bolder mt-4">Plan Uses</div>
        <div className="progress-background">
          <ProgressBar variant="warning" now={25} className="progress-bar" />
        </div>
        <div className="card-user-name mt-3">
          <div className="align-items-center">
            <div className="fw-bolder fs-3">2,450</div>
            <div className="text-muted">Clicks reviewed</div>
          </div>
          <div className="ms-2 ms-sm-2 ms-md-2">
            <div className="verticle-line" />
          </div>
          <div className="ms-2 ms-sm-2 ms-md-3">
            <div className="fw-bolder fs-3">5000</div>
            <div className="text-muted">Monthly clicks</div>
          </div>
        </div>
      </div>
    )
  );
};

export default UserCard;
