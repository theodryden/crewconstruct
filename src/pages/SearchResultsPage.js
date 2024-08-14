import React from 'react';
import NavBar from '../components/navbar/NavBar';
import TitleBars from '../components/titleBars/TitleBars';
import SearchBar from '../components/searchbar/SearchBar';
import FilterByBar from '../components/filterbybar/FilterByBar';
import JobPostingContainer from '../components/jobpostingcontainer/JobPostingContainer';
import LoadMoreButton from '../components/buttons/loadmorebutton/LoadMoreButton';
import Footer from '../components/footer/Footer';

const SearchResultsPage = () => {
  return (
    <div>
      <NavBar/>
      <TitleBars title={"Explore candidates"}/>
      <SearchBar />
      <FilterByBar/>
      <JobPostingContainer 
      trade={"Construction Worker"}
      companyName={"NGN"}
      jobDescription={"Full-time positions available with opportunities for growth and development in a supportive work environment."}
      />
      <LoadMoreButton/>
      <Footer />
      
      
    </div>
  )
}

export default SearchResultsPage
