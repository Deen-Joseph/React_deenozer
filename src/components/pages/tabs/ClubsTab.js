import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './ClubsTab.css'

const ClubTab =()=>{
    let confederation = [
        {
          name: "UEFA",
          continent: "Europe",
        },
        {
          name: "CAF",
          continent: "Africa",
        },
        {
          name: "AFC",
          continent: "ASIA",
        },
        {
          name: "CONMEBOL",
          continent: "South America",
        },
        {
          name: "OFC",
          continent: "Oceania",
        },
        {
          name: "CONCACAF",
          continent: " North, Central America and Caribbean",
        },
      ];
    
      const {
        register,
        handleSubmit,
        // watch,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);      
        reset()
      }

      const [images, setImages] = useState([]);
      const [imageURLs, setImagesURLs] = useState([]);

      useEffect(()=>{
        if(images.length<1) return;
        const newImageUrls = []
        images.forEach(image=>newImageUrls.push(URL.createObjectURL(image)));
        setImagesURLs(newImageUrls)
      }, [images]);
      

      function onImageChange(e){
        console.log('oll')
        setImages([...e.target.files])
      }
      //   console.log(watch("example"));
      //   console.log(watch("exampleRequired"));
      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container-form">
            <h1>Clubs</h1>
            <ul className="flex-outer">
              <li>
                <label htmlFor="club-name">Club Name</label>
                <input
                  type="text"
                  id="club-name"
                  {...register("club-name")}
                  placeholder="Enter Club name"
                ></input>
              </li>
              <li>
                <label htmlFor="nation">Nation</label>
                <input
                  type="text"
                  id="nation"
                  placeholder="Enter Club Nationality"
                  {...register("nation")}
                ></input>
              </li>
              <li>
                <label htmlFor="league-name">League Name</label>
                <input
                  type="text"
                  id="league-name"
                  {...register("league-name")}
                  // , { required: true }
                  placeholder="Enter League name here"
                ></input>
                {errors.exampleRequired && <span>This field is required</span>}
              </li>
              
              <li>
                <label htmlFor="conf">Confederation</label>
                <select
                  id="conf"
                  placeholder="Select Confederation"
                  {...register("confederation")}
                >
                  {confederation.map((item, index) => {
                    return (
                      <option key={index} value={confederation.name}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </li>
              <li>
                <label htmlFor="dof">Date of founding</label>
                <input
                  type="date"
                  id="dof"
                  placeholder="Enter Date of founding"
                  {...register("dof")}
                ></input>
              </li>
              <li>
                <label htmlFor="about">About</label>
                <textarea
                  rows="6"
                  id="about"
                  placeholder="Enter about Club"
                  {...register("about-club")}
                ></textarea>
              </li>

              <li>
                <label htmlFor="ranking">Ranking</label>
                <input
                  type="number"
                  id="ranking"
                  
                  placeholder="Enter Club Ranking"
                  {...register("ranking")}
                ></input>
              </li>
              <li>
              <label htmlFor="logo">Club Logo</label>
              <input
                  type="file"
                  id="logo"
                  multiple
                  accept="image/*"
                  onChange={onImageChange}
                  placeholder="Enter Club Logo"
                  {...register("logo")}
                ></input>
                  {imageURLs.map(imageSrc=> <img alt="" src={imageSrc}></img>)}
                
              </li>
    
              
              <li>
                <button className="formSubmit" type="submit">
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </form>
      );
}

export default ClubTab