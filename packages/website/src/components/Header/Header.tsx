import { AppBar, Box, Button, Toolbar, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { ConnectWalletButton } from '../ConnectWalletButton'
import CloseIcon from '@mui/icons-material/Close'
import { NetworkTag } from './NetworkTag'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import { useCustomMediaQuery } from '../../hooks/useCustomMediaQuery'
import { Link, useLocation, matchPath } from 'react-router-dom'

const MobileMenuList = ({ onClose }) => {
  const location = useLocation()

  return (
    <Box
      sx={{
        width: '160px',
        height: '100%',
        background: '#121212',
        borderRight: '1px solid #4F4F4F',
        padding: '25px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <CloseIcon onClick={onClose} />
      </Box>
    </Box>
  )
}

export default function Header() {
  const theme = useTheme()
  const { isMobile } = useCustomMediaQuery()

  const [showBanner, setShowBanner] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // APPBar Banner
  {
    /* useEffect(() => {
    const data = window.localStorage.getItem('DIVA_BANNER')
    if (data !== null) setShowBanner(JSON.parse(data))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('DIVA_BANNER', JSON.stringify(showBanner))
  }, [showBanner])
*/
  }
  // close the mobile menu when the screen size changes to desktop
  useEffect(() => {
    if (!isMobile) setIsMobileMenuOpen(false)
  }, [isMobile])

  return (
    <>
      <Toolbar
        sx={{ marginTop: 12, flexDirection: "column", alignItems: "end" }}
      >
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
        <ConnectWalletButton />
      </Toolbar>

      <Drawer
        anchor={"left"}
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <MobileMenuList onClose={() => setIsMobileMenuOpen(false)} />
      </Drawer>
    </>
  );
}
