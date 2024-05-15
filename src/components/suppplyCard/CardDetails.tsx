import { Link } from "react-router-dom";

const CardDetails: React.FC = ({ s }) => {
  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
      {/*  <!-- Image --> */}
      <figure>
        <img src={s.imageUrl} alt="card image" className="aspect-video " />
      </figure>
      {/*  <!-- Body--> */}
      <div className="p-6">
        <header className="mb-4">
          <h3 className="text-xl font-medium text-slate-700">{s.title}</h3>
          <p className=" text-slate-400"> {s.amount}</p>
        </header>
        <p>{s.category}</p>
      </div>
      {/*  <!-- Action base sized basic button --> */}
      <div className="flex justify-end p-6 pt-0">
        <Link to={`/supplies/${s._id}`}>
          <button
            onClick={() => console.log(s._id)}
            className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-gray-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-gray-600 focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-gray-300 disabled:bg-gray-300 disabled:shadow-none"
          >
            <span>View Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardDetails;
