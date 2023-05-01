import React from 'react'
import { Routes, Route, HashRouter} from 'react-router-dom'
import Home from './components/pages/Home'
import Templates from './components/pages/Templates'
import Feedback from './components/pages/Feedback'
import TemplatesDeblogs from './components/pages/TemplateDeBlogs'

import TemplateUm from './components/pages/modelos/ShoesSale/TemplateUm'
import TemplateDois from './components/pages/modelos/BolsasSale/TemplateDois'
import {TemplateTres} from './components/pages/modelos/ComputerSale/TemplateTres'
import TemplatesQuatro from './components/pages/modelos/FoneSale/TempQuatro'
import PortiFolio from './components/pages/modelos/bootstrap/Portifolio'

import { View1,View2,View3,View4, View5 } from './components/pages/modelos/Support/PhoneViews'

import { BolsaSorces,CompSources,FonesSources,ShoesSources } from './components/pages/modelos/Support/Sources'
import {createBrowserHistory} from 'history'
export default function App() {
  const history = createBrowserHistory()
  return(
    <div className="App" id='Apps'>
       <HashRouter basename='/' history={history}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Templates' element={<Templates/>}/>
          <Route path='TemplatesDeblogs' element={<TemplatesDeblogs/>}/>
          <Route path='Feedback' element={<Feedback/>}/>

        {/*Pages*/}

          <Route path='Templates/template-de-tenis' element={<TemplateUm/>}/>
          <Route path='Templates/template-de-venda-de-bolsas' element={<TemplateDois/>}/>
          <Route path='Templates/template-de-venda-de-computadores' element={<TemplateTres/>}/>
          <Route path='Templates/template-de-venda-de-Smartphones' element={<TemplatesQuatro/>}/>
          <Route path='Templates/template-de-portifolio' element={<PortiFolio/>}/>


        {/*Templates*/}

          <Route path='Templates/template-de-tenis/use/concluido' element={<ShoesSources/>}/>
          <Route path='Templates/template-de-venda-de-bolsas/use/concluido' element={<BolsaSorces/>}/>
          <Route path='Templates/template-de-venda-de-computadores/use/concluido' element={<CompSources/>}/>
          <Route path='Templates/template-de-venda-de-Smartphones/use/concluido' element={<FonesSources/>}/>

          <Route path='Templates/template-de-tenis/View' element={<View1/>}/>
          <Route path='Templates/template-de-venda-de-bolsas/View' element={<View2/>}/>
          <Route path='Templates/template-de-venda-de-computadores/View' element={<View3/>}/>
          <Route path='Templates/template-de-venda-de-Smartphones/View' element={<View4/>}/>
          <Route path='Templates/template-de-portifolio/View' element={<View5/>}/>
        {/* Telefones Views*/}

        </Routes>
      </HashRouter>
    </div>
  );
}

