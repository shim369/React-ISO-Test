import React from 'react';
import { useInView } from 'react-intersection-observer';
import './App.css';
import 'animate.css';

function App() {
	const { ref, inView } = useInView({
		rootMargin: '-100px',
		triggerOnce: false,
	});
  return (
    <div className="App">
		<div style={{ height: '800px', backgroundColor: 'blue' }}></div>
		<div ref={ref} style={{ height: '800px',backgroundColor: 'yellow' }}>
			{inView && (
				<div className="text animate__animated animate__fadeInUp">text</div>
			)}
		</div>
    </div>
  );
}

export default App;
