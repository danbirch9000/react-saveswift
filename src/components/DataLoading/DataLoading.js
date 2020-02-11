import React from "react";
import PropTypes from "prop-types";
import {ICON_TYPES} from "../../config/types";
import Message from "../../components/Message/Message";
import {observer} from "mobx-react";

const DataLoading = observer((props) => {
  console.log("Dataloading", props);
  let output = "";
  if(props.state.loading) {
    output = <Message 
      message={props.loadingMessage} 
      type={ICON_TYPES.LOADER}/>;
  }else if(props.state.errorMessage){
    output = <Message 
      message={props.state.errorMessage} 
      type={ICON_TYPES.ERROR}/>;
  }else {
    output = props.slot;
  }

  return (
    <div>
      {output}
    </div>
  );
});

DataLoading.propTypes = {
  slot: PropTypes.object,
  state: PropTypes.object,
  loadingMessage: PropTypes.string
};

export default DataLoading;