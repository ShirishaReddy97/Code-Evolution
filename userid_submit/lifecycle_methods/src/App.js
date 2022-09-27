import './App.css';
import ClickCounter from './components/ClickCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import Counter from './components/Counter';
import ErrorBoundary from './components/ErrorBoundary';
import FocusInput from './components/FocusInput';
import FragmentDemo from './components/FragmentDemo';
import FRParentInput from './components/FRParentInput';
import Hero from './components/Hero';
import HoverCounter from './components/HoverCounter';
import HoverCounterTwo from './components/HoverCounterTwo';
import LifecycleA from './components/LifecycleA';
import MemoComp from './components/MemoComp';
import ParentComp from './components/ParentComp';
import PortalDemo from './components/PortalDemo';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';


import Table from './components/Table';
import User from './components/User';

function App() {
  return (
    <div className="App">
      {/* <LifecycleA/> */}
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <PureComp/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary> 
    <Hero heroName="Batman"/>
    </ErrorBoundary>
    <ErrorBoundary> 
    <Hero heroName="Superman"/>
    </ErrorBoundary>
    <ErrorBoundary> 
    <Hero heroName="Joker"/>
    </ErrorBoundary> */}
      {/* <ClickCounter name="Shirisha"/>
    <HoverCounter/> */}
      {/* <ClickCounterTwo/>
    <HoverCounterTwo/>
    <User render={(isLoggedIn)=>isLoggedIn?'Shirisha':'Guest'}/> */}
      <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
