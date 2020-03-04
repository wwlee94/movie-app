import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

/*
  - 사이클은 자동으로 발생함 내가 원하든 원하지 않든 ! -
  
  컴포넌트가 존재하기 시작할 때 작동
  Render: componentWillMount() -> render() -> componentDidMount()
  api호출은 willMount 진행할 때 작업하고 render에 데이터 뿌려줌

  데이터가 변경되었을 때 !
  Update: componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()
*/

class App extends Component {
  state = {
    greeting: "hello",
    movies: [
      {
        title: "React",
        poster: "https://blog.itpaper.co.kr/attach/40-frontend-react/logo.jpg"
      },
      {
        title: "Amazon Web Service",
        poster: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99D6533B5C5720CF09"
      },
      {
        title: "Docker",
        poster: "https://docs.docker.com/images/docs@2x.png"
      },
      {
        title: "Express.js",
        poster: "https://t1.daumcdn.net/cfile/tistory/264CA7335967150930"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      // state는 이렇게 하면 render() 동작 안함 -> 꼭 ! setState써서 변경
      // Ex) this.state.greeting = 'Something'
      // 새로운 영화 추가
      this.setState({
        movies: [
          ...this.state.movies, // '...'의미는 이전 리스트는 그대로 두고, 한개를 추가한다는 뜻
          {
            title: "This is a New Movie",
            poster: "https://mblogthumb-phinf.pstatic.net/MjAxODAzMDRfNDIg/MDAxNTIwMTQ4ODYzNTI1.pafkG0llpCTnavxBCXoBl4stv5nDS3P-Xcj5CbZF9c8g.Eai6_HfOtmc45TPcoi4rZr0vQk0pu_LRvjigYShqu50g.PNG.feel940/image_1154452801520148641525.png?type=w800"
          }
          // ...this.state.movies // 이렇게하면 새로운 데이터는 위에 생성
        ]
      })
    }, 2000)
  }

  //데이터가 없을 때 로딩을 띄우고, 있으면 영화 정보가 보이도록
  _renderMovies = () => {
    /* js의 map 기능 -> 조건에 따른 새로운 배열을 만들어줌 */
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
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
