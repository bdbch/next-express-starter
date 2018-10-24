import Head from 'next/head'
import GlobalHead from '../GlobalHead'
import GlobalStyles from '../src/Global/GlobalStyles'
import Header from '../src/Components/Header'

export default () => (
  <React.Fragment>
    <Head>
      <title>Next.js Starter</title>
      <GlobalHead />
    </Head>
    <GlobalStyles />
    <div>
      <Header
        title="next-express-starter"
        subTitle="A quick starter with next.js, express and styled-components"
      />
      <a href="https://github.com/bdbch/next-express-starter" target="_blank" rel="nofollow noreferrer">next-express-starter on Github</a>
    </div>
  </React.Fragment>
)
