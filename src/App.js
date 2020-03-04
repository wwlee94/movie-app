import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

/*
  - 리액트 사이클 -
  사이클은 자동으로 발생함 내가 원하든 원하지 않든 ! 
  
  컴포넌트가 존재하기 시작할 때 작동
  Render: componentWillMount() -> render() -> componentDidMount()
  api호출은 willMount 진행할 때 작업하고 render에 데이터 뿌려줌

  데이터가 변경되었을 때 !
  Update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

  - setState - 
  state는 이렇게 하면 render() 동작 안함 -> 꼭 ! setState써서 변경
  Ex) this.state.greeting = 'Something' -> X
      this.setState({greeting: 'Something'}) -> O
  
  - '...' 의 의미
  '...'의미는 이전 리스트는 그대로 두고, 한개를 추가한다는 뜻
  Ex)
  ...this.state.movies,
  {
    title: "This is a New Movie",
    poster: "https://mblogthumb-phinf.pstatic.net/MjAxODAzMDRfNDIg/MDAxNTIwMTQ4ODYzNTI1.pafkG0llpCTnavxBCXoBl4stv5nDS3P-Xcj5CbZF9c8g.Eai6_HfOtmc45TPcoi4rZr0vQk0pu_LRvjigYShqu50g.PNG.feel940/image_1154452801520148641525.png?type=w800"
  }
  //...this.state.movies // 이렇게하면 새로운 데이터는 위에 생성
*/

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    console.log(movies)
    this.setState({
      //movies : movies 와 동일 !
      movies
    })
  }

  _callApi = async () => {
    try {
      const response = await fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count") 
      const json = await response.json();
      return json.data.movies
    } catch (error) {
      console.log(error)
    }
  }

  //데이터가 없을 때 로딩을 띄우고, 있으면 영화 정보가 보이도록
  _renderMovies = () => {
    /* js의 map 기능 -> 조건에 따른 새로운 배열을 만들어줌 
       map의 index 불러오면 성능이 상대적으로 느려짐
    */
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    )
  }
}

export default App;
