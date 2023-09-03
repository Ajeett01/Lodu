import React from 'react'
import TemporaryDrawer from './RightSection'
import BasicCard from './LeftSection';
import StandardImageList from './image';
import BasicModal from './EditTaskModal';
import BasicButtons from './Button';
import { CheckBox } from '@mui/icons-material';
import Checkboxes from './checkbox';
import BasicList from './List';
import RecipeReviewCard from './Card';
import SimpleDialogDemo from './componenets/Dialog';
import BasicTable from './Table';

const App = () => {
  return (
    <div>
      App
      <TemporaryDrawer />
      <BasicCard/>
      <BasicModal/>
      <BasicList/>
      <RecipeReviewCard/>
      <SimpleDialogDemo/>
      <BasicTable/>
    </div>
  );
}

export default App