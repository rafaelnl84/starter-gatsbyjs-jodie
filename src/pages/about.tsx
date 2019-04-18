import React from 'react'
import Layout from '../components/layout'
import { AnimatedBox } from '../elements'
import SEO from '../components/SEO'
import { config, useSpring } from 'react-spring'

const About = () => {
  const pageAnimation = useSpring({
    config: config.slow,
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return (
    <Layout>
      <SEO title="About | Jodie" desc="Hi. I'm LekoArts! You can visit my website or my other Gatsby projects." />
      <AnimatedBox style={pageAnimation} py={[6, 6, 6, 8]} px={[6, 6, 8, 6, 8, 13]}>
        <h1>Designed by LekoArts</h1>
        <h2>Enhanced by AppSeed.us</h2>
        <p>
          <a target="_blank" href="https://github.com/rosoftdeveloper/starter-gatsbyjs-jodie">Sources</a>,{' '}
          <a target="_blank" href="https://github.com/rosoftdeveloper/starter-gatsbyjs-jodie/blob/master/deploy.js">FTP Deploy Script</a>,{' '} 
          <a target="_blank" href="https://developers.google.com/speed/pagespeed/insights/?url=https://starter-gatsbyjs-jodie.appseed.us&tab=mobile">Fast as hell</a>.{' '}
          Yours free!
        </p>
      </AnimatedBox>
    </Layout>
  )
}

export default About
