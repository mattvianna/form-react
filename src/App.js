import React, { Component } from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import "./App.css";
import "fontsource-roboto";

import { Container, Typography } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário Cadastro
        </Typography>
        <RegisterForm />
      </Container>
    );
  }
}

export default App;
