import React from 'react'
import TemporaryDrawer from './RightSection'
import BasicCard from './LeftSection';
import StandardImageList from './image';
import BasicModal from './EditTaskModal';
import BasicButtons from './Button';
import { CheckBox } from '@mui/icons-material';
import Checkboxes from './checkbox';

const App = () => {
  return (
    <div>
      App
      <TemporaryDrawer />
      <BasicCard/>
      <BasicModal/>
    </div>
  );
}

export default App