import Select from "react-select";

const App = () => {
  const options = [
    { value: "banana", label: "Banana" },
    { value: "apple", label: "Apple" },
    { value: "orange", label: "Orange" },
  ];

  return (
    <div className="m-8 w-80">
      <Select 
      options={options}
      isClearable={true} 
      isSearchable={true}
      />
    </div>
  );
};

export default App;
