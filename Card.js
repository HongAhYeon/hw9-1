import React from 'react';
import styles from './styles.css';

const FancyBorder = ({ color, children }) => (
  <div class={`fancyBorder fancyBorder-${color}`}>{children}</div>
);
const Dialog = ({ color, title, message }) => (
  <FancyBorder color={color}>
    <h1 class="dialog-title"> {title} </h1>
    <p class="dialog-message"> {message} </p>
  </FancyBorder>
);

const WarningDialog = () => (
  <Dialog title="This is WarningDialog" message="something went wrong" color="red" />
);

const WelcomeDialog = () => (
  <Dialog title="This is WelcomeDialog" message="front-nerd" color="yellow" />
);

const ErrorDialog = () => (
  <Dialog title="This is ErrorDialog" message="something went wrong" color="blue" />
);

const NoticeDialog = () => (
  <Dialog title="This is NoticeDialog" message="something went wrong" color="black" />
);

function App(){
  return(
    <div>
    <WarningDialog />
    <WelcomeDialog />
    <ErrorDialog />
    <NoticeDialog />
  </div>
  );
}

export default App;