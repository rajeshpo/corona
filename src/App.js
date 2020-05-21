import React from 'react';

import {Cards,Chart,CountryPicker} from './components';
import styles from './App.module.css';
 import {fetchData} from './api';
class App extends React.Component{

    state={
        data:{},
        country:''
    }

    async componentDidMount(){
        const fetchedData=await fetchData();
         

        this.setState({data:fetchedData})
        
    }


    handleCountryChange= async (country)=>{

        const fetchedData=await fetchData(country);
    
        this.setState({data:fetchedData,country:country})
        
    }

render(){
    const {data,country}=this.state;
    return(
<div className={styles.container}>

    <img  className={styles.image} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6NN88L3rmowdVDLtyU1d7KMojLDpiy7zGkADUElqx-mSS80Km&usqp=CAU"} alt={"covid-19"}/>
    <h1>COVID-19</h1>  
    <p className={styles.para}>copyrights @Rajesh</p>
    <Cards data={data}/>
    <CountryPicker  handleCountryChange={this.handleCountryChange} />
    <Chart  data={data} country={country}/>
     
</div>
    )
}
}

export default App;