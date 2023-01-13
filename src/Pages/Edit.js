import React from 'react';
import BudgetEdit from '../Components/BudgetEdit';

const Edit = () => {
    return (
        <div className="New-Edit">
        
      <div>
        <h2>Edit</h2>
        <BudgetEdit />
      </div>
         <div>
        <img
          className="edit-logo"
          // src="https://media0.giphy.com/media/1irGj8vnpt68Oq0kdu/200w.gif"
          src=""
          alt="edit-logo"
          width={300}
        />
      </div>
      </div>
    );
};

export default Edit;