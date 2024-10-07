'use client'

import { ReactNode } from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Link from 'next/link'
import Image from 'next/image';
import { useColorMode } from '@chakra-ui/react';
import siteConfig from '@/data/config';

const Logo = (props: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Link
      href="/"
      className='flex justify-start items-center cursor-pointer'
    >
      <Image
        src={colorMode === 'light' ? "/static/images/light.png" : "/static/images/dark.png"}
        width={65}
        height={65}
        alt="Theme logo"
      />
    </Link>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'8xl'} py={10} className='text-sm'>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: 'repeat(6, 1fr)' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© {new Date().getFullYear()} Nead, LLC. All Rights Reserved
            </Text>
            <Text>
              +1 (206) 438-9789
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            {
              siteConfig.footer.links.services.map((link, index) => (
                <Box key={index} as="a" href={link.href}>
                  {link.label}
                </Box>
              ))
            }
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Skills</ListHeader>
            {
              siteConfig.footer.links.skill1.map((link, index) => (
                <Box key={index} as="a" href={link.href}>
                  {link.label}
                </Box>
              ))
            }
          </Stack>
          <Stack align={'flex-start'}>
            <Text fontWeight={'500'} fontSize={'lg'} mb={8}>
              {" "}
            </Text>
            {
              siteConfig.footer.links.skill2.map((link, index) => (
                <Box key={index} as="a" href={link.href}>
                  {link.label}
                </Box>
              ))
            }
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Technologies</ListHeader>
            {
              siteConfig.footer.links.technologies.map((link, index) => (
                <Box key={index} as="a" href={link.href}>
                  {link.label}
                </Box>
              ))
            }
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Industries</ListHeader>
            {
              siteConfig.footer.links.industries.map((link, index) => (
                <Box key={index} as="a" href={link.href}>
                  {link.label}
                </Box>
              ))
            }
          </Stack>
        </SimpleGrid>
        <hr className='mt-[40px]' />
        <div className='flex flex-col sm:flex-row justify-between text-sm gap-2'>
          <Link href="/about">About Us</Link>
          <Link href="/portfolio">Our Work</Link>
          <Link href="/locations">Locations</Link>
          <Link href="https://web.dev.co/?_gl=1*15mbt2l*_ga*MTA1MDM2MTE2NC4xNzE5MzIyMTQ2*_ga_9LG6JJV4E0*MTcyNjczNDIwNC43Ny4xLjE3MjY3MzUzMjIuMTMuMC4w">Web Design</Link>
          <Link href="/blog">Dev Blog</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </Container>
    </Box>
  )
}