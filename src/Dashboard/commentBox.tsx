const CommentBox: React.FC = ({ comment }) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white  hover:opacity-100">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {comment.username}
          </h1>
          <p className="leading-relaxed">{comment.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
