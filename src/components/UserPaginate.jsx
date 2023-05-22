import React from "react";
import ReactPaginate from "react-paginate";
import { fetchDataAction } from "../redux/actions/fetchDataAction";
import { useDispatch, useSelector } from "react-redux";

const UserPaginate = () => {
  const dispatch = useDispatch();

  const totalPages = useSelector((state) => state.user.totalPages);
  const currentPage = useSelector((state) => state.user.currentPage);

  const handlePageClick = (data) => {
    dispatch(fetchDataAction(data.selected));
  };

  return (
    <div className="d-flex justify-content-center mt-2">
      <ReactPaginate
        previousLabel="&#x3c;"
        nextLabel="&#x3e;"
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        forcePage={currentPage}
        onPageChange={handlePageClick}
        containerClassName={"pagination m-0"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default UserPaginate;
