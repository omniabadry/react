/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import styles from "../../common/css/styles.module.css";

export const FilesPreview = ({ files, removeMedia }) => {
  const formatFileName = (name) => {
    const seperator = "files/";
    return name.substring(name.lastIndexOf(seperator) + seperator.length);
  };

  return (
    <div className={styles.container}>
      {files.map((item) => {
        return (
          <div className={styles.mediaContainer} key={item.id}>
            <p className={`${styles.otherMedia} text-center`}>
              <span
                className="d-block mb-2"
                style={{ height: "50px", overflow: "hidden", overflowWrap: "anywhere" }}>
                <a
                  className="file-link text-white text-left"
                  href={item.file}
                  target="_blank"
                  rel="noreferrer">
                  {formatFileName(item.file)}
                </a>
              </span>
            </p>
            {removeMedia && (
              <span className={styles.remove} onClick={() => removeMedia(item.id)}>
                <i className="fa fa-times" />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

FilesPreview.propTypes = {
  files: PropTypes.arrayOf().isRequired,
  removeMedia: PropTypes.func,
};
FilesPreview.defaultProps = {
  removeMedia: null,
};
