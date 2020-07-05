import React, { Component } from 'react';
import axios from 'axios';
import ImageResults from '../ImageScreen/ImageResults';

export default class Search extends Component {
    state = {
       
        searchText: '',
        amount : 15,
        apiUrl : 'https://pixabay.com/api',
        apiKey: '16543179-44bce139b633c8da672e4fd94',
        images: []
    
};



onTextChange = (e) => {
    const val = e.target.value;
    this.setState({[e.target.name]: e.target.value}, () =>{
        if(val === ''){
            this.setState({images: []});
        }else{
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                this.state.searchText
              }&image_type=photo&per_page=${this.state.amount}&safesearch=true`)
              .then(res => this.setState({images: res.data.hits}))
              .catch(err => console.log(err)); 
        }
          
    });
};

onAmountChange = (e, index, value) => this.setState({amount: value});

    render() {
        return (
            <div>
                        <div id="text">
          <div id="left">
            <label className="my-custom-select">
              <select className="my-custom-select__select" name="amount" value={this.state.amount} onChange={this.onAmountChange}>
                <option value={5} className="my-custom-select__option"> 5 Items </option>
                <option value={10} className="my-custom-select__option"> 10 Items </option>
                <option value={15} className="my-custom-select__option"> 15 Items </option>
                <option value={30} className="my-custom-select__option"> 30 Items </option>
                <option value={50} className="my-custom-select__option"> 50 Items </option>
              </select>
            </label>
                
          <h1 className="orang"><img src="/img/orange.png"/></h1>
        </div>
          <h4 className="plue">/Search</h4>
          <p className="donblue">Type Keywords relative to ur ideas to find the images You need.</p>
        </div>
        <form className="search_bar small">
 

          <input type="text" name="searchText" value={this.state.searchText} onChange={this.onTextChange} fullWidth={true}  placeholder="Type Something!..." />
        
          
        </form>
                
        {this.state.images.length > 0 ? 
            <div id="put">
        {(<ImageResults images={this.state.images}/>)}
        </div>
        : 
           <div className="svgg">
           <img src="/img/searchh.svg"/>
           <h5 className="up">Waiting to Search!</h5>
         </div>
        }
        

            </div>
        )
    }
}
