import React, { Component } from 'react';
import Searcher from './components/Searcher';
import Results from './components/Results';


const URL_BASE ="https://api.mercadolibre.com/"
const URL_SEARCH = URL_BASE + "sites/MCO/search"
  class App extends Component {

    state ={
      term : '',
      data : [],
      page : ''
    }

    previousPage=()=>{

      //leer state actua de la pagina
      let page = this.state.page;
      //leer y si la pagina es 1 no ir hacia atras
      if(page===1) return null;
      page --;
      //agregar cambio al state
      this.setState({
        page
      }, ()=>{
        this.getApi();
        this.scroll();
      });

      //console.log(page);
    }

    nextPage=()=>{
      //leer state actua de la pagina
      let page = this.state.page;
      //sumar 1 a la pagina actual
      page ++;
      //agregar cambio al state
      this.setState({
        page
      }, ()=>{
        this.getApi();
        this.scroll();
      });

      //console.log(page);
    }

    scroll = ()=>{
      const element =document.querySelector('.jumbotron');
      element.scrollIntoView({block: "end", behavior: "smooth"});
    }

    getApi =()=>{

      const url = URL_SEARCH
      const page = this.state.page;
      const result = `${url}?q=${this.state.term}&offset=${page}`;

      //console.log(result);
      fetch(result)
        .then(response => response.json() )
        .then(result => this.setState({data : result.results}))
    
    }

    dataSearch = (term)=>{
      this.setState({
        term : term,
        page : 1
      },()=>{
        this.getApi();
      })
    }

  render() {
      return (
        <div className="app container">
          <div className="jumbotron" >
            <p className="lead text-center">Buscador de productos</p>

            <Searcher
              dataSearch={this.dataSearch}
            />
          </div>
          <div className="row justify-content-center">
              <Results  
                data={this.state.data}
                previousPage={this.previousPage}
                nextPage={this.nextPage}
              />
          </div>
        </div>
      );
    }
  }
export default App;
