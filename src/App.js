import { useRef } from "react";
import "./App.module.css";
import { Container, Form, Jumbotron } from './UI';
import {email, required} from './validators';

const App = () => {
  const formRef = useRef();

  const handleSubmit = (value) => {
    console.log(formRef.current.value);
    formRef.current.clear();
  };

  return (
    <Container>
      <Jumbotron text="Registration" />
      <Form 
        items={[
          {label: 'First Name', name: 'firstName', validator: required},
          {label: 'Last Name', name: 'lastName', validator: required},
          {label: 'Email Address', name: 'email', validator: email},
          {label: 'Username', name: 'username', validator: required},
          {label: 'Password', name: 'password', type:"password", validator: required},
          {label: 'Confirm Password', name: 'confirmPassword', type: "password",  validator: required}
        ]}
        onSubmit={handleSubmit}
        ref={formRef}
      />
    </Container>
  );
};

export default App;
