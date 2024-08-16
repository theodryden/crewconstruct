import React from 'react';
import NavBar from '../../components/navbar/NavBar';
import TitleBars from '../../components/titleBars/TitleBars';
import SearchBar from '../../components/searchbar/SearchBar';
import FilterByBar from '../../components/filterbybar/FilterByBar';
import JobPostingContainer from '../../components/jobpostingcontainer/JobPostingContainer';
import LoadMoreButton from '../../components/buttons/loadmorebutton/LoadMoreButton';
import Footer from '../../components/footer/Footer';
import './SearchResultsPage.css'


const SearchResultsPage = () => {
  return (
    <div>
      <NavBar/>
      <TitleBars title={"Explore candidates"}/>
      <SearchBar />
      <FilterByBar/>
      
      <JobPostingContainer 
        trade={"Electrician"}
        companyName={"NGN"}
        jobDescription={"Full-time positions available with opportunities for growth and development in a supportive work environment."}
        />

      <JobPostingContainer 
        trade={"Carpenter"}
        companyName={"NGN"}
        jobDescription={"Full-time positions available with opportunities for growth and development in a supportive work environment."}
        />

      <JobPostingContainer 
        trade={"Scaffolder"}
        companyName={"NGN"}
        jobDescription={"Full-time positions available with opportunities for growth and development in a supportive work environment."}
        /> 

      <JobPostingContainer 
        trade={"Builder"}
        companyName={"NGN"}
        jobDescription={"Full-time positions available with opportunities for growth and development in a supportive work environment."}
        /> 

      <JobPostingContainer 
        trade={"Site manager"}
        companyName={"NGN"}
        jobDescription={"Full-time positions available with opportunities for growth and development in a supportive work environment."}
        /> 
     

      <LoadMoreButton/>
      <Footer />
      
    </div>
  )
}

export default SearchResultsPage
