import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styled from 'styled-components'

function FirstPost() {
    return (
        <Container>
            <Head>
                <title>First Post</title>
                </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <MyComponent/>
        </Container>
    )
}

const MyComponent = () => {
    return <Image
    src="/images/handss.jpeg"
    height={200}
    width={144}
    alt="Handss" />
}

const Container = styled.div`
    max-width: 36rem;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
    `

export default FirstPost
