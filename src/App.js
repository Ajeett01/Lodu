import React from 'react'
import TemporaryDrawer from './RightSection'
import BasicCard from './LeftSection';
import StandardImageList from './image';
import BasicModal from './EditTaskModal';
import BasicButtons from './Button';
import { CheckBox } from '@mui/icons-material';
import Checkboxes from './checkbox';
import BasicList from './List';

const App = () => {
  return (
    <div>
      App
      <TemporaryDrawer />
      <BasicCard/>
      <BasicModal/>
      <BasicList/>
    </div>
  );
}

export default App