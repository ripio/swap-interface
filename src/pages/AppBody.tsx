import React from 'react'
import styled from 'styled-components'

export const BodyWrapper = styled.div`
  position: relative;
  max-width: 460px;
  width: 100%;
  background: ${({ theme }) => theme.bg1};
  border-radius: 15px;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
