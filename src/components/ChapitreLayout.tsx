import { Header, Footer } from './Nav'
import React, {useEffect} from 'react'
import {
	motion,
	useViewportScroll,
	useSpring,
	useTransform,
} from 'framer-motion'

const ChapitreLayout: React.FC = ({ children}: React.ReactNode ) => {
	return (
		<>
			<Header />			
			<div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
			<Footer />
		</>
	)
}

export default ChapitreLayout
