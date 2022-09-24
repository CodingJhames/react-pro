import { Suspense } from "react";
import { BrowserRouter, Route, NavLink, Routes, Navigate } from "react-router-dom";
import logo from "../assets/react.svg";
import { routes } from './routes';

// import { LazyPage1,LazyPage2,LazyPage3 } from '../01-lazyload/pages/index';


export const Navigation = () => {


  return (

    <Suspense fallback={ <span>Loading...</span> }  >
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="React Logo"/>
                    <ul>
                        {/* <li>
                            <NavLink to='/lazy1' className={ ({ isActive}) => isActive ? 'nav-active' : ''  } >Lazy 1</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy2' className={ ({ isActive}) => isActive ? 'nav-active' : ''  } >Lazy 2</NavLink>
                        </li>
                        <li>
                            <NavLink to='/lazy3' className={ ({ isActive}) => isActive ? 'nav-active' : ''  } >Lazy 3</NavLink>
                        </li> */}



                                {   
                                    routes.map( route => ( 
                                        <li key={ route.to } >
                                            <NavLink 
                                                to={ route.to } 
                                                className={ ({ isActive}) => isActive ? 'nav-active' : ''  } >
                                                { route.name }
                                            </NavLink>
                                        </li>
                                    )) 
                                    
                                }
                            
                        
                    </ul>
                </nav>

                
                    {/* <Route path="lazy1" element={<LazyPage1 />} />
                    <Route path="lazy2" element={<LazyPage2 />} />
                    <Route path="/lazy3" element={<LazyPage3 /> } />
                    <Route path="/*" element={<Navigate to='/lazy1'replace/>} /> */}

                <Routes>    
                    {   
                            routes.map( route=> (
                                
                                    <Route 
                                        key={ route.path } 
                                        path={ route.path } 
                                        element={ <route.Component /> } 
                                    />
                            ) )
                    }

                        <Route path="/*" element={<Navigate to='/lazy1' replace/>} /> 
                </Routes>

            </div>
    
        </BrowserRouter>
    </Suspense>
    
    )
}
