import Features from '@/components/Features/Features'
import { Container } from '@/components/ui/container'
import {WaitListBadge} from '@/components/WaitList'
import {WaitListHeroSection }from '@/components/WaitList'
import {WaitListNavbar} from '@/components/WaitList'
import {WaitListSocials} from '@/components/WaitList'
import WaitListFooter from '@/components/WaitList/WaitListFooter'
import React from 'react'

export default function Page() {
  return (
    <div>
         <Container className="">
          <WaitListNavbar />
          <WaitListBadge />
          <WaitListHeroSection />
          <WaitListSocials />
          <Features />
          <WaitListFooter />
         </Container>
    </div>
  )
}
