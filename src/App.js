import { lazy, Suspense } from 'react';
import './App.css';
import Loading from './utils/Loading';
const ProductList = lazy(()=>import('./components/ProductList')) ;

function App(){
  return(
    <Suspense fallback={<Loading />} >
      <ProductList />
    </Suspense>
  );
}

export default App;
