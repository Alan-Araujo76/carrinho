import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './styles.css'


import Teste from "./teste";
import Contador from "./comunicacaoComps/contador";
import Pedido from "./comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./comunicacaoComps/finalizacaoPedido/conclusao";

import App from './home'
import DetalheProduto from './detalheProduto'
import Carrinho from './carrinho'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
        
        <Route path="/teste" component={Teste} />
        <Route path="/contador" exact={true} component={Contador} />
        <Route path="/pedido" component={Pedido} />
        <Route path="/conclusao" component={ConclusaoPedido} />

      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
