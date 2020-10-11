import { Header, Footer } from './Nav'
import React from 'react'

const ChapitreLayout: React.FC = ({ children} ) => {
	return (
		<>
			<Header />			
			<div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
			<Footer />
		</>
	)
}

export default ChapitreLayout
