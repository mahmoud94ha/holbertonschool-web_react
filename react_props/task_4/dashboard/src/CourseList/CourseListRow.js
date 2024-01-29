import React from "react";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  if (isHeader) {
    if (textSecondCell == null) {
      return <th colSpan={2}>{textFirstCell}</th>;
    } else {
      return (
        <>
          <th colSpan={2}>{textFirstCell}</th>
          <th colSpan={2}>{textSecondCell}</th>
        </>
      );
    }
  } else {
    return (
      <>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </>
    );
  }
}

export default CourseListRow;
