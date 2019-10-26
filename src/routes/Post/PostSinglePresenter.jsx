import React from 'react';

const PostSinglePresenter = ({ param }) => {
  console.log(param);
  return <div>{`${param} 페이지입니다.`}</div>;
};

export default PostSinglePresenter;
