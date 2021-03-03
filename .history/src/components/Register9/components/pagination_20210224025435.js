/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Pagination = () => {
  return (
    <nav aria-label="Page navigation example" className="full-pagi">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link pvr" href="#">
            Previous
          </a>
        </li>
        <li className="page-item">
          <a className="page-link active" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            5
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            6
          </a>
        </li>
        <li className="page-item">
          <a className="page-link pvr" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
