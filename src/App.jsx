import './App.css';
import {Table} from './components/table/Table';
import {statisticsTableData, todoTableData} from './data/todoTableData';
import {ModalEditForm} from './components/modalForm/ModalEditForm';
import {Button} from './components/Button';

const App = () => {

  return (
    <div className='app'>
      <div>
        <Table
          headerData={todoTableData}
          bodyType='todos'
        />
        <Button children='Create Note'/>
      </div>
      <Table
        headerData={statisticsTableData}
        bodyType='statistics'
      />
      <ModalEditForm/>
    </div>
  );
}

export default App;
