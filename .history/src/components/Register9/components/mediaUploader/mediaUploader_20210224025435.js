/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "../../common/css/styles.module.css";

export const MediaUploader = ({
  onChange,
  accept,
  multiple,
  children,
  media,
  setMedia,
  isPhoto,
}) => {
  const inputEl = useRef(null);

  useEffect(() => {
    onChange(multiple ? media : media[0]);
  }, [media]);

  const openDialog = () => {
    inputEl.current.click();
  };

  const handleChange = (e) => {
    const { files } = e.target;
    if (multiple) {
      setMedia([...media, ...files]);
    } else {
      setMedia([files[0]]);
    }
  };

  const removeMedia = (idx) => {
    const filteredMedia = media.filter((item, i) => i !== idx);
    setMedia(filteredMedia);
  };

  const handleMediaType = (item) => {
    // switch (true) {
    //   case !!item.type.match("image"):
    //     return <img src={URL.createObjectURL(item)} className={styles.media} alt={item.name} />;
    //   case !!item.type.match("video"):
    //     return (
    //       <video className={styles.media} controls>
    //         <source src={URL.createObjectURL(item)} />
    //       </video>
    //     );
    //   case !!item.type.match("audio"):
    //     return (
    //       <audio className={styles.media} controls>
    //         <source src={URL.createObjectURL(item)} />
    //       </audio>
    //     );
    //   default:
    //     return <p className={styles.otherMedia}>{item.name}</p>;
    // }
    if (isPhoto)
      return <img src={URL.createObjectURL(item)} className={styles.media} alt={item.name} />;
    return <p className={styles.otherMedia}>{item.name}</p>;
  };

  const mediaPreview = () => (
    <div className={styles.container}>
      {media.map((item, idx) => {
        return (
          <div className={styles.mediaContainer} key={idx}>
            {handleMediaType(item)}
            <span className={styles.remove} onClick={() => removeMedia(idx)}>
              <i className="fa fa-times" />
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <a className="btn btn-block" onClick={openDialog} style={{ cursor: "pointer" }}>
        {children || <i className={`fa fa-plus ${styles.icon}`} />}
      </a>
      <input
        type="file"
        onChange={handleChange}
        multiple={multiple}
        accept={accept}
        style={{ display: "none" }}
        ref={inputEl}
      />
      {mediaPreview()}
    </>
  );
};

MediaUploader.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  media: PropTypes.arrayOf(PropTypes.object).isRequired,
  setMedia: PropTypes.func.isRequired,
  isPhoto: PropTypes.bool,
};

MediaUploader.defaultProps = {
  accept: null,
  multiple: false,
  isPhoto: false,
  children: null,
};
