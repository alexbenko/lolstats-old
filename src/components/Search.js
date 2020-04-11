import React from 'react';

class Search extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      search: ''
    };
  }

  handleInputChange(search){
    console.log(search)
    this.props.handleSearchChange(search.target.value);
    this.setState({
      value: search.target.value,
      loaded: false
    })
  }
  render(){
    return (

    <div className="search">
      <input type="text" placeholder="Search For Summoner.." value={this.state.value} onChange={this.handleInputChange.bind(this)}/>
    </div>
    )

  }




}




export default Search ;