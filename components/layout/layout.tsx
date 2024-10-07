import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav'
import Header, { HeaderProps } from './header'
import Footer from './footer'

interface LayoutProps {
  children: ReactNode
  headerProps: HeaderProps
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, headerProps } = props
  return (
    <Box>
      <Header {...headerProps} />
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
      <Footer />
    </Box>
  )
}
