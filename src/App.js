// // 클래스형 컴포넌트

// import React, { Component } from 'react';
// import TOC from './study/TOC';
// import Content from './study/Content';
// import Subject from './study/Subject';
// import './App.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       subject: {title: 'WEB', sub:'World wide web!'},
//       contents:[
//         {id:1, title:'HTML', desc:'HTML is for information'},
//         {id:2, title:'CSS', desc:'CSS is for design'},
//         {id:3, title:'JavaScript', desc:'JavaScript is for interactive'},
//       ]
//     }
//   }
//   render() {
//     return (
//       <div className="App">
//         <Subject
//           title={this.state.subject.title}
//           sub={this.state.subject.sub}>
//         </Subject>
//         <TOC data={this.state.contents} />
//         <Content title="HTML" desc="HTML is HyperText Markup Language."/>
//       </div>
//     );
//   }
// }

// export default App;

import Movie from "./components/Movie";
import { dummy } from "./movieDummy";

function App() {
  return (
    <div>
      <div className="app-container">
        {dummy.results.map((item) => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;