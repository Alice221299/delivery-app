// Importamos React y useForm
import React from "react";
import "./engineSearch.scss";
import { useForm } from "react-hook-form";


const EngineSearch = ({ getInput }) => {

  const { register, watch, setValue } = useForm();
  
  const searchValue = watch("search");


  const handleChange = (e) => {

    getInput(e.target.value);
  };


  const handleClear = (e) => {

    setValue("search", "");
    getInput('');
  };

  return (

    <div className="search">

      <figure>
        <img
          src="https://res.cloudinary.com/dibw7aluj/image/upload/v1693511234/Search_wxmped.svg"
          alt="Search"
        />
      </figure>

      <input
        type="text"
        name="search"
        placeholder="Buscar..."

        {...register("search", { defaultValue: "" })}

        onChange={handleChange}
      />

      <figure className="delete" onClick={handleClear}>
        <img
          src="https://res.cloudinary.com/dibw7aluj/image/upload/v1693511629/Trash_hduwfh.svg"
          alt="Delete"
        />
      </figure>
    </div>
  );
};


export default EngineSearch;
