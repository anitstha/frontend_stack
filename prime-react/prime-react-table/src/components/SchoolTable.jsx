import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { FilterMatchMode } from "primereact/api";

// Core PrimeReact imports
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const SchoolTable = () => {
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const schoolData = [
    {
      id: 1,
      schoolName: "Texas International College",
      location: "Chabel, Kathmandu",
      adminName: "Sudip Dahal",
      status: "active",
      actions: "edit",
    },
    {
      id: 2,
      schoolName: "St. Xavier's School",
      location: "Jawalakhel, Lalitpur",
      adminName: "Rita Thapa",
      status: "active",
      actions: "edit",
    },
    {
      id: 3,
      schoolName: "Little Angels' School",
      location: "Hattiban, Lalitpur",
      adminName: "Suman Sharma",
      status: "inactive",
      actions: "edit",
    },
    {
      id: 4,
      schoolName: "Gems School",
      location: "Dhapakhel, Lalitpur",
      adminName: "Anil Gurung",
      status: "active",
      actions: "edit",
    },
    {
      id: 5,
      schoolName: "Budhanilkantha School",
      location: "Budhanilkantha, Kathmandu",
      adminName: "Pooja Rai",
      status: "active",
      actions: "edit",
    },
    {
      id: 6,
      schoolName: "Rato Bangala School",
      location: "Patan Dhoka, Lalitpur",
      adminName: "Binod KC",
      status: "inactive",
      actions: "edit",
    },
    {
      id: 7,
      schoolName: "Kathmandu World School",
      location: "Gundu, Bhaktapur",
      adminName: "Sita Pandey",
      status: "active",
      actions: "edit",
    },
    {
      id: 8,
      schoolName: "Ullens School",
      location: "Khumaltar, Lalitpur",
      adminName: "Ramesh Bista",
      status: "active",
      actions: "edit",
    },
    {
      id: 9,
      schoolName: "Malpi International School",
      location: "Panauti, Kavre",
      adminName: "Deepak Joshi",
      status: "active",
      actions: "edit",
    },
    {
      id: 10,
      schoolName: "Deerwalk Institute",
      location: "Sifal, Kathmandu",
      adminName: "Prabin Shrestha",
      status: "inactive",
      actions: "edit",
    },
    {
      id: 11,
      schoolName: "KMC School",
      location: "Buddharnagar, Kathmandu",
      adminName: "Maya Tamang",
      status: "active",
      actions: "edit",
    },
    {
      id: 12,
      schoolName: "Premier International School",
      location: "Khurishikhel, Lalitpur",
      adminName: "Sunil Magar",
      status: "active",
      actions: "edit",
    },
    {
      id: 13,
      schoolName: "Brihaspati Vidya Sadan",
      location: "Naxal, Kathmandu",
      adminName: "Arjun Adhikari",
      status: "inactive",
      actions: "edit",
    },
    {
      id: 14,
      schoolName: "Chelsea International Academy",
      location: "Baneshwor, Kathmandu",
      adminName: "Kiran Lamichhane",
      status: "active",
      actions: "edit",
    },
    {
      id: 15,
      schoolName: "The British School",
      location: "Sanepa, Lalitpur",
      adminName: "John Doe",
      status: "active",
      actions: "edit",
    },
    {
      id: 16,
      schoolName: "Lincoln School",
      location: "Rabi Bhawan, Kathmandu",
      adminName: "Sarah Jenkins",
      status: "active",
      actions: "edit",
    },
    {
      id: 17,
      schoolName: "Euro School",
      location: "Hattigaunda, Kathmandu",
      adminName: "Navin Chaudhary",
      status: "inactive",
      actions: "edit",
    },
    {
      id: 18,
      schoolName: "DAV School",
      location: "Dhobighat, Lalitpur",
      adminName: "Rajesh Hamal",
      status: "active",
      actions: "edit",
    },
    {
      id: 19,
      schoolName: "Nobel Academy",
      location: "New Baneshwor, Kathmandu",
      adminName: "Ishwor Pokharel",
      status: "active",
      actions: "edit",
    },
    {
      id: 20,
      schoolName: "Apex College",
      location: "Mid-Baneshwor, Kathmandu",
      adminName: "Gita Wali",
      status: "active",
      actions: "edit",
    },
  ];

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };


  const renderHeader = () => {
    return (
      <div className="flex justify-end p-2">
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Search Schools..."
          />
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="card p-10">
      <DataTable
        value={schoolData}
        paginator
        rows={5}
        header={header}
        filters={filters}
        globalFilterFields={["schoolName", "location", "adminName", "status"]}
        emptyMessage="No schools found."
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="id" header="ID" sortable />
        <Column field="schoolName" header="School Name" sortable />
        <Column field="location" header="Location" sortable />
        <Column field="adminName" header="Admin" sortable />
        <Column field="status" header="Status" sortable />
        <Column field="actions" header="Actions" />
      </DataTable>
    </div>
  );
};

export default SchoolTable;
