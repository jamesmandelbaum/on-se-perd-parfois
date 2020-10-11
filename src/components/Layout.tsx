import React from 'react'
import styles from '../../styles/Layout.module.css'

const Layout: React.FC = ({ children }) => {
	return (
		<div className={styles.body}>
			{children}
		</div>
	)
}

export default Layout