import { Header, Footer } from './Nav'
<<<<<<< HEAD
import React from 'react'

const ChapitreLayout: React.FC = ({ children} ) => {
=======
import React, {useEffect} from 'react'
import {
	motion,
	useViewportScroll,
	useSpring,
	useTransform,
} from 'framer-motion'

const ChapitreLayout: React.FC = ({ children}: React.ReactNode ) => {
>>>>>>> 09a890772e8f7c468200222e58285556e618327b
	return (
		<>
			<Header />			
			<div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
			<Footer />
		</>
	)
}

export default ChapitreLayout
