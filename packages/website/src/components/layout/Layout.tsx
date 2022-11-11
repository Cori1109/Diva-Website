import React from "react"
import { Box, Flex, Stack } from "@chakra-ui/react"
import { NavBar } from "./NavBar"
import { Footer } from "./Footer"
import Head from "next/head"

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
	return (
		<>
			<Head>
				<title>DIVA Protocol</title>
				<link rel="icon" href="/logo.svg" />
				<meta
					name="description"
					content="DIVA Protocol is a decentralized and permissionless piece of infrastructure that allows its users to create and settle fully customizable financial derivative contracts peer-to-peer."
				/>
				<meta property="og:title" content="DIVA Protocol" />
				<meta
					property="og:description"
					content="DIVA Protocol is a decentralized and permissionless piece of infrastructure that allows its users to create and settle fully customizable financial derivative contracts peer-to-peer."
				/>
				<meta property="og:image" content="/images/featuresbg.png" />
			</Head>
			<Flex
				direction="column"
				justify="space-between"
				bg="#000000"
				minHeight="100vh">
				<NavBar />
				{children}
				<Footer />
			</Flex>
		</>
	)
}

export default Layout
