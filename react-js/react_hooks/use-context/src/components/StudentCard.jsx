const StudentCard = ({ id, name, faculty, age, gender }) => {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
          #{id}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
            gender === "male"
              ? "bg-indigo-100 text-indigo-700"
              : "bg-pink-100 text-pink-700"
          }`}
        >
          {gender}
        </span>
      </div>

      <h2 className="text-xl font-bold text-gray-900">{name}</h2>

      <p className="mt-1 text-sm text-gray-500">{faculty}</p>

      <div className="mt-4 border-t border-gray-100 pt-4">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">Age:</span> {age} years
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
