import React, { createContext, useState } from 'react'

const ProviderComponent = ({children}) => {
  const [activeLink, setActiveLink] = useState('')
  const [loginVisibility, setLoginVisibility] = useState(false)
  const [hoverDisplayVisibility, setHoverDisplayVisibility] = useState(true)
  return (
    <>
    <LoginContext.Provider value={{loginVisibility, setLoginVisibility}}>
    <NavBarContext.Provider value={{activeLink,setActiveLink}}>
     <HoverContentContext.Provider value={{hoverDisplayVisibility,setHoverDisplayVisibility}}>

        {children}
     </HoverContentContext.Provider>
    </NavBarContext.Provider>
    </LoginContext.Provider>
    </>
  )
}

const LoginContext=createContext();
const HoverContentContext= createContext();

const NavBarContext = createContext();
export default ProviderComponent
export {NavBarContext , LoginContext ,HoverContentContext}