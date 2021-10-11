import './App.css';
import {Table} from './components/table/Table';
import {statisticsTableData, todoTableData} from './data/todoTableData';

const App = () => {

  return (
    <div className='app'>
      <div>
        <Table
          headerData={todoTableData}
          bodyType='todos'
        />
        <button>Send</button>
      </div>
      <Table
        headerData={statisticsTableData}
        bodyType='statistics'
      />
    </div>
  );
}

export default App;
