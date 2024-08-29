import MovieCard from './components/MovieCard'
import './App.scss'
import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import useDebounce from './hooks/useDebounce'

const VITE_AUTHORIZATION = import.meta.env.VITE_AUTHORIZATION

function App() {
  const [movieList, setMovieList] = useState([])
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 2000)
  console.log(movieList)

  useEffect(() => {
    const fetchMovies = async () => {
      fetch('https://api.themoviedb.org/3/movie/popular?language=ko&page=1', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${VITE_AUTHORIZATION}`,
          accept: 'application/json',
        }
      })
        .then(response => response.json())
        .then(response => {
          setMovieList(response.results);
        })
        .catch(err => {
          console.error(err);
        });
    };

    fetchMovies();
  }, [])

  useEffect(() => {
    if (debouncedSearch) {
      const searchMovies = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?query=${debouncedSearch}&language=ko`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${VITE_AUTHORIZATION}`,
            accept: 'application/json',
          }
        })
          .then(response => response.json())
          .then(data => {
            setMovieList(data.results);
          })
          .catch(err => {
            console.error(err);
          });
      };

      searchMovies();
    }
  }, [debouncedSearch]);

  return (
    <div className='app-container'>
      <NavBar onSearch={setSearch} />
      {movieList.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster={movie.poster_path}
          vote={movie.vote_average} />
      )
      )}
    </div>
  )
}

// Array.map(element, index)=> { 새로운 배열을 반환하는 로직}  
// array : 원본 배열, element: 현재 요소, index:현재 요소의 인덱스(생략 가능)
//map 메소드를 사용하여 배열의 각 요소(movie)에 MovieCard컴포넌트 렌더링 
// key ={movie.id} 리스트를 렌더링할때 각 항목에 고유한 key가 필요
// map() 함수는 배열 안에 있는 각 원소를 반환할때 원소들을 이용하여 새로운 배열을 만들어줌
// 순서 :  배열 순회, 변환, 리턴, 렌더링
//배열이 순회한다는 것은 배열의 각 요소를 차례대로 하나씩 처리한다는 것
// 배열의 첫번째 요소부터 마지막 요소까지 차례대로 접근후, 해당 요소에 대해 특정 작업을 수행하는 과정을 배열 순호
// 배열 순회는 원본 배열의 길이만큼 콜백함수 호출
//호출된 각 배열의 현재 요소, 인덱스, 그리고 전체 배열이 인자로 전달
// 변환은 콜백 함수에 전달된 요소를 변환하여 새로운 값을 반환된 값이 모여 새로운 배열을 구성
// 리턴은 변환된 새로운 배열을 반환, 이 배열이 jsx요소의 배열이 된다. 
// 렌더링은 numbers.map(()=>{}) 해달 화살표 함수의 소괄호 안에 들어가는 것은 매개변수(배열의 현재요소)_


export default App

//useEffect : 컴포넌트가 렌더링 된 이후에 어떤 일을 수행해야 하는지
//useEffect를 컴포넌트 내부에 둠으로써 Effect를 통해 변수 또는 props에 접근할 수 있게 된다. 
// class 에서는 componentDidMount에 구독을 설정한 뒤 componentWillUnMount에서 정리(clean-up)한다.
// 컴포넌트가 마운트 해제되는 때에 clean-up 실행
//두번째 인수로 [] 빈 배열을 넘기면 정리(마운트와 마운트 해제 시)에 딱 한번만 실행
//[] 빈배열을 넘기면 effect안의 Prop과State는 초깃값 유지

// 컴포넌트가 마운트 됐을 때 : 가장 처음 렌더링 될 때 한번만 실행하고 싶을 때 두번째인자에 [] 빈배열
// 만약 배열을 생략한다면 리렌더링 될때마다 실행
// 컴포넌트가 업데이트될 때 :  특정값이 업데이트될때 실행하고 싶을 때는 [] 배열 안에 특정값 넣기 어차피 초반에 렌더링됨
//두번째 파라미터 [] 는 의존성배열
// 컴포넌트가 언마운트 될때와 업데이트 되기 직전 :  return뒤에 다오는 함수 = clean up함수 반환
// 언마운트 될 때만 Clean up 함수 실행 하고 싶으면 useEffect 속 Return 문에서 두번째 파라미터로 빈배열
// 특정 값이 업데이트 되기 전에 CLean up 함수를 실행하고 싶을 때 useEffect 속 Return 문에서 [] 안에 특정값