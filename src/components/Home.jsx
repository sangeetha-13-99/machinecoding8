import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Outlet } from 'react-router'
import { NavBar } from './NavBar'

export const Home = () => {
  return (
    
    <Grid h="100%" templateAreas={`"header"
    " main"
    "footer"`}
    gridTemplateRows='1fr 8fr 1fr'
    gridTemplateColumns="1fr">
        <GridItem area={'header'} borderBottom="1px solid" display="flex" justifyContent="space-between" alignItems="center" boxShadow="sm" p="2">
              <NavBar/>
        </GridItem>
        <GridItem area={'main'} borderBottom="1px solid"  display="flex" justifyContent="space-between" alignItems="center" boxShadow="sm" p="2">
              <Outlet/>
        </GridItem>
    </Grid>
  )
}
